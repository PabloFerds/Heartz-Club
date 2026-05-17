package aula2.aula2.Dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record ProductRequestDTO(
        @NotBlank(message = "Nome obrigatório.")
        String name,

        String description,

        @NotNull(message = "Preço é obrigatorio")
        @Positive(message = "Preço deve ser positivo")
        Double price,

        @NotBlank(message = "Categoria é obrigatório")
        String category,

        String imageUrl
) {}