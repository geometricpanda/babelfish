FROM babelfish/dependencies:latest
WORKDIR /monorepo/apps/webhook/storyblok

COPY ./ ./

RUN yarn build

CMD ["yarn", "serve"]

EXPOSE 3000
