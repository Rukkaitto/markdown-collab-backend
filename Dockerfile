FROM node:12.4

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 8080