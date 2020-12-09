import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularRouting';

  public items = [
    {name: 'Child routes', desc: 'Child routes, routes within routes'},
    {name: 'lazy loading routes', desc: 'Implementation of lazy loaded routes'},
    {name: 'Gaurd proptected routes', desc: 'Using guards to protect routes, eg admin only.'},
  ];

}
