import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameMatrixComponent } from './components/game-matrix/game-matrix.component';

const routes: Routes = [
  {path: '', component: GameMatrixComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
