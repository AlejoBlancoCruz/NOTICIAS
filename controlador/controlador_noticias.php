<?php
// $xml_file_content = file_get_contents('https://newsapi.org/v2/everything?q=espa%C3%B1a&apiKey=4b31d5f75fb74787ae821808243f03d1&language=es');
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://newsapi.org/v2/everything?q=espa%C3%B1a&apiKey=4b31d5f75fb74787ae821808243f03d1&language=es");
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$xml_file_content = curl_exec($ch);
curl_close($ch);
$datos = json_decode($xml_file_content, true);
echo json_encode($datos);
?>