package taskflowmanager.taskflowmanager.security;


import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import taskflowmanager.taskflowmanager.config.AppProperties;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class TokenProvider {
    private static final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    private AppProperties appProperties;

    private SecretKey secretKey;

    public TokenProvider(AppProperties appProperties) {
        byte[] keyBytes = Decoders.BASE64.decode(appProperties.getAuth().getTokenSecret());
        secretKey = Keys.hmacShaKeyFor(keyBytes);

        this.appProperties = appProperties;
    }


    public String createToken(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

//        logger.info("userPrincipal: {}", userPrincipal);

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + appProperties.getAuth().getTokenExpirationMsec());

        String token = Jwts.builder()
                .subject(Long.toString(userPrincipal.getId()))
                .issuedAt(new Date())
                .expiration(expiryDate)
                .signWith(secretKey)
                .compact();

//        logger.info("token: {}", token);


        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

//        logger.info("claims: {}", claims.toString());

        return token;
    }

    public Long getUserIdFromToken(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return Long.parseLong(claims.getSubject());
    }

    public boolean validationToken(String token) {
        try {
            Jws<Claims> temp = Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token);
            logger.info("temp: {}", temp.toString());
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalud JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT calims string is empty");
        }
        return false;
    }

}
