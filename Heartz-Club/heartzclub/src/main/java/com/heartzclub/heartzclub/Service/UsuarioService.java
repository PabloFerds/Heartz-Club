package com.heartzclub.heartzclub.Service;

import java.util.List;

import com.heartzclub.heartzclub.Exception.EmailJaCadastradoException;
import org.springframework.stereotype.Service;

import com.heartzclub.heartzclub.DTO.LoginDto;
import com.heartzclub.heartzclub.DTO.UsuarioRequestDTO;
import com.heartzclub.heartzclub.Exception.UsuarioNotFoundException;
import com.heartzclub.heartzclub.Model.Usuario;
import com.heartzclub.heartzclub.Repository.UsuarioRepository;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> findAll() {
        return repository.findAll();
    }

    public Usuario findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new UsuarioNotFoundException(id));
    }

    public Usuario criar(UsuarioRequestDTO dto) {

        if (repository.existsByEmail(dto.email())) {
            throw new EmailJaCadastradoException("Email já cadastrado.");
        }

        var usuario = new Usuario(
                dto.nome(),
                dto.email(),
                dto.idade(),
                dto.cpf(),
                dto.endereco(),
                dto.senha()
        );

        verificaIdade(dto);

        return repository.save(usuario);
    }

    public Usuario atualizar(Long id, UsuarioRequestDTO dto) {
        var usuario = findById(id);
        usuario.setNome(dto.nome());
        usuario.setEndereco(dto.endereco());
        return repository.save(usuario);
    }

    public void deletar(Long id) {
        findById(id);
        repository.deleteById(id);
    }

    private int verificaIdade(UsuarioRequestDTO dto) {
        int idade = dto.idade();

        if (dto.idade() <= 0) {
            throw new IllegalArgumentException("Idade não pode ser menor que 0");
        }
        return idade;
    }

    public Usuario login(LoginDto dto) {
        var usuario = repository.findByEmail(dto.email()).orElseThrow(() -> new UsuarioNotFoundException("Usuario não encontrado"));

        if (!usuario.getSenha().equals(dto.senha())) {
            throw new RuntimeException("Email ou senha incorretas. Tente novamente");
        }

        return usuario;
    }
}