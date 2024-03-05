package com.bibi_geff.backend.repositories;

import com.bibi_geff.backend.models.Cliente;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.Optional;

public interface ClienteRepository extends ListCrudRepository<Long, Cliente> {
    public Optional<List<Cliente>> getAll();
    public Optional<Cliente> findById(Long id);
    public

}
