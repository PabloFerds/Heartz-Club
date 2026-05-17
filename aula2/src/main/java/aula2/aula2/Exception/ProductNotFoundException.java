package aula2.aula2.Exception;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(Long message) {
        super("Produto não encontrado");
    }
}
