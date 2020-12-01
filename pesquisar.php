<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/styles/global.css">
    <link rel="stylesheet" href="./assets/styles/busca.css">
    <link rel="stylesheet" href="./assets/styles/interface.css">
    <link rel="shortcut icon" href="./assets/images/favicon.png" >

    <title>Busca</title>
</head>
<body onload="allCharge('search')">


    <div id="loading">
        <div class="loader">
            <span>CARREGANDO...</span>
            <img src="./assets/images/loader.gif" class="invert" alt="">
        </div>  
    </div>


<?php
    $connect = mysqli_connect('127.8.8.8:3306','root', '');
    $db_selected = mysqli_select_db($connect,'pinspire');
    $tagsSearch = $_POST['tags'];
    $pedacos = explode(" ", $tagsSearch);
    $s = "";
    foreach ($pedacos as $tag) {
        $s .= "tags LIKE '%".$tag."%' OR "; #monta a query
    }
    $query_tags = substr($s, 0, -4); #query menos o ultimo OR
    $query_final = "SELECT * FROM imagens WHERE $query_tags";
    $resultado_pesquisa = mysqli_query($connect, $query_final);
    

?>
        <div class="back-feed" style="height: 230px"></div>

        <div class="head">
            <a href="index.html">
                <img src="./assets/images/logo-right.png" alt="Logo"><br>
            </a>
            <a href="./index.html">
                <button class="back-home">
                    <img src="./assets/images/arrow-left.svg" alt="voltar">
                </button>
            </a>
        </div>
        <div class="feed">
            <?php
                try{
                    while($row = mysqli_fetch_array($resultado_pesquisa)){
                        
                        if($row["caminho"] != "assets/upImages/"){
                        
                            $caminho = $row["caminho"];
                            
                            $tags = $row["tags"];
                            
                            $separatedTags = explode(' ', $tags, -1);

                            echo "<div>";
                            echo "<img src=".$caminho.">";
                            echo "<a href=".$caminho." download><button class='download'>Baixar</button></a><br>";
                            
                            echo '<div class="tags">';
                            foreach($separatedTags as $item) {
                                echo "<p>".$item."</p>";     
                            }
                            echo "</div>";
                            echo "<hr class='feed-separator'>";
                            echo "</div>";
                        }

                    }
                }    
                catch(Exception $e){
                    echo 'Exceção capturada: ',  $e->getMessage(), "\n";
                }
            ?>
        </div>
    <link rel="stylesheet" href="./assets/styles/menu.css">
    
    <script src="./src/feed.js"></script>
    <script src="./src/pageReact.js"></script>

</body>
</html>