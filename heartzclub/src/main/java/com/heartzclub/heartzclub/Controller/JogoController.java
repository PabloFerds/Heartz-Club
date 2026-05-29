package com.heartzclub.heartzclub.Controller;

import com.heartzclub.heartzclub.DTO.JogoRequestDTO;
import com.heartzclub.heartzclub.Model.Jogo;
import com.heartzclub.heartzclub.Model.Usuario;
import com.heartzclub.heartzclub.Service.JogoService;
import com.heartzclub.heartzclub.Service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/jogos")
public class JogoController {

    private final JogoService jogoService;
    private final UsuarioService usuarioService;

    public JogoController(JogoService jogoService, UsuarioService usuarioService) {
        this.jogoService = jogoService;
        this.usuarioService = usuarioService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Jogo> findById(@PathVariable Long id) {
        return ResponseEntity.ok(jogoService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Jogo>> listAll() {
        return ResponseEntity.ok(jogoService.findAll());
    }

    /*@PostMapping("/cadastro")
    public ResponseEntity<Jogo> criar(@RequestBody @Valid JogoRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).
                body(jogoService.criar(dto));
    }*/

    @PutMapping("/{id}")
    public ResponseEntity<Jogo> alterar(@PathVariable Long id, @RequestBody @Valid JogoRequestDTO dto) {
        return ResponseEntity.ok(jogoService.alterar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        jogoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{jogoId}/favoritos/{usuarioId}")
    public ResponseEntity<?> adicionarFavorito(@PathVariable Long jogoId, @PathVariable Long usuarioId) {
        try {
            Usuario usuario = usuarioService.adicionarFavorito(usuarioId, jogoId);
            return ResponseEntity.ok(usuario);
        } catch (IllegalStateException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}