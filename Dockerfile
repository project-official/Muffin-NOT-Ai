FROM node:18.17.1
RUN mkdir app
WORKDIR /app
COPY . .
RUN yarn install --immutable --immutable-cache
RUN yarn build


ENTRYPOINT ["yarn", "start"]