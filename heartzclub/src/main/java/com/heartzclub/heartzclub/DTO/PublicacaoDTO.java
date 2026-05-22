package com.heartzclub.heartzclub.DTO;

import com.heartzclub.heartzclub.Model.Comentario;
import com.heartzclub.heartzclub.Model.Jogo;
import com.heartzclub.heartzclub.Model.Usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;

public record PublicacaoDTO(

        @NotNull(message = "Usuário não pode ser nulo")
        Usuario usuario,

        @NotNull(message = "Jogo não pode ser nulo")
        Jogo jogo,

        @NotBlank(message = "Titulo não pode ser vazio")
        String titulo,

        @NotBlank(message = "Descrição não pode ser vazio")
        String descricao,

        @NotEmpty(message = "Comentários não pode ser vazio")
        List<Comentario> comentarios,

        @NotNull(message = "Hora da publicação não pode ser nula")
        Date horaPublicacao
) {
}