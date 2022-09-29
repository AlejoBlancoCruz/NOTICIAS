<?php
$xml_file_content = file_get_contents('https://newsapi.org/v2/everything?q=espa%C3%B1a&apiKey=4b31d5f75fb74787ae821808243f03d1&language=es');
$datos = json_decode($xml_file_content, true);
echo json_decode($datos);
?>