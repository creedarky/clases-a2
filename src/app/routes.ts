import { Routes, RouterModule }   from '@angular/router';
import { TestComponent } from './components/test/test.component'
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: '', component: TestComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
