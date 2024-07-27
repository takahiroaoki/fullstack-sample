app-run:app-front app-back
	
app-front:
	cd /mnt/app/frontend \
	&& npm run build

app-back:
	cd /mnt/data-layer \
	&& mvn -T 4 clean install \
	&& cd /mnt/app/backend \
	&& mvn -T 4  clean spring-boot:run

mybatis-gen:
	cd /mnt/data-layer \
	&& mvn mybatis-generator:generate

app-front-install:
	cd /mnt/app/frontend \
	&& npm ci