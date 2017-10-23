import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { TabsPage } from '../pages/tabs/tabs';
import { PessoasPage } from '../pages/pessoas/pessoas'
import { PessoaPage } from '../pages/pessoa/pessoa'

import { ProjetosService} from '../providers/projetos-service/projetos-service';
import { TarefasService } from '../providers/tarefas-service/tarefas-service';
import { PessoasService } from '../providers/pessoas-service/pessoas-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    PessoasPage,
    PessoaPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    PessoasPage,
    PessoaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefasService,
    PessoasService
  ]
})
export class AppModule {}
