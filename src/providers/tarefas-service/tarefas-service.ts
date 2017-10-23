import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TarefasService {

  tarefas = [{codigo: 1, projeto: 1, descricao: 'Elaborar primeira prova',
              data: new Date(2017, 9, 19), prioridade: 1},
             {codigo: 2, projeto: 1, descricao: 'Fechar o diário',
              data: new Date(2017, 11, 2), prioridade: 2},
             {codigo: 3, projeto: 2, descricao: 'Gravar vídeo de apresentação',
              data: new Date(2017, 9, 10), prioridade: 1},
             {codigo: 4, projeto: 3, descricao: 'Planejar campanha',
              data: new Date(2017, 10, 28), prioridade: 3}
  ];

  ultimoCodigo = 4;
  constructor() {
    console.log('Hello TarefasServiceProvider Provider');
  }

  getTarefas(): any[] {
    return this.tarefas;
  }

  editTarefa(cdg, prj, desc, dta, prior) {
    for(let i = 0; i< this.tarefas.length; i++) {
      if(this.tarefas[i].codigo == cdg) {
        this.tarefas[i].projeto = prj;
        this.tarefas[i].descricao = desc;
        this.tarefas[i].data = dta;
        this.tarefas[i].prioridade = prior; 
        break;
      }
    }
 }

  addTarefa(prj, desc, dta, prior) {
    this.ultimoCodigo++;
    this.tarefas.push({ codigo: this.ultimoCodigo,
                      projeto: prj,
                      descricao: desc,
                      data: dta,
                      prioridade: prior});
  }

  deleteTarefa(cdg) {
    for(let i = 0; i< this.tarefas.length; i++) {
      if(this.tarefas[i].codigo == cdg) {
        this.tarefas.splice(i,1);
        break;
      }
    }
  }
}