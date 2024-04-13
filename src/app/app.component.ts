import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuCollapsed: boolean = true;

  constructor(
    private router: Router,
    private proAppConfigService: ProAppConfigService
  ) {
    this.proAppConfigService.loadAppConfig();
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', icon: 'po-icon-home', action: ()=> this.router.navigate(['']) },
    { label: 'Alunos', shortLabel: 'Alunos', icon: 'po-icon-user', action: ()=> this.router.navigate(['students']) },
    { label: 'Sair', shortLabel: 'Sair', icon: 'po-icon-exit', action: this.closeApp.bind(this) }
  ];

  closeApp(): void {
    this.proAppConfigService.callAppClose(false); //false pergunta se o user deseja fechar a aplicação. true não pergunta
  }

}
