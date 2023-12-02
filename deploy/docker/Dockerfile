# first stage for build
FROM openjdk:21-slim as build

RUN apt-get update && apt-get install -y --no-install-recommends \
    maven=3.8.7-1 \
    nodejs=18.13.0+dfsg1-1 \
    npm=9.2.0~ds1-1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY ./app/ /mnt/app/

WORKDIR /mnt/app/frontend

RUN npm ci && npm run build

WORKDIR /mnt/app/backend/demo

RUN mvn clean install && mvn package spring-boot:repackage -Dspring.profiles.active=prod

# second stage for boot up
FROM openjdk:21-slim

ARG USERNAME=prod-user

RUN useradd -m $USERNAME

USER $USERNAME

COPY --from=build /mnt/app/backend/demo/target/demo-0.0.1-SNAPSHOT.jar /home/$USERNAME/demo-0.0.1-SNAPSHOT.jar

WORKDIR /home/$USERNAME/

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "demo-0.0.1-SNAPSHOT.jar" ]