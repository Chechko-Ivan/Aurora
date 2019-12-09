<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$phone=filter_input(INPUT_POST,'phone',FILTER_SANITIZE_STRING);
$email=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
$comment=filter_input(INPUT_POST,'message',FILTER_SANITIZE_STRING);

if($phone){
  $to = 'info@maksis.by, chechkovania@gmail.com';

  $subject = "Заявка с сайта othodi-pvh.ru";

  $message = "Пользователь: {$name} <br>";
  $message.="Телефон: {$phone}<br>";
  $message.="Эл.почта: {$email}<br>";
  $message.="Сообщение: {$comment}<br>";

  $mailheaders = "Content-type:text/html;charset=utf-8".PHP_EOL;
  $mailheaders .= "From: othodi-pvh.ru <noreply@othodi-pvh.ru>".PHP_EOL;
  $mailheaders .= "Reply-To: noreply@othodi-pvh.ru".PHP_EOL;

  mail($to, $subject, $message, $mailheaders);
  echo json_encode(['success'=>'Спасибо за вашу заявку. Мы перезвоним вам в ближайшее время.']);

  return;
}

echo json_encode(['error'=>'К сожелению не удалось отправить заявку. Проверьте введенные данные и попробуйте еще раз.']);
