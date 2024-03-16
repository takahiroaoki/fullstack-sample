#/bin/sh

cd /mnt/data-layer
mvn clean install

cd /mnt/app/backend
mvn clean spring-boot:run