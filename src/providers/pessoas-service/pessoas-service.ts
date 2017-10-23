import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PessoasService {

  pessoas = [{codigo: 2, tarefa: [2, 1], nome: 'Alair Fonseca Pinto Filho', idade: 25, cargo: 'Arquiteto de Software'},
             {codigo: 1, tarefa: [1, 2, 3, 4], nome: 'Bianca Cristina Torres Silva', idade:20, cargo: 'Gerente de Projetos'}, 
             {codigo: 3, tarefa: [3], nome: 'Caique Matos', idade: 30, cargo: 'CEO'},
             {codigo: 4, tarefa: [2], nome: 'Hebert Costa Andrade', idade: 35, cargo: 'CTO'}];

  ultimoCodigo = 4;

  constructor() {
    console.log('Hello PessoasServiceProvider Provider');
  }

  getPessoas(): any[] {
    return this.pessoas;
  }


  editPessoa(cdg, trf, nom, idad, carg) {
    for(let i = 0; i< this.pessoas.length; i++) {
      if(this.pessoas[i].codigo == cdg) {
        this.pessoas[i].tarefa = trf;
        this.pessoas[i].nome = nom;
        this.pessoas[i].cargo = carg; 
        break;
      }
    }
 }

  addPessoa(trf, nom, idad, carg) {
    this.ultimoCodigo++;
    this.pessoas.push({ codigo: this.ultimoCodigo,
                      tarefa: trf,
                      nome: nom,
                      idade: idad,
                      cargo: carg});
  }

  deletePessoa(cdg) {
    for(let i = 0; i< this.pessoas.length; i++) {
      if(this.pessoas[i].codigo == cdg) {
        this.pessoas.splice(i,1);
        break;
      }
    }
  }



}
