<?php

// $data = array( 'panelid'=>'100','value'=>1234 );
// echo gettype($_POST);
// foreach ($_GET['arr'] as $key => $value) {
//  echo $value;
// }

$obj = json_decode($_GET['arr'], true);
print $obj["panelid"];

// foreach ($_GET as $key => $value) {

 // echo $key->panelid;
// }
// echo $_GET['panelid']
// foreach ($_GET as $key => $value) {

//  echo $key[''];
// }


// foreach ($data as $key => $value) {
//  echo $key;
// }

// echo $_POST;
// print_r($_POST)
// foreach ($_POST as $key => $value) {
//  echo $key;
// }
?>
