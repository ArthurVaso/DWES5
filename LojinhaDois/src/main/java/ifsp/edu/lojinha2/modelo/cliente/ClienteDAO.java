package ifsp.edu.lojinha2.modelo.cliente;

public class ClienteDAO {

	public void save(Cliente cliente) {
		
		System.out.printf("dopost: n: %s -> e: %s\n", cliente.getNome(), cliente.getEmail());
		
	}

}
