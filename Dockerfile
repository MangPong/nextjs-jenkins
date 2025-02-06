FROM nginx:latest
COPY --from=builder /app/out /usr/share/nginx/html

