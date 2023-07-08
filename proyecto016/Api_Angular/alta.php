<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-Width, Content-Type, Accept');

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");
    $con = retornarConexion();

    $descripcion = mysqli_real_escape_string($con, $params -> descripcion);
    $precio = mysqli_real_escape_string($con, $params -> precio);

    mysqli_query($con, "INSERT INTO articulos (descripcion, precio) VALUES
                        ('$descripcion', '$precio')");

    class Result {
        public $resultado;
        public $mensaje;
    }

    $response = new Result();
    $response -> resultado = 'OK';
    $response -> mensaje = 'datos grabados';

    header('Content-Type: application/json');
    echo json_encode($response);