<?php 
    class retornarConexion{

       private $host = 'localhost';
       private $DBname = 'videoyogos';
       private $user= 'root';
       private $pass = '';

       protected function connection(){
        try{
            $conn = new PDO("mysql:host=$this->host;dbname=$this->DBname", $this->user,  $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }catch(PDOException $e){
            echo("Cannot connect to data base try again: " . $e -> getMessage());
            return null;
        }
       }
    }