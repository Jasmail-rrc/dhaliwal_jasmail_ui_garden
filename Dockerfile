FROM node:20-alpine AS build

WORKDIR /dhaliwal_jasmail_ui_garden_build_checks

COPY package*.json ./

RUN npm ci

COPY . .

ENV CI=true

RUN npm run format:check
RUN npm run lint
RUN npm run test:ci
RUN npm run build

FROM nginx:alpine

WORKDIR /dhaliwal_jasmail_ui_garden_build_checks

COPY --from=build /dhaliwal_jasmail_ui_garden_build_checks/build .

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]