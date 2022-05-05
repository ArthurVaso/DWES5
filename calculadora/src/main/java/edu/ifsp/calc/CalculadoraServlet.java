package edu.ifsp.calc;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalculadoraServlet
 */
@WebServlet("/calcular")
public class CalculadoraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, 
			HttpServletResponse response) throws ServletException, IOException {
		
		int x = Integer.parseInt(request.getParameter("X"));
		int y = Integer.parseInt(request.getParameter("Y"));
		
		/* processamento */
		int res = x + y;
		
		/* delegar visualização ao jsp */
		request.setAttribute("resultado", res);
		RequestDispatcher rd = request.getRequestDispatcher("resultado.jsp");
		rd.forward(request, response);
	}

}
