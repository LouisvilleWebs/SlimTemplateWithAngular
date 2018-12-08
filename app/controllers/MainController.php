<?php

namespace App\Controllers;

class MainController {
  protected $container;
  protected $view;

  public function __construct($container){
    $this->container = $container;
  }

  public function home($request, $response, $args){
    $this->view = $this->container->get("view");

    return $this->view->render($response, 'home.html');
  }

}
