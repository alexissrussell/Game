<?php
    $servername = "localhost";
    $username = "alexis";
    $password = "july27th";
    $dbname = "game";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $statement = $conn->prepare("SELECT Name, Score FROM HighestScores ORDER BY score DESC LIMIT 1");
        $statement->execute();
        $rows = $statement->fetchAll();
        foreach ($rows as $row) {
            echo "<tr><td class='high-scores-name'>" . $row['Name'] . "</td><td>" . $row['Score'] . "</td></tr>";
        }
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }
?>