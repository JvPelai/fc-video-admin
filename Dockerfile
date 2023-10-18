FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

#mantem container up
CMD ["tail", "-f", "/dev/null"]