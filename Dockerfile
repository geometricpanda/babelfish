# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory for the whole monorepo
WORKDIR /monorepo

# Copy the root package.json, yarn.lock, and Yarn config files into the container
COPY package.json turbo.json yarn.lock .yarnrc.yml ./
COPY ./.yarn ./.yarn
COPY ./packages ./packages

COPY ./apps/broker/package.json ./apps/broker/package.json
COPY ./apps/webhook/storyblok/package.json ./apps/webhook/storyblok/package.json


# Install dependencies for the entire monorepo using Yarn workspaces
RUN yarn install --immutable && \
    rm -rf \
        .yarn/cache \
        apps
