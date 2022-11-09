import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registro',
    loadChildren: () => import('./usuario/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./productos/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar/:id',
    loadChildren: () => import('./productos/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./usuario/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./productos/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
