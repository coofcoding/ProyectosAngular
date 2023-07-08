<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-Width, Content-Type, Accept');

    require("conexion.php");
    $con = retornarConexion();

    mysqli_query($con, "DELETE FROM articulos WHERE codigo=$_GET[codigo]");

    class Result {
        public $resultado;
        public $mensaje;
    }

    $response = new Result();
    $response -> resultado = 'OK';
    $response -> mensaje = 'articulo borrado';

    header('Content-Type: application/json');
    echo json_encode($response);