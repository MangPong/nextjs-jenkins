# Stage 1: Build Next.js
FROM node:18 AS builder
WORKDIR /app

# Copy package.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy โค้ดทั้งหมดและ Build Next.js เป็น Static
COPY . .
RUN npm run build && npm run export

# Stage 2: Serve Static Files ด้วย Nginx
FROM nginx:latest
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
