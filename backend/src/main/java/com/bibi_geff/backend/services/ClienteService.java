package com.bibi_geff.backend.services;

import com.bibi_geff.backend.models.Cliente;
import com.bibi_geff.backend.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ClienteService {

    private final ClienteRepository clienteRepository;
    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Optional<List<Cliente>> getClientes(){
        return Optional.of(this.clienteRepository.findAll());
    }

    public Optional<Cliente> getCliente(Long id){
        return this.clienteRepository.findById(id);
    }

    public Cliente updateCliente(Cliente cliente) {
        if (this.clienteRepository.existsById(cliente.getId())) {
            return this.clienteRepository.save(cliente);
        }
        return null;
    }

    public boolean createCliente(Cliente cliente){
        if(this.clienteRepository.existsById(this.clienteRepository.save(cliente).getId())){
            return true;
        }
        return false;
    }

    public boolean deleteCliente(Long id){
        this.clienteRepository.deleteById(id);
        return !this.clienteRepository.existsById(id);
    }
}
