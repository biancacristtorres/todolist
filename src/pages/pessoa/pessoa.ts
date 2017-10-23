import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoasService } from '../../providers/pessoas-service/pessoas-service';
import { TarefasService } from '../../providers/tarefas-service/tarefas-service';

@IonicPage()
@Component({
  selector: 'page-pessoa',
  templateUrl: 'pessoa.html',
})
export class PessoaPage {

  tarefas: any[];
  novo: boolean;
  codigoPessoa: number;
  codigoTarefa: any[];
  nome: string; 
  idade: number;
  cargo: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public pessoasService: PessoasService,
              public tarefasService: TarefasService) {
    this.tarefas = tarefasService.getTarefas();
    this.codigoPessoa = navParams.get('codigo');
    this.novo = navParams.get('novo');
    if(!this.novo){
      let pessoas = pessoasService.getPessoas();
      for(let i = 0; i < pessoas.length; i ++) {
          if(pessoas[i].codigo == this.codigoPessoa) {
             this.codigoTarefa = pessoas[i].tarefa;
             this.nome = pessoas[i].nome;
             this.idade = pessoas[i].idade;
             this.cargo = pessoas[i].cargo;
          }
      }
    } else {
      this.codigoTarefa = this.tarefas[0].codigo;
      this.nome = '';
      this.idade = 10;
      this.cargo = '';
    }
  }

  alterar() {
    this.pessoasService.editPessoa(this.codigoPessoa, 
                                   this.codigoTarefa, 
                                   this.nome,
                                   this.idade,
                                   this.cargo);
    this.navCtrl.pop();
  }

  excluir() {
    this.pessoasService.deletePessoa(this.codigoPessoa);
    this.navCtrl.pop();
  }

  incluir() {
    this.pessoasService.addPessoa(this.codigoTarefa,
                                  this.nome,
                                  this.idade,
                                  this.cargo);
    this.navCtrl.pop();
  }






}
