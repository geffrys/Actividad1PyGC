package com.bibi_geff.backend.controllers;

import com.bibi_geff.backend.models.Cliente;
import com.bibi_geff.backend.services.ClienteService;
import jakarta.websocket.server.PathParam;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClientController {
    final ClienteService clienteService;

    @Autowired
    public ClientController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping("/cliente")
    public ResponseEntity<Optional<List<Cliente>>> getClientes(){
        return ResponseEntity.ok(clienteService.getClientes());
    }

    @GetMapping("/cliente/:id")
    public ResponseEntity<Optional<Cliente>> getCliente_(@PathParam("id") Long id){
        return ResponseEntity.ok(clienteService.getCliente(id));
    }

    @PostMapping("/cliente")
    public ResponseEntity<Boolean> postCliente(@RequestBody(required = true) Cliente cliente){
        return ResponseEntity.ok(clienteService.createCliente(cliente));
    }

    @PutMapping("/cliente")
    public ResponseEntity<Cliente> putCliente(@RequestBody(required = true) Cliente cliente){
        return ResponseEntity.ofNullable(clienteService.updateCliente(cliente));
    }

    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Boolean> postCliente(@PathVariable Long id){
        return ResponseEntity.ok(clienteService.deleteCliente(id));
    }
}
