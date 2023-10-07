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

## Architecture

## Directory
### Backend

The directories are split in the order of "Object Type -> Page -> Action".

Some "common" packages will be made on the same layer as page or action.

jp/co/company/web/
- controller/${page}/
  - ${Action}Controller.java
  - helper/${Action}Helper.java
- service/${page}/${Action}Service.java
- dao/${page}/${action}/${TargetData}Dao.java
- dto
  - request/${page}/${Action}Param.java
  - response/${page}/${action}/
    - component/${Component}.java
    - View.java | Ajax.java
  - dxo_in/${page}/${action}/In${ServiceMethod}.java
  - dxo_out/${page}/${action}/Out${ServiceMethod}.java
  - dao_param/${page}/${action}/Prm${DaoMethod}.java
  - dao_result/${page}/${action}/Rst${DaoMethod}.java