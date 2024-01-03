# LEARNING_NOTES

##### ImprovedNamingStrategy

spring:jpa:hibernate.namaing-strategy: org.hibernate.cfg.ImprovedNamingStrategy

- 자바에서 Camel Case 사용 -> 데이터베이스에서는 사용하기에 부적절

  따라서 Camel Case -> Snake Case로 변환해주는 전략

##### MariaDBDialect

spring.jpa.properties.dialect: org.hibernate.dialect.MariaDBDialect

- **jpa**에서 **dialect**를 사용하는 이유
  - jpa는 기본적으로 어플리케이션에서 직접 jdbc 레벨의 sql을 작성하지 않고 jpa가 직접 sql를 작성하고 실행
  - dbms 종류마다 사용하는 sql이 다르기 때문데 jpa가 해당 dbms에 맞춰 sql을 생성해야하기 때문에 dialect를 사용