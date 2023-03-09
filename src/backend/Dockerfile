FROM node:latest
LABEL application="CH-TECH"
LABEL component="backend"
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD npm start