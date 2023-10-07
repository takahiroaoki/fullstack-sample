# web

## Tech Stack
Frontend
- TypeScript 5.5
- Webpack 5.88
- Sass

Backend
- Amazon Corretto 17.0
- Apache Maven 3.9

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