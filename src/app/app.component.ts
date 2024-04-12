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

  constructor(
    private router: Router,
    private proAppConfigService: ProAppConfigService
  ) {
    this.proAppConfigService.loadAppConfig();
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: ()=> this.router.navigate(['']) },
    { label: 'Alunos', action: ()=> this.router.navigate(['students']) },
    { label: 'Sair', action: this.closeApp.bind(this) }
  ];

  closeApp(): void {
    this.proAppConfigService.callAppClose(false); //false pergunta se o user deseja fechar a aplicação. true não pergunta
  }

}
