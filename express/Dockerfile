FROM node:16-alpine as base

WORKDIR /app/express

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

FROM node:16-alpine as production

WORKDIR /build

COPY --from=base /app/express/build .