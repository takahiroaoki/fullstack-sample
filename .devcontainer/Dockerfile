FROM amazoncorretto:17-al2023

RUN yum update && yum install -y \
    maven-1:3.8.4-3.amzn2023.0.5 \
    nodejs-1:18.18.2-1.amzn2023.0.1 \
    tar-2:1.34-1.amzn2023.0.3 \
    git-2.40.1-1.amzn2023.0.1 \
    && rm -rf /var/cache/yum/* \
    && yum clean all