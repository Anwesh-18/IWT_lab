<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="BMR.jsp">
	Age: <input type="number" name="age"><br><br>
	Select Gender:<input type="radio" name="gender">Male
	<input type="radio" name="gender">Female<br><br>
	Height: <input type="number" name="height"><br><br>
	Weight: <input type="number" name="weight"><br><br>
	<input type="submit">
	</form>
	<%String gender = request.getParameter("gender");
	double BMR = 0;
	int h = 0;
	int w = 0;
	int a = 0;
	if (request.getParameter("height")!=null){
		h = Integer.parseInt(request.getParameter("height"));
	}
	if(request.getParameter("weight")!=null){
		w = Integer.parseInt(request.getParameter("weight"));
	}
	if (request.getParameter("age")!=null){
		a = Integer.parseInt(request.getParameter("age"));
	}
	
	if (gender=="Male"){
		BMR=(10*w)+(6.25*h)-(5*a)+5;
	}else{
		BMR=(10*w)+(6.25*h)-(5*a)-161;
	}
	%>
	<span>BMR: <%=BMR %></span>
</body>
</html>
