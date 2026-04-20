package com.heartzclub.heartzclub.Exception;

public class UsuarioNotFoundException extends RuntimeException {
    public UsuarioNotFoundException(Long message) {
        super("Usuario não encontrado");
    }
}