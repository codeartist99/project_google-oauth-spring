package taskflowmanager.taskflowmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.bind.annotation.RequestMapping;
import taskflowmanager.taskflowmanager.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class TaskflowmanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskflowmanagerApplication.class, args);
	}

}
