import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroidComponent } from './components/android/android.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'android', component: AndroidComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo:'home' , pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
