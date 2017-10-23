import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosService } from '../../providers/projetos-service/projetos-service';
import { ProjetoPage } from '../projeto/projeto'

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  projetos: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public projetosService: ProjetosService) {
              
              this.projetos = projetosService.getProjetos(); 
  }

  selecionaProjeto(cdg){
    let cn = parseInt(cdg);
    this.navCtrl.push(ProjetoPage, {codigo: cn, novo: false});
  }

  novoProjeto(){
    this.navCtrl.push(ProjetoPage, {codigo: 0, novo: true});
  }
}