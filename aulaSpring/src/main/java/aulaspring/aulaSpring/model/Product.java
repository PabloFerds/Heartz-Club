package aulaspring.aulaSpring.model;

public record Product(
        Long id,
        String nome,
        String descricao,
        String categoria,
        Double preco,
        String imageURL
) {}