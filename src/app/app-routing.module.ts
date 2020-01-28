import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
