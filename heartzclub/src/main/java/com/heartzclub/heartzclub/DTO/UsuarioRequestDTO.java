package com.heartzclub.heartzclub.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.br.CPF;

public record UsuarioRequestDTO(
        @NotBlank(message = "Nome não pode ser vazio")
        String name,

        @NotNull(message = "Idade não pode ser vazio")
        Integer idade,

        @CPF
        @NotBlank(message = "CPF não pode ser vazio")
        String cpf,

        @NotBlank(message = "Endereço não pode ser vazio")
        String endereco
) {}