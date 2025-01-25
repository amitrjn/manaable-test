#!/bin/bash

# Create storage directory structure if it doesn't exist
mkdir -p /var/www/html/storage/app/public
mkdir -p /var/www/html/storage/framework/{cache,sessions,testing,views}
mkdir -p /var/www/html/storage/logs

# Set proper permissions
chown -R www-data:www-data /var/www/html/storage
chmod -R 775 /var/www/html/storage

# Create storage link if it doesn't exist
php artisan storage:link || true

# Clear caches
php artisan config:clear
php artisan cache:clear

# Start Apache
apache2-foreground
