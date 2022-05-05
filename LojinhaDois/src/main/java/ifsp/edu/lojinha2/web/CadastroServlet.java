package ifsp.edu.lojinha2.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ifsp.edu.lojinha2.modelo.cliente.Cliente;
import ifsp.edu.lojinha2.modelo.cliente.ClienteDAO;

/**
 * Servlet implementation class CadastroServlet
 */
@WebServlet("/cadastrar")
public class CadastroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, 
			HttpServletResponse response) throws ServletException, IOException {
		String nome = request.getParameter("nome");
		String email = request.getParameter("email");
		
		Cliente cliente = new Cliente();
		cliente.setNome(nome);
		cliente.setEmail(email);
		
		ClienteDAO dao = new ClienteDAO();
		dao.save(cliente);
	}

}
