package com.bibi_geff.backend.repositories;

import com.bibi_geff.backend.models.Cliente;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClienteRepository extends ListCrudRepository<Cliente, Long> {
}
