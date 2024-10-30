FROM node:22
USER node
WORKDIR /app

COPY --chown=node:node . . 

RUN npm ci && npm run compile

CMD ["npm","start"]