FROM node:11.14-alpine

RUN \
  wget https://github.com/pawlu87/node-api/archive/development.zip \
  && unzip development.zip

WORKDIR /node-api-development

RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]
