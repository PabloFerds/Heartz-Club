package aulaspring.aulaSpring.controller;

import aulaspring.aulaSpring.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/produtos")
    public ResponseEntity<List<Product>> listarDados() {
        List<Product> products = List.of(new Product
                (1L,
                        "TV",
                        "Tevelisão",
                        "Eletronico",
                        1200.35,
                        "https://http.dog/501.jpg"));
        return ResponseEntity.ok(products);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Product> enviarDados() {

        Product product = new Product(
                3L,
                "Mouse",
                "Mouse gaymer",
                "Eletronico",
                25.45,
                "lalaland");

        return ResponseEntity.ok(product);
    }
}