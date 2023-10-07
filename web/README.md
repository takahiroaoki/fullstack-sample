# web

## Requirement
- Docker Desktop
- Amacon Corretto 17.0
- Apache Maven 3.9

## Tech Stack
### Frontend
- TypeScript
- Webpack
- Sass

Frontend source is built on docker container.

### Backend
- Java
- Apache Maven

## Development

Frontend Build with development mode
```
# @project-format/web
$ docker compose -f docker-compose.dev.yml up -d
$ docker exec -it web-frontend /bin/bash

# First time only
$ npm ci

# Build frontend source with watch mode
$ npm run dev
```

Backend Build with development mode
```
# @project-format/web
$ mvn spring-boot:run
```

Then get access to the demo page (http://localhost:8080/demo)