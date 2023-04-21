FROM node:18-alpine

WORKDIR /api-type-docker

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]