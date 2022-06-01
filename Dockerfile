FROM debian

RUN apt update
RUN apt -y install nginx

RUN rm /var/www/html/*
COPY ./dist /var/www/html

RUN rm /etc/nginx/sites-enabled/default
COPY ./nginx /etc/nginx/sites-enabled

EXPOSE 54321/tcp

CMD ["nginx", "-g", "daemon off;"]