package com.heartzclub.heartzclub.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;

import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    @Email
    private String email;

    @Column(nullable = false)
    private Integer idade;

    @Column(nullable = false)
    private String cpf;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false)
    private String senha;

    /* adicionar seguidores e funcionalidade de seguir no perfil
    @Column(nullable = false)
    private List<Integer> seguidores;

    @Column(nullable = false)
    private List<Usuario> seguindo;

    private List<Publicacao> publicacoes;
    */

    public Usuario() {
    }

    public Usuario(String nome, String email, Integer idade, String cpf, String endereco, String senha) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
