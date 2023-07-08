<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-with, Content-Type, Accept');

require("conex.php");

header('Content-Type: application/json');
$json = file_get_contents('php://input');
$params = json_decode($json);

$user = null;
$id_game = null;

class dbConnection extends retornarConexion
{


    public function getLogin($user)
    {
        $con = $this->connection();
        $result = $con->prepare("SELECT username, pass FROM users WHERE username=:accountUsername");
        $result->bindParam(":accountUsername", $user, PDO::PARAM_STR);

        try {
            $result->execute();

            $cad = json_encode($result->fetch(PDO::FETCH_OBJ));
            echo $cad;
        } catch (Exception $e) {
            return $e;
        }
    }

    public function createUser($params)
    {
        $con = $this->connection();
        $result = $con->prepare("INSERT INTO users (id_user, username, pass, id_roll) VALUES (NULL, :nUsername, :nPassword, '2');");
        $result->bindParam(":nUsername", $params->nUsername, PDO::PARAM_STR);
        $result->bindParam(":nPassword", $params->nPassword, PDO::PARAM_STR);
        try {
            $result->execute();
        } catch (Exception $e) {
            return $e;
        }
    }

    public function getGames()
    {
        try {
            $con = $this->connection();
            $result = $con->prepare("SELECT id_game, game_name, author, publish_date FROM videogames;");
            $result->execute();
            //$cad = json_encode($result->fetch(PDO::FETCH_OBJ));
            //echo $cad;

            while ($reg = $result->fetch(PDO::FETCH_OBJ)) {
                $vec[] = $reg;
            }

            $cad = json_encode($vec);
            echo $cad;
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    public function addNewGame($params)
    {
        try {
            $con = $this->connection();
            $result = $con->prepare("INSERT INTO videogames (id_game, game_name, author, publish_date, id_user) VALUES (NULL, :nameGame, :authorGame, :publishDateGame, '1');");
            $result->bindParam(":nameGame", $params->game_name, PDO::PARAM_STR);
            $result->bindParam(":authorGame", $params->author, PDO::PARAM_STR);
            $result->bindParam(":publishDateGame", $params->publish_date, PDO::PARAM_STR);
            try {
                $result->execute();
            } catch (Exception $e) {
                return $e;
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deleteGame($id_game) {
        try {
            $con = $this->connection();
            $result = $con->prepare("DELETE FROM videogames WHERE id_game=:idGame");
            $result->bindParam(":idGame", $id_game, PDO::PARAM_STR);
            try {
                $result->execute();
            } catch (Exception $e) {
                return $e;
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function editGame($params)
    {
        try {
            $con = $this->connection();
            $result = $con->prepare("UPDATE videogames SET game_name=:nameGame, author=:authorGame, publish_date=:publishDateGame WHERE videogames.id_game=:gameId;");
            $result->bindParam(":gameId", $params->id_game, PDO::PARAM_STR);
            $result->bindParam(":nameGame", $params->game_name, PDO::PARAM_STR);
            $result->bindParam(":authorGame", $params->author, PDO::PARAM_STR);
            $result->bindParam(":publishDateGame", $params->publish_date, PDO::PARAM_STR);
            try {
                $result->execute();
            } catch (Exception $e) {
                return $e;
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}

if (isset($_GET['username'])) {
    try {
        $user = $_GET['username'];
        $response = new dbConnection();
        $response->getLogin($user);
    } catch (\Throwable $th) {
        throw $th;
    }
}

if ($json != "") {
    $response = new dbConnection();
    $response->createUser($params);
}

if (isset($_GET['games'])) {
    try {
        $user = $_GET['games'];
        $response = new dbConnection();
        $response->getGames();
    } catch (\Throwable $th) {
        throw $th;
    }
}

if (isset($_GET['n_game'])) {
    $response = new dbConnection();
    $response -> addNewGame($params);
}

if (isset($_GET['delete_game'])) {
    $id_game = $_GET['delete_game'];
    $response = new dbConnection();
    $response -> deleteGame($id_game);
}

if (isset($_GET['edit_game'])) {
    $response = new dbConnection();
    $response -> editGame($params);
}
