import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosService {

  projetos = [
    {codigo: 1, nome: 'Algoritmos'},
    {codigo: 2, nome: 'Pós-graduação'},
    {codigo: 3, nome: 'EAD'}
  ];
  ultimoCodigo = 3;

  constructor() {
  console.log('Hello ProjetosService Provider');
  }

  getProjetos(){
    return this.projetos;
  }

  editProjeto(cdg:number, nom:string) {
    for(let i=0; i < this.projetos.length; i++ ) {
      if(this.projetos[i].codigo == cdg) {
        this.projetos[i].nome = nom;
        break;
      }
    }
  }

  deleteProjeto(cdg:number) {
    for(let i=0; i < this.projetos.length; i++ ) {
      if(this.projetos[i].codigo == cdg) {
        this.projetos.splice(i,1);
        break;
      }
    }
  }

  addProjeto(nom:string) {
    this.ultimoCodigo++;
    this.projetos.push({
      codigo: this.ultimoCodigo,
      nome: nom
    })
  }
  
}
