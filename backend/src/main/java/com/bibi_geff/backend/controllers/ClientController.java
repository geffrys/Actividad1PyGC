package com.bibi_geff.backend.controllers;

import com.bibi_geff.backend.models.Cliente;
import jakarta.websocket.server.PathParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {
    @GetMapping()
    public ResponseEntity<List<Cliente>> getClientes(){
        return null;
    }

    @PostMapping
    public ResponseEntity<Cliente> postCliente(@RequestBody(required = true) Cliente cliente){
        return null;
    }

    @PutMapping
    public ResponseEntity<Cliente> putCliente(@RequestBody(required = true) Cliente cliente){
        return null;
    }

    @DeleteMapping("/:id")
    public ResponseEntity<Cliente> postCliente(@PathParam("id") Long id){
        return null;
    }
}
