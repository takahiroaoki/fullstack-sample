FROM amazoncorretto:17-al2023

RUN yum update && yum install -y \
    maven-1:3.8.4-3.amzn2023.0.5 \
    nodejs-1:18.18.2-1.amzn2023.0.1 \
    && rm -rf /var/cache/yum/* \
    && yum clean all

COPY ./app/ /mnt/app/

WORKDIR /mnt/app/frontend

RUN npm ci && npm run build

WORKDIR /mnt/app/backend/demo

RUN mvn clean install && mvn package spring-boot:repackage -Dspring.profiles.active=prod

# second stage for boot up
FROM amazoncorretto:17-al2023

RUN yum update && yum install -y \
    shadow-utils-2:4.9-12.amzn2023.0.2 \
    tar-2:1.34-1.amzn2023.0.3 \
    gzip-1.12-1.amzn2023.0.1 \
    && rm -rf /var/cache/yum/* \
    && yum clean all

ARG USERNAME=prod-user

RUN useradd $USERNAME

USER $USERNAME

COPY --from=build /mnt/app/backend/demo/target/demo-0.0.1-SNAPSHOT.jar /home/$USERNAME/demo-0.0.1-SNAPSHOT.jar

WORKDIR /home/$USERNAME/

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "demo-0.0.1-SNAPSHOT.jar" ]