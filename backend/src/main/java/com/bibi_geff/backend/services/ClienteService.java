package com.bibi_geff.backend.services;

import com.bibi_geff.backend.models.Cliente;
import com.bibi_geff.backend.repositories.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Optional<List<Cliente>> getClientes(){
        return Optional.ofNullable(null);
    }

    public Optional<Cliente> getCliente(Long id){
        return clienteRepository.findById(id);
    }

    public Cliente updateCliente(Cliente cliente){
        Cliente cliente;
        if(clienteRepository.existsById(cliente)) cliente = new Cliente(clienteRepository.save(cliente));
        return Optional.ofNullable(clienteRepository.save(cliente));
    }

    public void deleteCliente(Long id){
        clienteRepository.delete(id);
    }
}
