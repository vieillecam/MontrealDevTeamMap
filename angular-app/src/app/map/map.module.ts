import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainMapComponent } from './mainMap.component';

const routes: Routes = [
  {
    path: '',
    component: MainMapComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, MainMapComponent],
  declarations: [
    MainMapComponent
  ],
})
export class MapModule {}