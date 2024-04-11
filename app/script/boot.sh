#/bin/sh

cd /mnt/app/frontend
npm run build

cd /mnt/data-layer
mvn -T 4 clean install

cd /mnt/app/backend
mvn -T 4  clean spring-boot:run