FROM node:latest

RUN useradd jenkins --shell /bin/bash --create-home
USER jenkins
