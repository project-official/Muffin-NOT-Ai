FROM node:18.17.1
RUN mkdir app
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build


ENTRYPOINT ["yarn", "start"]