<?php
 $path = 'birthdayList.txt';
 
 if (isset($_POST['user_name']) && isset($_POST['birthday'])) {
    $fh = fopen($path,"a+");
    $string = $_POST['user_name'].' - '.$_POST['birthday'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>