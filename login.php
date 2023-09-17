<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Replace the following with your database connection code
    // For security, consider using prepared statements and password hashing
    $db_username = "your_database_username";
    $db_password = "your_database_password";

    // Check if the input matches the database records
    if ($username === $db_username && $password === $db_password) {
        // Successful login
        session_start();
        $_SESSION["username"] = $username; // Store user data in a session
        header("Location: dashboard.php"); // Redirect to the dashboard or another page
        exit();
    } else {
        // Invalid credentials
        $error_message = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <form class="form" action="login.php" method="POST">
            <h2>Login</h2>
            <?php
            if (isset($error_message)) {
                echo '<p class="error-message">' . $error_message . '</p>';
            }
            ?>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.html">Sign up here</a></p>
    </div>
</body>
</html>
