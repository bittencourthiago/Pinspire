<?php

    $path = "assets/upImages/".$_FILES['imagem_add']['name'];//dir e name da imagem
    $temp = $_FILES['imagem_add']['tmp_name'];//não sei
    move_uploaded_file($temp, $path);

    $tags = array();//criando array
    $verifiedTags = "";

    $esporte = (isset ($_POST['esporte'])) ? 1 : 0;
    $arte = (isset ($_POST['arte'])) ? 1 : 0;
    $comida = (isset ($_POST['comida'])) ? 1 : 0;
    $tecnologia = (isset ($_POST['tecnologia'])) ? 1 : 0;
    $natureza = (isset ($_POST['natureza'])) ? 1 : 0;
    $jogos = (isset ($_POST['jogos'])) ? 1 : 0;
    $infantil = (isset ($_POST['infantil'])) ? 1 : 0;
    $musica = (isset ($_POST['musica'])) ? 1 : 0;

    $tags = [
        "esporte" => $esporte, 
        "arte" =>$arte, 
        "comida"=>$comida, 
        "tecnologia"=>$tecnologia, 
        "natureza"=>$natureza,
        "jogos"=>$jogos, 
        "infantil"=>$infantil, 
        "musica"=>$musica
    ];

    foreach($tags as $key=>$value) {
        
        if($value == 1 ){ 
            $verifiedTags = $verifiedTags."$key ";
        }
    }
        
    $connect = mysqli_connect('127.8.8.8:3306','root', '');
    $db_selected = mysqli_select_db($connect,'pinspire');

    $query = "INSERT INTO imagens (caminho, tags) VALUES ('$path','$verifiedTags')";
    $insert = mysqli_query($connect,$query);


    header('Location: index.html');

?>