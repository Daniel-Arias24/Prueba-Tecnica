package com.example.Prueba.Formulario.Repositorio;

import com.example.Prueba.Formulario.Modelo.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Cliente, Long>{
}
