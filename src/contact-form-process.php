<?php
if (isset($_POST['mail'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_from = "mailer@cx20182.tmweb.ru";
    $email_to = "tolkachev.valentin@yandex.ru";
    $email_subject = "Новая заявка";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
				echo "Please go back and fix these errors.<br><br>";
        die(header("HTTP/1.0 400 Not Found"));
    }

    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['number'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = $_POST['name']; // required
    $email = $_POST['mail']; // required
    $number = $_POST['number']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br>';
    }

    if (strlen($number) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Number: " . clean_string($number) . "\n";

    // create email headers
    $headers = 'From: ' . $email_from . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
				'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);
	?>

			<!-- include your success message below -->

			Thank you for contacting us. We will be in touch with you very soon.

	<?php
}
?>