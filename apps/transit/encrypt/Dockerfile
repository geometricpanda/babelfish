FROM babelfish/dependencies:latest
WORKDIR /monorepo/apps/broker

COPY ./ ./

RUN yarn build

CMD ["yarn", "serve"]

EXPOSE 3000
