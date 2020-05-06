FROM node:12-alpine

LABEL maintainer="Fernando Barbosa Silva"

# Create app directory
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]