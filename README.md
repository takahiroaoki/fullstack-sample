# project-format

## Requirement
- Docker Desktop

## Tech Stack
### Frontend
- TypeScript
- Webpack
- Sass

### Backend
- Java
- MyBatis
- Apache Maven
- MySQL
- Redis

## Development

Start of docker container for development
```
# @project-format (Or, you can use devcontainer of VSCode)
$ docker compose -f .devcontainer/docker-compose.infra.yml up -d
$ docker compose -f .devcontainer/docker-compose.app.yml up -d
$ docker exec -it demo-app /bin/bash

# First time only
$ cd /mnt/app/frontend && npm ci

# Build frontend source with watch mode
$ cd /mnt/app/frontend && npm run dev
```

Backend Build with development mode
```
# First time only
$ cd /mnt/data-layer && mvn clean install
$ cd /mnt/app/backend/demo && mvn clean install

# Boot up application
$ cd /mnt/app/backend/demo && mvn spring-boot:run
```

Then get access to the sample page (http://localhost:8080/demo/sample)

## Build Image for Deploy(WIP)
```
# @project-format
$ docker build -t ${image-name} -f ./deploy/docker/Dockerfile ../..

# after pull of the image above, run the image in the production server
$ docker run -p8080:8080 ${image-name}
```

Then get access to the sample page (http://${the server domain}/demo/sample)

## Architecture

### Frontend

<img width="355" alt="image" src="https://github.com/takahiroaoki/project-format/assets/69064981/b588f240-0a39-4208-8c11-e124a3504cac">


### Backend

<img width="950" alt="image" src="https://github.com/takahiroaoki/project-format/assets/69064981/39507e86-41fd-4095-9439-f5b5e3402af8">


## Directory
### Frontend

The all html-files are copied into frontend/build/templates directory.

The all ts-files are bundled and transpiled into frontend/build/static/pages/[page]/index.js.

The all scss-files are bundled and compiled into frontend/build/static/pages/[page]/index.css.

The directories under frontend/build/ are copied to the directory of resources/ in backend source.

app/frontend/src/
- common/
  - components/[component]/
  - layout/
  - modules/
- pages/
  - [page]/
    - [component]/
    - index.html, index.scss, index.ts

### Backend

The directories are split in the order of "Object Type -> Page -> Action".

Some "common" packages will be made on the same layer as page or action.

demo/
- controller/[page]/
  - [Action]Controller.java
  - helper/[Action]Helper.java
  - form/[Action]Form.java
  - response/[action]/
    - component/
    - View.java
    - Ajax.java
- service/[page]/[action]/
  - prm/[MethodName]Prm.java
  - rst/[MethodName]Rst.java
  - [SomeThing]Service.java
- dao/[page]/[action]/[TargetData]Dao.java
- session/[ObjectName].java
- enum/[EnumName].java
