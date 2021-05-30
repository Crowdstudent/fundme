<?php

$sname= "localhost";
$unmae= "root";
$password = "root";
$db_port = 8889;
$db_name = "test_db";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}
