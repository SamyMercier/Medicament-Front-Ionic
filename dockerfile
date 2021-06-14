FROM node:12.16.1-alpine

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm","run", "dev" ]