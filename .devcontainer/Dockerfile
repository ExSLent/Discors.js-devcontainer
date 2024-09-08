FROM alpine:latest

RUN apk add nodejs
RUN apk add npm
RUN apk add git
RUN apk add openssh

RUN mkdir /root/.ssh
COPY /.ssh/id_rsa /root/.ssh/id_rsa
RUN chmod o-x /root/.ssh/id_rsa

CMD echo Container Started