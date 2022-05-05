<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Rsultado</title>
</head>
<body>
	<h1>Calculadora</h1>

	<p>
		Resultado: <mark><%= request.getAttribute("resultado") %></mark>
	</p>

</body>
</html>