app-run:app-front app-back
	
app-front:
	cd app/frontend && npm run build
	rm -rf app/backend/src/main/resources/static
	rm -rf app/backend/src/main/resources/templates
	mv app/frontend/build/static app/backend/src/main/resources
	mv app/frontend/build/templates app/backend/src/main/resources

app-back:
	cd data-layer && mvn -T4 clean install
	cd app/backend && mvn -T4 clean spring-boot:run

mybatis-gen:
	cd data-layer && mvn mybatis-generator:generate

app-front-install:
	cd app/frontend && npm ci

build:app-front-install app-front
	cd data-layer && mvn clean install
	cd app/backend && mvn clean package spring-boot:repackage