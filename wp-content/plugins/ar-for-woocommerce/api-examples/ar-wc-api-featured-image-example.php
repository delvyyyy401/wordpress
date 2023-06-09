<?php
/**
 * AR Display
 * https://augmentedrealityplugins.com
 * API Endpoint JSON Data Post AR Models to WordPress - Example Script
**/

//AR Display Licence Key
$key = '';

//URL of your WordPress site
$wp_url = 'https://yoursite.com';

//Template Json data
$json_data = '[{"id":123,"featured_image":"https:\/\/yoursite.com\/wp-content\/uploads\/your_file.jpg"}]';

//*************************
$post = ['key' => $key,'json'=> $json_data];
$ar_api_url = $wp_url.'/wp-json/ar-wc-display/featuredimage/';
$agent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $ar_api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, $agent);
curl_setopt($ch, CURLOPT_REFERER, 'https://dev.augmentedrealityplugins.com/');
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
$response = curl_exec($ch);
echo $response;
?>