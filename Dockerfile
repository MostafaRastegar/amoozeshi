FROM mirror.imbco.ir:4000/library/node:8.11.4-alpine
ARG ADMIN_BACKEND
ARG APP_BASE_URL
ARG APP_BASE_CANONICAL_URL

RUN apk update && apk add g++ make gcc zlib-dev

RUN  npm install -g npm@6.4.0

WORKDIR /var/www/html

COPY package.json yarn.lock ./
COPY .env.example ./.env
COPY internals ./internals

RUN sed -i -e 's,APP_URL=,APP_URL='"$ADMIN_BACKEND"',g' .env
RUN sed -i -e 's,APP_BASE_URL=,APP_BASE_URL='"$APP_BASE_URL"',g' .env
RUN sed -i -e 's,APP_BASE_CANONICAL_URL=,APP_BASE_CANONICAL_URL='"$APP_BASE_CANONICAL_URL"',g' .env

RUN yarn install

COPY . .

RUN yarn build

FROM mirror.imbco.ir:4000/library/nginx:1.14.0

RUN rm -Rf /etc/nginx/nginx.conf
COPY deployment_conf/nginx/nginx.conf /etc/nginx/nginx.conf

# nginx site conf
RUN mkdir -p /etc/nginx/sites-enabled/ && \
rm -Rf /var/www/* && \
mkdir -p /var/www/html/ && \
rm -Rf /etc/nginx/sites-enabled/*

COPY deployment_conf/nginx/default.conf /etc/nginx/sites-enabled/default.conf

WORKDIR /var/www/html

COPY --from=0  /var/www/html/build ./build

RUN chown -R nginx:nginx .

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
