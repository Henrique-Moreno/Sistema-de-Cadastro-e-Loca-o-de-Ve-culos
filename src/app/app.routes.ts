import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CarrosComponent } from './carros/carros.component';
import { LocacaoComponent } from './locacao/locacao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'carros', component: CarrosComponent },
  { path: 'locacao', component: LocacaoComponent },
  { path: '**', redirectTo: '' }
];

