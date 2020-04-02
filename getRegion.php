<?php
/**
 * Created by PhpStorm.
 * User: skyincom
 * Date: 12/11/19
 * Time: 4:41 PM
 */
function file_get_contents_curl($url) {

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"]);
    curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 8);
    curl_setopt($ch, CURLOPT_TIMEOUT, 8);
    $data = curl_exec($ch);
    curl_close($ch);

    return $data;

}

header('Content-Type: application/json');
if(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR']) {
    $region = file_get_contents_curl('http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR']);
}else{
    $region=json_encode(['error'=>'no ip address']);
}

echo $region;
exit();