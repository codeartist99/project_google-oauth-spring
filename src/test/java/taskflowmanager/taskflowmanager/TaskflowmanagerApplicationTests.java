package taskflowmanager.taskflowmanager;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.apache.tomcat.util.descriptor.web.ContextResource;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import taskflowmanager.taskflowmanager.config.AppProperties;

@SpringBootTest
class TaskflowmanagerApplicationTests {

	@Autowired
	AppProperties appProperties;

	@Test
	void contextLoads() {
	}


	@Test
	void checkSecretKeyAlgo() {
		byte[] keyBytes = Decoders.BASE64.decode(appProperties.getAuth().getTokenSecret());
		int byteLength = keyBytes.length * 8;
		System.out.printf("[LOG]---------------------- byteLength : [ %d ]%n", byteLength);

	}

}
