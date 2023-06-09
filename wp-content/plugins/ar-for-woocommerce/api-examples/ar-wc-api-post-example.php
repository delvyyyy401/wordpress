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
$json_data = '[{"id":"1234","title":"Title goes here","author":"1","date":"","status":"publish","featured_image":"",usdz_file":"","glb_file":"","skybox_file":"","ar_environment":"","ar_placement":"","ar_x":"","ar_y":"","ar_z":"","ar_field_of_view":"","ar_zoom_in":"","ar_zoom_out":"","ar_exposure":"","ar_shadow_intensity":"","ar_shadow_softness":"","ar_rotate":"","ar_variants":"","ar_environment_image":"","ar_resizing":"","ar_view_hide":"","ar_qr_hide":"","ar_animation":"","ar_autoplay":"","ar_cta":"","ar_cta_url":""}]';

//*************************
$post = ['key' => $key,'json'=> $json_data];
$ar_api_url = $wp_url.'/wp-json/ar-wc-display/update/';
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