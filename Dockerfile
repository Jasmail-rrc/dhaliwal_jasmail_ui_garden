FROM node:20-alpine AS build

WORKDIR /dhaliwal_jasmail_final_site

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /dhaliwal_jasmail_final_site

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /dhaliwal_jasmail_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]