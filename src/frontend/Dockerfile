FROM node:latest
LABEL application="CH-TECH"
LABEL component="frontend"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start