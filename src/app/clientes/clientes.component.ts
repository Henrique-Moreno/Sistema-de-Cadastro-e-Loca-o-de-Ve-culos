import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService, Cliente } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  novoCliente: Omit<Cliente, 'id'> = { nome: '', email: '' };

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  adicionarCliente() {
    if (this.novoCliente.nome.trim() && this.novoCliente.email.trim()) {
      this.clienteService.adicionarCliente(this.novoCliente).subscribe(cliente => {
        this.clientes.push(cliente);
        this.novoCliente = { nome: '', email: '' };
      });
    } else {
      alert('Preencha todos os campos!');
    }
  }

  removerCliente(id: number) {
    this.clienteService.removerCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    });
  }
}
