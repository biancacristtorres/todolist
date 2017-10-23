import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';
import { PessoasPage } from '../pessoas/pessoas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = TarefasPage;
  tab3Root = ProjetosPage;
  tab1Root = PessoasPage;
  
  constructor() {

  }
}
