# project-format

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
# @project-format (Or, you can use devcontainer of VSCode)
$ docker compose -f .devcontainer/docker-compose.local.yml up -d
$ docker exec -it web-frontend /bin/bash

# First time only
$ npm ci

# Build frontend source with watch mode
$ npm run dev
```

Backend Build with development mode
```
# @project-format/backend/demo
$ mvn spring-boot:run
```

Then get access to the sample page (http://localhost:8080/demo/sample)

## Architecture

### Frontend

<img width="355" alt="image" src="https://github.com/takahiroaoki/project-format/assets/69064981/b588f240-0a39-4208-8c11-e124a3504cac">


### Backend

<img width="836" alt="image" src="https://github.com/takahiroaoki/project-format/assets/69064981/8cb2273c-e9f0-4c2a-82b7-e12d9fd670a0">


## Directory
### Frontend

The all html-files are copied into frontend/build/templates directory.

The all ts-files are bundled and transpiled into frontend/build/static/pages/${page}/index.js.

The all scss-files are bundled and compiled into frontend/build/static/pages/${page}/index.css.

The directory of frontend/build/ is bind-mounted to the directory of resources/ in backend source.

frontend/src/
- common/
  - components/${component}/
  - layout/
- pages/
  - ${page}/
    - ${component}/
    - index.html, index.scss, index.ts

### Backend

The directories are split in the order of "Object Type -> Page -> Action".

Some "common" packages will be made on the same layer as page or action.

demo/
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
