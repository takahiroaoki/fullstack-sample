# app

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
# @fullstack-sample (Or, you can use devcontainer of VSCode)
$ docker compose -f .devcontainer/docker-compose.infra.yml up -d
$ docker compose -f .devcontainer/docker-compose.app.yml up -d
$ docker exec -it demo-app /bin/bash

# First time only
$ make app-front-install

# Boot up application
$ make app-run
```

Then get access to the sample page (http://localhost:8080/demo/sample)

## Architecture

### Frontend

<img width="355" alt="image" src="https://github.com/takahiroaoki/fullstack-sample/assets/69064981/b588f240-0a39-4208-8c11-e124a3504cac">


### Backend

<img width="950" alt="image" src="https://github.com/takahiroaoki/fullstack-sample/assets/69064981/39507e86-41fd-4095-9439-f5b5e3402af8">


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
- controller/
  - [Page][Action]Controller.java
  - helper/[Page][Action]Helper.java
- service/[Page][Action]Service.java
- repository/
  - Custom[TargetData]Repository.java
  - mapper/Custom[TargetData]Mapper.java
- dto/
  - form/[Page][Action]Form.java
  - response/[page]/[action]/
    - component/
    - View.java
    - Ajax.java
  - session/[ObjectName].java
  - service/[page]/[action]/
    - [Method]Arg.java
    - [Method]Rst.java
  - repository/[page]/[action]/
    - [Method]Arg.java
    - [Method]Rst.java
