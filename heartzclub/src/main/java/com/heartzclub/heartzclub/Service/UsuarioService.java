package com.heartzclub.heartzclub.Service;

import com.heartzclub.heartzclub.DTO.LoginDto;
import com.heartzclub.heartzclub.DTO.UsuarioRequestDTO;
import com.heartzclub.heartzclub.Exception.UsuarioNotFoundException;
import com.heartzclub.heartzclub.Model.Usuario;
import com.heartzclub.heartzclub.Repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
        var usuario = new Usuario(dto.nome(),
                dto.email(),
                dto.idade(),
                dto.cpf(),
                dto.endereco(),
                dto.senha());
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

    public Usuario login(LoginDto dto) {
        var usuario = repository.findByEmail(dto.email()).orElseThrow(() -> new UsuarioNotFoundException("Usuario não encontrado"));

        if (!usuario.getSenha().equals(dto.senha())) {
            throw new RuntimeException("Email ou senha incorretas. Tente novamente");
        }

        return usuario;
    }
}