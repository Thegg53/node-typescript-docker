FROM node:14-slim
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn run tsc 

CMD yarn "$(if [ $NODE_ENV = 'production' ] ; then echo 'start' ; else echo 'dev'; fi)"
