import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashScreenComponent} from './view/pages/splash-screen/splash-screen.component';
import {HomeComponent} from './view/pages/home/home.component';

const routes: Routes = [
    {path: '', component: SplashScreenComponent},
    {path: 'home', component: HomeComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
