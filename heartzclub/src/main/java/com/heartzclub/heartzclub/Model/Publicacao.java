package com.heartzclub.heartzclub.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "publicacoes")
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "jogo_id", nullable = false)
    private Jogo jogo;

    @NotBlank
    private String titulo;

    @NotBlank
    private String descricao;

    @OneToMany(mappedBy = "publicacao", cascade = CascadeType.ALL)
    private List<Comentario> listComentarios = new ArrayList<>();

    @Temporal(TemporalType.TIMESTAMP)
    private Date horaPublicacao;

    @Temporal(TemporalType.TIMESTAMP)
    private Date horaAlteracao;

    public Publicacao() {

    }

    public Publicacao(Usuario usuario, Jogo jogo, String titulo, String descricao, List<Comentario> listComentarios, Date horaPublicacao) {
        this.usuario = usuario;
        this.jogo = jogo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.listComentarios = listComentarios;
        this.horaPublicacao = horaPublicacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Comentario> getListComentarios() {
        return listComentarios;
    }

    public void setListComentarios(List<Comentario> listComentarios) {
        this.listComentarios = listComentarios;
    }

    public Date getHoraPublicacao() {
        return horaPublicacao;
    }

    public void setHoraPublicacao(Date horaPublicacao) {
        this.horaPublicacao = horaPublicacao;
    }

    public Date getHoraAlteracao() {
        return horaAlteracao;
    }

    public void setHoraAlteracao(Date horaAlteracao) {
        this.horaAlteracao = horaAlteracao;
    }
}