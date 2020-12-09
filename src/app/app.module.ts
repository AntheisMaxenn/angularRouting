import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardsComponent } from './shared/guards/guards.component';
import { AuxRoutesComponent } from './shared/aux-routes/aux-routes.component';
import { HelloComponent } from './shared/hello/hello.component';
import { ChildRoutesComponent } from './shared/child-routes/child-routes.component';
import { Child1Component } from './shared/child-routes/child1/child1.component';
import { Child2Component } from './shared/child-routes/child2/child2.component';
import { Child3Component } from './shared/child-routes/child3/child3.component';
import { CompDComponent } from './shared/aux-routes/aux-children/comp-d/comp-d.component';
import { CompAComponent } from './shared/aux-routes/aux-children/comp-a/comp-a.component';
import { CompBComponent } from './shared/aux-routes/aux-children/comp-b/comp-b.component';
import { CompCComponent } from './shared/aux-routes/aux-children/comp-c/comp-c.component';
import { CanActivateCompComponent } from './shared/guards/can-activate-comp/can-activate-comp.component';
import { CanDeactivateCompComponent } from './shared/guards/can-deactivate-comp/can-deactivate-comp.component';
import { SimpleAuthService } from './shared/services/auth/simple-auth.service';
import { SureLeaveService } from './shared/services/sureLeave/sure-leave.service';
import { ConfPopupCompComponent } from './shared/conf-popup-comp/conf-popup-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    GuardsComponent,
    AuxRoutesComponent,
    HelloComponent,
    ChildRoutesComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    CompDComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CanActivateCompComponent,
    CanDeactivateCompComponent,
    ConfPopupCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SimpleAuthService, SureLeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
