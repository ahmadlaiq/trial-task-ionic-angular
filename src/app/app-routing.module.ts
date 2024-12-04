import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'challenges',
    loadChildren: () => import('./pages/challenges/challenges.module').then(m => m.ChallengesPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule)
  },
  {
    path: '',
    redirectTo: 'challenges',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }