FROM alpine:latest

RUN apk add nodejs
RUN apk add npm

ADD . /bot/
WORKDIR /bot/

RUN npm install

CMD node index.js