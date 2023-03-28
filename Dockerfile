FROM node:lastest

WORKDIR /api-type-docker

COPY package*.json ./

RUN npm i

COPY ..

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]