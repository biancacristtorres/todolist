import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoasService } from '../../providers/pessoas-service/pessoas-service'
import { TarefasService } from '../../providers/tarefas-service/tarefas-service'
import { PessoaPage } from '../pessoa/pessoa'

@IonicPage()
@Component({
  selector: 'page-pessoas',
  templateUrl: 'pessoas.html',
})
export class PessoasPage {

  pessoas : any[];
  tarefas : any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public pessoasService: PessoasService,
              public tarefasService: TarefasService) {
      this.tarefas = tarefasService.getTarefas();
      this.pessoas = pessoasService.getPessoas();
  }

  nomeTarefa(cdg):string{
    for(let i = 0; i < this.tarefas.length; i++) {
      if(this.tarefas[i] == cdg) {
        return this.tarefas[i].descricao;
      }
      return "Tarefa não encontrada";
    }
  }
 
  selecionaPessoa(cdg){
    let cn = parseInt(cdg);
    this.navCtrl.push(PessoaPage, {codigo: cn, novo: false});
  }

  novaPessoa(){
    this.navCtrl.push(PessoaPage, {codigo: 0, novo: true});
  }



}
