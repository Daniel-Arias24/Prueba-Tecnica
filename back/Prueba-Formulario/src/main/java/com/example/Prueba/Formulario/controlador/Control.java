package com.example.Prueba.Formulario.controlador;

import com.example.Prueba.Formulario.Modelo.Cliente;
import com.example.Prueba.Formulario.Repositorio.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class Control {

    @Autowired
    private Repo repo;

    @PostMapping
    public Cliente registrar(@RequestBody Cliente cliente){
        return repo.save(cliente);
    }

    @GetMapping
    public List<Cliente> listar() {
        return repo.findAll();
    }
}
