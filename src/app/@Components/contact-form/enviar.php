<?php

  $destinatario = "kintalgonzalo40@gmail.com";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $contenido = "Nombre: " . $name . "\n Correo: " . $email . "\nMensaje: " . $message;

  mail($destinatario, "Contacto", $contenido);
  echo "<script>alert('¡Correo enviado exitosamente!')</script>"
  echo "<script>setTimeout(\"location.href='contact-form.component.html'\", 1000)</script>"

?>