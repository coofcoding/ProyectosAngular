<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-Width, Content-Type, Accept');

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");
    $con = retornarConexion();

    mysqli_query($con, "UPDATE articulos SET descripcion='$params->descripcion', 
                                             precio=$params->precio 
                                             WHERE codigo=$params->codigo");

    class Result {
        public $resultado;
        public $mensaje;
    }

    $response = new Result();
    $response -> resultado = 'OK';
    $response -> mensaje = 'datos modificados';

    header('Content-Type: application/json');
    echo json_encode($response);