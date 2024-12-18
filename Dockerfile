FROM node:23

WORKDIR /app

COPY package.json yarn.lock* .

RUN yarn install

COPY . .

CMD ["yarn", "start"]
