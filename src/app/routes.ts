import { Routes, RouterModule }   from '@angular/router';
import { TestComponent } from './components/test/test.component'
import { Test2Component } from './components/test2/test2.component'
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', component: Test2Component}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
