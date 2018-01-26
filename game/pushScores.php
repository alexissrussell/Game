<?php
  include_once('db.php');
  $score = $_POST['Score'];
  mysql_query("INSERT INTO HighestScores VALUES('', '', '$Score')");
 ?>