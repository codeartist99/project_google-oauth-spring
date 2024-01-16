package taskflowmanager.taskflowmanager.auth.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.util.SerializationUtils;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

public class CookieUtils {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static Optional<Cookie> getCookie(HttpServletRequest request, String name) {
//        System.out.println("=============================================================[LOG] CookieUtils.getCookie");
        Cookie[] cookies = request.getCookies();

        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    return Optional.of(cookie);
                }
            }
        }
        return Optional.empty();
    }

    public static void deleteCookie(HttpServletRequest request, HttpServletResponse response, String name) {
//        System.out.println("=============================================================[LOG] start - CookieUtils.deleteCookie");
//        System.out.printf("=============================================================[LOG] name : %s \n", name);
//        System.out.println("=============================================================[LOG] end - CookieUtils.deleteCookie");
        Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    cookie.setValue("");
                    cookie.setPath("/");
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                }
            }
        }
    }

    public static void addCookie(HttpServletResponse response, String name, String value, int maxAge) {
//        System.out.println("=============================================================[LOG] start - CookieUtils.addCookie");
//        System.out.printf("=============================================================[LOG] name : %s \n", name);
//        System.out.printf("=============================================================[LOG] value : %s \n", value);
//        System.out.println("=============================================================[LOG] end - CookieUtils.addCookie");
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(maxAge);
        response.addCookie(cookie);
    }

    public static String serialize(Object object) {
//        System.out.println("=============================================================[LOG] CookieUtils.serialize");
        return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(object));
    }

    public static <T> T deserialize(Cookie cookie, Class<T> cls) {
//        System.out.println("=============================================================[LOG] CookieUtils.deserialize");
        return cls.cast(SerializationUtils.deserialize(
                Base64.getUrlDecoder().decode(cookie.getValue())));
    }

//    public static String serialize(Object object) {
//        try {
//            return Base64.getUrlEncoder()
//                    .encodeToString(objectMapper.writeValueAsString(object).getBytes());
//        } catch (JsonProcessingException ex) {
//            throw new RuntimeException("Faild to serialize cookie", ex);
//        }
//    }
//
//    public static <T> T deserialize(Cookie cookie, Class<T> cls) {
//        try {
//            return objectMapper.readValue(new String(Base64.getUrlDecoder().decode(cookie.getValue())), cls);
//        } catch (IOException ex) {
//            throw new RuntimeException("Faild to deserialize cookie", ex);
//        }
//    }
}
