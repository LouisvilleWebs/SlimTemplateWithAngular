<?php

require __DIR__ . "/../vendor/autoload.php";


// Load up environment
$env = "dev";

switch($env){
  case "dev":
    $config = require __DIR__ . "/../app/config/dev.environment.php";
    break;
  case "prod":
    $config = require __DIR__ . "/../app/config/prod.environment.php";
    break;
}

// Create app instance
$app = new \Slim\App($config);

// Load up dependencies and path routes.
require __DIR__ . "/../app/config/dependencies.php";
require __DIR__ . "/../app/config/routes.php";

// Run the application
$app->run();
