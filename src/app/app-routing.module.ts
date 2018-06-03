import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SplashScreenComponent} from './view/pages/splash-screen/splash-screen.component';
import {HomeComponent} from './view/pages/home/home.component';
import {DatabaseComponent} from './view/pages/database/database.component';

const routes: Routes = [
    {path: '', component: SplashScreenComponent},
    {path: 'home', component: HomeComponent},
    {path: 'database', component: DatabaseComponent},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
