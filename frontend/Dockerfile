FROM node:14-alpine as build

WORKDIR /usr/src/app/

COPY package*.json yarn.lock* ./
# RUN npm ci --only=production
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html/

EXPOSE 80
CMD [ "nginx", "-g" , "daemon off;"]
