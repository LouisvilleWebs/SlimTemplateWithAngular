FROM php:7.2-apache
COPY ./docker_image_files/httpd.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite
RUN service apache2 restart
RUN php -v
RUN apt-get update -y
RUN apt install curl git unzip -y
RUN cd ~
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
EXPOSE 80