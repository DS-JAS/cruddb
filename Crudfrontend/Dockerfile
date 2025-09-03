# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app

COPY package.json ./
# COPY package-lock.json ./   # Optional: only if you have it
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
