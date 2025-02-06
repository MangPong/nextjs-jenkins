# Step 1: Build Next.js
FROM node:18 AS builder
WORKDIR /app

# Copy package.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# สร้าง Static Files
RUN npm run build && npm run export

# Step 2: ใช้ Nginx Serve Static Files
FROM nginx:latest
WORKDIR /usr/share/nginx/html

# คัดลอก Static Files ไปที่ Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# คัดลอกไฟล์ config Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# เปิดพอร์ต 80
EXPOSE 80

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]
