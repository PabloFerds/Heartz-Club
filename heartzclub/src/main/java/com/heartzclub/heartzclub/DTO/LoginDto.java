package com.heartzclub.heartzclub.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record LoginDto(
        @NotBlank(message = "Digite o email")
        String email,
        @NotBlank(message = "Digite a senha")
        String senha
) {}