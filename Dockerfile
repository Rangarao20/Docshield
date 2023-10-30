FROM node:16
WORKDIR /src
COPY package*.json server.js ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "server.js" ]