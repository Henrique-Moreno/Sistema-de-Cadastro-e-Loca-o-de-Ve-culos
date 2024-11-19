import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroService, Carro } from '../services/carro.service';

@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
})
export class CarrosComponent implements OnInit {
  carros: Carro[] = [];
  novoCarro: Omit<Carro, 'id'> = { nome: '', marca: '', placa: '', valorLocacao: 0 };

  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.carregarCarros();
  }

  carregarCarros() {
    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
    });
  }

  adicionarCarro() {
    if (this.novoCarro.nome.trim() && this.novoCarro.marca.trim() && this.novoCarro.placa.trim() && this.novoCarro.valorLocacao > 0) {
      this.carroService.adicionarCarro(this.novoCarro).subscribe(carro => {
        this.carros.push(carro);
        this.novoCarro = { nome: '', marca: '', placa: '', valorLocacao: 0 };
      });
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  removerCarro(id: number) {
    this.carroService.removerCarro(id).subscribe(() => {
      this.carros = this.carros.filter(carro => carro.id !== id);
    });
  }
}
