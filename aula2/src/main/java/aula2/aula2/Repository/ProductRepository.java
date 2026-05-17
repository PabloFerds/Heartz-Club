package aula2.aula2.Repository;

import aula2.aula2.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {



}
