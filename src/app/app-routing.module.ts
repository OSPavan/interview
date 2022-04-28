import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroidComponent } from './components/android/android.component';

const routes: Routes = [
  { 
    path: 'andoird',component:AndroidComponent
  },
  { 
    path: '',component:AndroidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
