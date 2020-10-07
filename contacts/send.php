<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['login']) and !isset($_POST['comment'])){
 ?> <form action="send.php" method="post">
		<input class="field" type="text" name="login" placeholder="*Укажите Ваш почтовый ящик"  required>
		<div><textarea name="comment"  placeholder="*Текст заявки"  required></textarea></div>
		<input class="button" name="submit" type="submit" value="Отправить">
	</form> <?php
} else {
 //показываем форму
 $login = $_POST['login'];
 $comment = $_POST['comment'];
 $login = htmlspecialchars($login);
 $comment = htmlspecialchars($comment);
 $login = urldecode($login);
 $comment = urldecode($comment);
 $login = trim($login);
 $comment = trim($comment);
 if (mail("blackstudio.webdesign@gmail.com", "Заявка с сайта", "ФИО:".$login.". E-mail: ".$comment ,"From: example2@mail.ru \r\n")){ 
 echo "Сообщение успешно отправлено"; 
 } else { 
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>


1