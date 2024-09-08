FROM alpine:latest

RUN apk add nodejs
RUN apk add npm
RUN apk add git
#RUN apk add sshd

RUN mkdir /root/.ssh
COPY /.ssh/id_rsa /root/.ssh/id_rsa

CMD echo Container Started