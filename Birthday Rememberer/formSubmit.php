<?php
              
if(isset($_POST['user_name']))
{
$data=$_POST['user_name'];
$fp = fopen('birthdayList.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}
?>