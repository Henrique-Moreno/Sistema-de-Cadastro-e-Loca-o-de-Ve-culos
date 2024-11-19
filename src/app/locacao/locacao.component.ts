import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService, Cliente } from '../services/cliente.service';
import { CarroService, Carro } from '../services/carro.service';
import { LocacaoService, Locacao } from '../services/locacao.service';

@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css'],
})
export class LocacaoComponent implements OnInit {
  clientes: Cliente[] = [];
  carros: Carro[] = [];
  locacoes: Locacao[] = [];

  novaLocacao: Omit<Locacao, 'id' | 'valorTotal'> = {
    clienteId: 0,
    carroId: 0,
    diasLocados: 0,
  };

  locacaoEditando: Locacao | null = null;

  constructor(
    private clienteService: ClienteService,
    private carroService: CarroService,
    private locacaoService: LocacaoService
  ) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });

    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
    });

    this.locacaoService.getLocacoes().subscribe(locacoes => {
      this.locacoes = locacoes;
    });
  }

  calcularValorTotal(): number {
    const carroSelecionado = this.carros.find(c => c.id === this.novaLocacao.carroId);
    if (carroSelecionado && this.novaLocacao.diasLocados > 0) {
      return carroSelecionado.valorLocacao * this.novaLocacao.diasLocados;
    }
    return 0;
  }

  adicionarLocacao() {
    if (this.novaLocacao.clienteId && this.novaLocacao.carroId && this.novaLocacao.diasLocados > 0) {
      const valorTotal = this.calcularValorTotal();
      const locacaoComValor = { ...this.novaLocacao, valorTotal };
      this.locacaoService.adicionarLocacao(locacaoComValor).subscribe(loc => {
        this.locacoes.push(loc);
        this.novaLocacao = { clienteId: 0, carroId: 0, diasLocados: 0 };
      });
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  removerLocacao(id: number) {
    this.locacaoService.removerLocacao(id).subscribe(() => {
      this.locacoes = this.locacoes.filter(loc => loc.id !== id);
    });
  }

  editarLocacao(locacao: Locacao) {
    this.locacaoEditando = { ...locacao };
  }

  salvarEdicao() {
    if (this.locacaoEditando) {
      this.locacaoService.atualizarLocacao(this.locacaoEditando.id, this.locacaoEditando).subscribe(locAtualizada => {
        const index = this.locacoes.findIndex(l => l.id === locAtualizada.id);
        if (index !== -1) {
          this.locacoes[index] = locAtualizada;
        }
        this.locacaoEditando = null;
      });
    }
  }

  cancelarEdicao() {
    this.locacaoEditando = null;
  }

  getClienteNome(clienteId: number): string {
    const cliente = this.clientes.find(c => c.id === clienteId);
    return cliente ? cliente.nome : 'Cliente não encontrado';
  }

  getCarroNome(carroId: number): string {
    const carro = this.carros.find(c => c.id === carroId);
    return carro ? carro.nome : 'Carro não encontrado';
  }
}
