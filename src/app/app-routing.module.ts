import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsComponent } from './shared/guards/guards.component';
import { HelloComponent } from './shared/hello/hello.component';
import { AuxRoutesComponent } from './shared/aux-routes/aux-routes.component';
import { ChildRoutesComponent } from './shared/child-routes/child-routes.component';
import { Child1Component } from './shared/child-routes/child1/child1.component';
import { Child2Component } from './shared/child-routes/child2/child2.component';
import { Child3Component } from './shared/child-routes/child3/child3.component';
import { CompAComponent } from './shared/aux-routes/aux-children/comp-a/comp-a.component';
import { CompBComponent } from './shared/aux-routes/aux-children/comp-b/comp-b.component';
import { CompCComponent } from './shared/aux-routes/aux-children/comp-c/comp-c.component';
import { CompDComponent } from './shared/aux-routes/aux-children/comp-d/comp-d.component';
import { CanActivateCompComponent } from './shared/guards/can-activate-comp/can-activate-comp.component';
import { SimpleAuthService } from './shared/services/auth/simple-auth.service';
import { CanDeactivateCompComponent } from './shared/guards/can-deactivate-comp/can-deactivate-comp.component';
import { SureLeaveService } from './shared/services/sureLeave/sure-leave.service';

const routes: Routes = [
  {path: '', component: HelloComponent},

  {path: 'child-routes', component: ChildRoutesComponent,
    children: [
      {path: '', redirectTo: 'child1', pathMatch: 'full' },
      {path: 'child-1', component: Child1Component},
      {path: 'child-2', component: Child2Component},
      {path: 'child-3', component: Child3Component},
    ]
  },

  {path: 'guards', component: GuardsComponent,
  children: [
    {path: 'canActivate', component: CanActivateCompComponent, canActivate: [SimpleAuthService]},
    {path: 'canDeactivate', component: CanDeactivateCompComponent, canDeactivate: [SureLeaveService] },
  ]
},
  {path: 'auxiliary-routes', component: AuxRoutesComponent,
  children: [
    {path: 'CompA', component: CompAComponent, outlet: 'leftOutlet'},
    {path: 'CompB', component: CompBComponent, outlet: 'leftOutlet'},
    {path: 'CompC', component: CompCComponent, outlet: 'rightOutlet'},
    {path: 'CompD', component: CompDComponent, outlet: 'rightOutlet'},
  ]
},
  {path: 'lazy-loading', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
