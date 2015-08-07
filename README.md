# Duplicate profiles

## Overview

Application for finding and removing duplicate user profiles

## Installation

```
composer install
./app/console doctrine:database:create
./app/console doctrine:migrations:migrate
npm install
gulp build
```

## Testing

```
gulp test
```

## Running

Assuming that you have MySQL listening on 127.0.0.1:3306
```
php -S localhost:8080 -t web
```
