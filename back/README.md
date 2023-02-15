<h2> How to install laravel correctly </h2>

#Run ´composer install´
followed by  ´php artisan key:generate´ too ´php artisan jwt:secret´ now create the database and name it correctly in the .env file ´php artisan migrate´ now activate the sedders ´php artisan db:seed --class=ProductSeeder´ and ´php artisan db:seed --class=UserSeeder´ with this configuration you can now run ´php artisan serve´
