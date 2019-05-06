FROM node:alpine as builder
WORKDIR /home/frontend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm start"]
