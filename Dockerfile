FROM node:16-alpine as frontend

# Устанавливает констансту APP_DIR

ENV APP_DIR /app/
WORKDIR ${APP_DIR}

COPY . ./
RUN yarn install

ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["yarn", "prod"]
