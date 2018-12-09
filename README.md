# Slim Framework + Angular
Use this repository if you would like to start your project with Slim Framework using PHP and Angular for the frontend.

## Prerequisites
* Docker *(Optional)*
* Docker Compose *(Optional)*
* PHP 7.0+
* MySQL
* Angular CLI
* Composer

We recommend that you use our docker image  instead of trying to manage everything on your own. With our docker image, you can get up and running in minutes.

## Docker Setup Instructions
Use the following instructions if you have Docker installed on your machine.

#### 1. Build the image
Navigate to the repository directory using your command line tool and use the following command to build the included dockerfile as an image.
```shell
docker build -t <image_name> . 
```

#### 2. Update docker-compose.yml
Open the docker-compose.yml file in your favorite editor and edit the image variable to the new name of the image set in Step 1.
```yml
services:
  website:
    image: <image_name>
```

#### 3. Scaffold Application
Run the following command from the repository directory to have Docker create the necessary Apache+PHP and MySQL containers.
```shell
docker-compose up -d
```

#### 4. Install PHP Project Dependencies
Run the following command on your terminal
```shell
docker exec <container_name> composer install
```