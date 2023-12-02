FROM openjdk:21-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    maven=3.8.7-1 \
    nodejs=18.13.0+dfsg1-1 \
    npm=9.2.0~ds1-1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*