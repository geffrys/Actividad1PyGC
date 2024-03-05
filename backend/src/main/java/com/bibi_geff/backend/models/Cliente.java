package com.bibi_geff.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "clientes")
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(length = 10,nullable = false)
    String cedula;
    @Column(length = 20, name = "primer_nombre", nullable = false)
    String primerNombre;
    @Column(length = 20, nullable = true)
    String segundoNombre;
    @Column(nullable = false)
    Sexo sexo;
    @Column(nullable = false)
    Integer edad;
    @Column(nullable = false, length = 30)
    String email;

}
