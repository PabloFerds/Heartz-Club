package aula2.aula2.Service;

import aula2.aula2.Exception.ProductNotFoundException;
import aula2.aula2.Model.Usuario;
import aula2.aula2.Repository.UsuarioRepository;

import java.util.List;

public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }
}
