# Muffin-NOT-Ai

- 이 프로젝트는 한 Discord 서버에서 내수용으로 사용할려고 만든 Discord상에서 사용가능한 봇입니다.

## 사용법

### 종속성

- 이 프로젝트는 Node.JS을 사용하고, 패키지 매니저를 Yarn Berry로 사용합니다.
- 이 프로젝트는 MariaDB(또는 MySQL)와 Database ORM인 Prisma를 사용합니다.

#### 종속성 설치

```sh
yarn install
```

### 설정 파일

- 이 프로젝트는 설정파일을 프로젝트 루트에 있는 `.env`으로 하며, 그 내용은 `example.env`에서 확인할 수 있습니다.

#### Docker 설정

- Docker로 실행할 경우, 해당 설정 파일을 `docker.env`으로 하며, 그 내용은 `example-docker.env`에서 확인할 수 있습니다.

### prisma 설정

- 해당 프로젝트는 Database ORM인 Prisma를 사용하여 해당 설정이 필요합니다.

1. 먼저 .env에 DATABASE_URL부분을 채워 줍니다.

   - 예시: `mysql://username:user_password@hostname:port/database?schema=public`

2. 터미널 에서 `yarn db:push`를 합니다.

### 실행

위 과정들을 정상적으로 따랐다면, 아래의 명령어로 봇을 실행할 수 있습니다.

#### 그냥 실행 (디버그용 로그 출력)

```sh
yarn dev
```

#### 빌드 후 실행

##### 빌드

```sh
yarn build
```

##### 실행

```sh
yarn start
```
