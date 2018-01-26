<?php
    $servername = "$localhost";
    $username = "alexis";
    $password = "july27th";
    $dbname = "game";
    $uName = $_GET["uName"];
    $uScore = $_GET["uScore"];
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $statement = $conn->prepare("INSERT INTO HighestScores (Name, Score) VALUES ('$uName', '$uScore')");
        $statement->execute();
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }
?>