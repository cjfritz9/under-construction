FROM node:18-alpine

WORKDIR /

COPY package*.json ./
COPY /server /server

RUN ["npm", "run", "deploy:install"]

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "deploy"]