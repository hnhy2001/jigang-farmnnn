FROM --platform=linux/amd64 nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./www /usr/share/nginx/html