<?php
if(isset($_POST['inputEmail'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "hennaherbalcare@gmail.com";
    $email_subject = "hennaherbalcare.com | Contact Query";
 
    function died($error) {
        // your error code can go here
        echo "<p style='color: red; font-size: 16px; font-family: Open Sans, sans-serif, arial;'>We are very sorry, but there were error(s) found with the form you submitted.</p>";
        // echo "These errors appear below.<br /><br />";
        // echo $error."<br /><br />";
        echo "<p style='color: red; font-size: 16px; font-family: Open Sans, sans-serif, arial;'>Please go back and fix these errors.</p>";
        die();
    }
 
    // validation expected data exists
    if(!isset($_POST['inputName']) ||
        !isset($_POST['inputPhone']) ||
        !isset($_POST['inputEmail']) ||
        !isset($_POST['inputSubject']) ||
        !isset($_POST['inputMessage'])) {
        died("<p style='color: red; font-size: 16px; font-family: Open Sans, sans-serif, arial;'>We are sorry, but there appears to be a problem with the form you submitted.</p>");       
    }     
 
    $full_name = $_POST['inputName']; // required
    $phone = $_POST['inputPhone']; // required
    $email_from = $_POST['inputEmail']; // required
    $subject = $_POST['inputSubject']; // required
    $comments = $_POST['inputMessage']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  // if(!preg_match($email_exp,$email_from)) {
  //   $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  // }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  // if(!preg_match($string_exp,$full_name)) {
  //   $error_message .= 'The Name you entered does not appear to be valid.<br />';
  // }
 
  // if(!preg_match($string_exp, $phone)) {
  //   $error_message .= 'The Phone you entered does not appear to be valid.<br />';
  // }
 
  // if(strlen($comments) < 2) {
  //   $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  // }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = " <html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body><p style='font-size: 15px; text-decoration: underline; font-family: arial; font-weight:bold; color: #6fac28; text-transform: uppercase;'>Enquiry/Feedback details from hennaherbalcare.com:</p>\n\n"; 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }        

    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: red;'>Name: <b style='color: #000000;'>".clean_string($full_name)."</b></p>";
    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: red;'>Phone: <b style='color: #000000;'>".clean_string($phone)."</b></p>";
    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: red;'>Email: <b style='color: #000000;'>".clean_string($email_from)."</b></p>";
    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: red;'>Subject: <b style='color: #000000;'>".clean_string($subject)."</b></p>";
    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: red;'>Comments: <b style='color: #000000;'>".clean_string($comments)."</b></p>";

    $user_ip = getenv('REMOTE_ADDR');
    $geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$user_ip"));
    $country = $geo["geoplugin_countryName"];
    $city = $geo["geoplugin_city"];
    $email_message .= "<p style='font-size: 15px; font-family: arial; font-weight:bold; color: #6fac28; text-decoration: underline; text-transform: uppercase;'>Below are the user location details:</p>";
    $email_message .= "<p style='font-size: 14px; font-family: arial; font-weight:bold; color: red;'>User IP: <b style='color: #000000;'>" . $user_ip . "</b></p>";
    $email_message .= "<p style='font-size: 14px; font-family: arial; font-weight:bold; color: red;'>User Country: <b style='color: #000000;'>" . $country . "</b></p>";
    $email_message .= "<p style='font-size: 14px; font-family: arial; font-weight:bold; color: red;'>User City: <b style='color: #000000;'>" . $city . "</b></p></body></html>";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'Bcc: hinamudassir.30@gmail.com' . "\r\n" . 
'Bcc: syed.mudassir.m@gmail.com' . "\r\n" . 
'Bcc: mir.tousifulla@gmail.com' . "\r\n" . 
'Bcc: mirmohsin1993@gmail.com' . "\r\n" . 
'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
<p style='color: green; font-size: 16px; font-family: Open Sans, sans-serif, arial;'>Thank you for contacting us. We will be in touch with you very soon.</p>
 
<?php
 
}
?>