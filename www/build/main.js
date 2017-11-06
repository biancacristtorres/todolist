webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pessoas_service_pessoas_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaPage = (function () {
    function PessoaPage(navCtrl, navParams, pessoasService, tarefasService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pessoasService = pessoasService;
        this.tarefasService = tarefasService;
        this.tarefas = tarefasService.getTarefas();
        this.codigoPessoa = navParams.get('codigo');
        this.novo = navParams.get('novo');
        if (!this.novo) {
            var pessoas = pessoasService.getPessoas();
            for (var i = 0; i < pessoas.length; i++) {
                if (pessoas[i].codigo == this.codigoPessoa) {
                    this.codigoTarefa = pessoas[i].tarefa;
                    this.nome = pessoas[i].nome;
                    this.idade = pessoas[i].idade;
                    this.cargo = pessoas[i].cargo;
                }
            }
        }
        else {
            this.codigoTarefa = this.tarefas[0].codigo;
            this.nome = '';
            this.idade = 10;
            this.cargo = '';
        }
    }
    PessoaPage.prototype.alterar = function () {
        this.pessoasService.editPessoa(this.codigoPessoa, this.codigoTarefa, this.nome, this.idade, this.cargo);
        this.navCtrl.pop();
    };
    PessoaPage.prototype.excluir = function () {
        this.pessoasService.deletePessoa(this.codigoPessoa);
        this.navCtrl.pop();
    };
    PessoaPage.prototype.incluir = function () {
        this.pessoasService.addPessoa(this.codigoTarefa, this.nome, this.idade, this.cargo);
        this.navCtrl.pop();
    };
    return PessoaPage;
}());
PessoaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pessoa',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\pessoa\pessoa.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pessoa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p>Perfil de Pessoa. Nesta página é possível fazer a vinculação de tarefas á pessoa.</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>    \n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label color="primary">Nome</ion-label>\n\n        <ion-input type="text" placeholder="Nome da Pessoa"[(ngModel)]="nome" required name="nome" #nom="ngModel"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">Tarefas</ion-label>\n\n        <ion-select [(ngModel)]="codigoTarefa"  multiple="true" cancelText="Cancelar" okText="Confirmar">\n\n          <ion-option *ngFor="let t of tarefas" value="{{t.codigo}}" selected="true">\n\n            {{t.descricao}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">Idade</ion-label>\n\n        <ion-input type="number" [(ngModel)]="idade" required name="idade" #ida="ngModel"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">Cargo</ion-label>\n\n        <ion-input [(ngModel)]="cargo" required name="cargo" #cd="ngModel"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngIf="!cd.valid && cd.dirty || !nom.valid && nom.dirty || !ida.valid && ida.dirty" class="alerta">\n\n    <ion-card-content>Este campo é obrigatório</ion-card-content>\n\n  </ion-card>\n\n  <div id="mais">\n\n    <button ion-button round color="danger" (click)="excluir()" [class.invisivel]="novo" [disabled]="!cd.valid">\n\n      <ion-icon name="trash"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="primary" (click)="alterar()" [class.invisivel]="novo" [disabled]="!cd.valid">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="primary" (click)="incluir()" [class.invisivel]="!novo" [disabled]="!cd.valid">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\pessoa\pessoa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_pessoas_service_pessoas_service__["a" /* PessoasService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__["a" /* TarefasService */]])
], PessoaPage);

//# sourceMappingURL=pessoa.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pessoas_service_pessoas_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pessoa_pessoa__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PessoasPage = (function () {
    function PessoasPage(navCtrl, navParams, pessoasService, tarefasService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pessoasService = pessoasService;
        this.tarefasService = tarefasService;
        this.tarefas = tarefasService.getTarefas();
        this.pessoas = pessoasService.getPessoas();
    }
    PessoasPage.prototype.nomeTarefa = function (cdg) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i] == cdg) {
                return this.tarefas[i].descricao;
            }
            return "Tarefa não encontrada";
        }
    };
    PessoasPage.prototype.selecionaPessoa = function (cdg) {
        var cn = parseInt(cdg);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pessoa_pessoa__["a" /* PessoaPage */], { codigo: cn, novo: false });
    };
    PessoasPage.prototype.novaPessoa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pessoa_pessoa__["a" /* PessoaPage */], { codigo: 0, novo: true });
    };
    return PessoasPage;
}());
PessoasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pessoas',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\pessoas\pessoas.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pessoas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let p of pessoas" (click)="selecionaPessoa(p.codigo)">\n\n      <h2>{{p.nome}}</h2>\n\n      <h3>{{p.cargo}}</h3>\n\n      <p>{{p.idade}} anos</p>\n\n    </button>\n\n  </ion-list>\n\n  <div id="mais"><button ion-button round color="primary" (click)="novaPessoa()">\n\n    <ion-icon name="add"></ion-icon>\n\n    </button></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\pessoas\pessoas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_pessoas_service_pessoas_service__["a" /* PessoasService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_tarefas_service_tarefas_service__["a" /* TarefasService */]])
], PessoasPage);

//# sourceMappingURL=pessoas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetoPage = (function () {
    function ProjetoPage(navCtrl, navParams, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.nomeProjeto = "";
        this.codigoProjeto = navParams.get('codigo');
        this.novo = navParams.get('novo');
        var projetos = projetosService.getProjetos();
        if (!this.novo) {
            for (var i = 0; i < projetos.length; i++) {
                if (projetos[i].codigo == this.codigoProjeto) {
                    this.nomeProjeto = projetos[i].nome;
                    break;
                }
            }
        }
    }
    ProjetoPage.prototype.alterar = function () {
        this.projetosService.editProjeto(this.codigoProjeto, this.nomeProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.excluir = function () {
        this.projetosService.deleteProjeto(this.codigoProjeto);
        this.navCtrl.pop();
    };
    ProjetoPage.prototype.incluir = function () {
        this.projetosService.addProjeto(this.nomeProjeto);
        this.navCtrl.pop();
    };
    return ProjetoPage;
}());
ProjetoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projeto',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\projeto\projeto.html"*/' <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>projeto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary">Nome:</ion-label>\n\n      <ion-input type="text" placeholder="Nome do Projeto" \n\n                [(ngModel)]="nomeProjeto" name="nomeProjeto" required #nome="ngModel">\n\n      </ion-input>\n\n    </ion-item>               \n\n  </ion-list>\n\n\n\n  <ion-card>\n\n    <ion-card-content class="alerta" *ngIf="!nome.valid && nome.dirty">  \n\n      O nome do projeto não pode ficar em branco.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <div id="mais">\n\n    <button ion-button round color="primary" (click)="incluir()"\n\n      [disabled]="!nome.valid" [class.invisivel]="!novo">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="primary" (click)="alterar()" \n\n      [disabled]="!nome.valid" [class.invisivel]="novo">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="danger" (click)="excluir()" \n\n      [disabled]="!nome.valid" [class.invisivel]="novo">\n\n      <ion-icon name="trash"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\projeto\projeto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], ProjetoPage);

//# sourceMappingURL=projeto.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projeto_projeto__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjetosPage = (function () {
    function ProjetosPage(navCtrl, navParams, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetosService = projetosService;
        this.projetos = projetosService.getProjetos();
    }
    ProjetosPage.prototype.selecionaProjeto = function (cdg) {
        var cn = parseInt(cdg);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: cn, novo: false });
    };
    ProjetosPage.prototype.novoProjeto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__projeto_projeto__["a" /* ProjetoPage */], { codigo: 0, novo: true });
    };
    return ProjetosPage;
}());
ProjetosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projetos',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\projetos\projetos.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>projetos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of projetos" (click)="selecionaProjeto(p.codigo)">\n\n        {{p.nome}}\n\n      </button>\n\n    </ion-list>\n\n    <div id="mais"><button ion-button round color="primary" (click)="novoProjeto()">\n\n      <ion-icon name="add"></ion-icon>\n\n      </button></div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\projetos\projetos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], ProjetosPage);

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TarefaPage = (function () {
    function TarefaPage(navCtrl, navParams, tarefasService, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.rootPage = null;
        this.projetos = projetosService.getProjetos();
        this.codigoTarefa = navParams.get('codigo');
        this.novo = navParams.get('novo');
        if (!this.novo) {
            var tarefas = tarefasService.getTarefas();
            for (var i = 0; i < tarefas.length; i++) {
                if (tarefas[i].codigo == this.codigoTarefa) {
                    this.codigoProjeto = tarefas[i].projeto;
                    this.descricao = tarefas[i].descricao;
                    this.prioridade = tarefas[i].prioridade;
                    var d = new Date();
                    this.data = d.getFullYear() + "-" +
                        ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                        ("0" + d.getDate()).substr(-2, 2);
                }
            }
        }
        else {
            this.codigoProjeto = this.projetos[0].codigo;
            this.descricao = '';
            this.prioridade = 3;
            var d = new Date();
            this.data = d.getFullYear() + "-" +
                ("0" + (d.getMonth() + 1)).substr(-2, 2) + "-" +
                ("0" + d.getDate()).substr(-2, 2);
        }
    }
    TarefaPage.prototype.alterar = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.editTarefa(this.codigoTarefa, this.codigoProjeto, this.descricao, d, this.prioridade);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.excluir = function () {
        this.tarefasService.deleteTarefa(this.codigoTarefa);
        this.navCtrl.pop();
    };
    TarefaPage.prototype.incluir = function () {
        var d = new Date(parseInt(this.data.substr(0, 4)), parseInt(this.data.substr(5, 2)), parseInt(this.data.substr(8, 2)));
        this.tarefasService.addTarefa(this.codigoProjeto, this.descricao, d, this.prioridade);
        this.navCtrl.pop();
    };
    return TarefaPage;
}());
TarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefa',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tarefa\tarefa.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    \n\n    <ion-title>Tarefa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary">Descrição</ion-label>\n\n      <ion-input placeholder="Descrição da Tarefa" [(ngModel)]="descricao"\n\n      required name="descricao" #cd="ngModel"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary">Projeto</ion-label>\n\n      <ion-select [(ngModel)]="codigoProjeto">\n\n        <ion-option *ngFor="let p of projetos" value="{{p.codigo}}">\n\n          {{p.nome}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary">Data</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" min="2010" max="2030" [(ngModel)]="data"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary">Prioridade</ion-label>\n\n      <ion-select [(ngModel)]="prioridade">\n\n        <ion-option value="1">1 - Alta</ion-option>\n\n        <ion-option value="2">2 - Média</ion-option>\n\n        <ion-option value="3">1 - Baixa</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-card *ngIf="!cd.valid && cd.dirty" class="alerta">\n\n    <ion-card-content>A descrição da tarefa é obrigatória</ion-card-content>\n\n  </ion-card>\n\n  <div id="mais">\n\n    <button ion-button round color="danger" (click)="excluir()" [class.invisivel]="novo" [disabled]="!cd.valid">\n\n      <ion-icon name="trash"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="primary" (click)="alterar()" [class.invisivel]="novo" [disabled]="!cd.valid">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n    <button ion-button round color="primary" (click)="incluir()" [class.invisivel]="!novo" [disabled]="!cd.valid">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tarefa\tarefa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], TarefaPage);

//# sourceMappingURL=tarefa.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TarefasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filtro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TarefasPage = (function () {
    function TarefasPage(navCtrl, navParams, menuCtrl, tarefasService, projetosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.tarefasService = tarefasService;
        this.projetosService = projetosService;
        this.filtroTarefas = {};
        this.projetos = projetosService.getProjetos();
        this.tarefas = tarefasService.getTarefas();
    }
    TarefasPage.prototype.nomeProjeto = function (cdg) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == cdg) {
                return this.projetos[i].nome;
            }
        }
    };
    TarefasPage.prototype.selecionaTarefa = function (cdg) {
        var t = parseInt(cdg);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__["a" /* TarefaPage */], { codigo: t, novo: false });
    };
    TarefasPage.prototype.novaTarefa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefa_tarefa__["a" /* TarefaPage */], { codigo: 0, novo: true });
    };
    TarefasPage.prototype.limpaFiltros = function () {
        this.filtroTarefas = {};
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroProjeto = function (cdg) {
        this.filtroTarefas = { projeto: cdg };
        this.menuCtrl.close();
    };
    TarefasPage.prototype.filtroDias = function (d) {
        this.filtroTarefas = { dias: d };
        this.menuCtrl.close();
    };
    return TarefasPage;
}());
TarefasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefas',template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tarefas\tarefas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tarefas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="menucontent">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Filtros</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n      <ion-content>\n\n        <ion-list>\n\n          <ion-item-group>\n\n            <button ion-item (click)="limpaFiltros()">Todas</button>\n\n            <button ion-item (click)="filtroDias(0)">Até hoje</button>\n\n            <button ion-item (click)="filtroDias(1)">Até amanhã</button>\n\n            <button ion-item (click)="filtroDias(7)">Até próxima semana</button>\n\n          </ion-item-group>\n\n          <ion-item-divider class="light">POR PROJETO</ion-item-divider>\n\n          <button ion-item *ngFor="let p of projetos" (click)="filtroProjeto(p.codigo)">{{p.nome}}</button>\n\n        </ion-list>\n\n      </ion-content>\n\n  </ion-menu>\n\n  \n\n  <ion-nav id="nav" #menucontent [root]="rootPage"></ion-nav>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let t of tarefas | filtro: filtroTarefas" (click)="selecionaTarefa(t.codigo)">\n\n      <h2>{{t.descricao}}</h2>\n\n      <h2>{{nomeProjeto(t.projeto)}} ({{t.projeto}})</h2>\n\n      <p>{{t.data | date:\'dd/MM/yyyy\'}}</p>\n\n      <ion-badge item-right\n\n        [class.alta]="t.prioridade==1"\n\n        [class.media]="t.prioridade==2"\n\n        [class.baixa]="t.prioridade==3">\n\n        {{t.prioridade}}</ion-badge>\n\n    </button>\n\n  </ion-list>\n\n  <div id="mais">\n\n    <button ion-button round color="primary" (click)="novaTarefa()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tarefas\tarefas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_projetos_service_projetos_service__["a" /* ProjetosService */]])
], TarefasPage);

var Filtro = (function () {
    function Filtro() {
    }
    Filtro.prototype.transform = function (itens, filtro) {
        itens.sort(function (a, b) { return a.data - b.data; });
        if (filtro.projeto >= 0) {
            return itens.filter(function (item) { return item.projeto == filtro.projeto; });
        }
        else if (filtro.dias >= 0) {
            var d_1 = new Date((new Date()).getTime() + filtro.dias * 24 * 60 * 60 * 1000);
            return itens.filter(function (item) { return item.data <= d_1; });
        }
        else
            return itens;
    };
    return Filtro;
}());
Filtro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filtro'
    })
], Filtro);

//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pessoa/pessoa.module": [
		273,
		5
	],
	"../pages/pessoas/pessoas.module": [
		274,
		4
	],
	"../pages/projeto/projeto.module": [
		275,
		3
	],
	"../pages/projetos/projetos.module": [
		276,
		2
	],
	"../pages/tarefa/tarefa.module": [
		277,
		1
	],
	"../pages/tarefas/tarefas.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pessoas_pessoas__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__tarefas_tarefas__["b" /* TarefasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__projetos_projetos__["a" /* ProjetosPage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pessoas_pessoas__["a" /* PessoasPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Pessoas" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Tarefas" tabIcon="list"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Projetos" tabIcon="folder"></ion-tab>\n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_projetos_projetos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projeto_projeto__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tarefas_tarefas__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tarefa_tarefa__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pessoas_pessoas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pessoa_pessoa__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_projetos_service_projetos_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_tarefas_service_tarefas_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_pessoas_service_pessoas_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_brightness__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tarefas_tarefas__["a" /* Filtro */],
            __WEBPACK_IMPORTED_MODULE_9__pages_pessoas_pessoas__["a" /* PessoasPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pessoa_pessoa__["a" /* PessoaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/pessoa/pessoa.module#PessoaPageModule', name: 'PessoaPage', segment: 'pessoa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pessoas/pessoas.module#PessoasPageModule', name: 'PessoasPage', segment: 'pessoas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projeto/projeto.module#ProjetoPageModule', name: 'ProjetoPage', segment: 'projeto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projetos/projetos.module#ProjetosPageModule', name: 'ProjetosPage', segment: 'projetos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefa/tarefa.module#TarefaPageModule', name: 'TarefaPage', segment: 'tarefa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefas/tarefas.module#TarefasPageModule', name: 'TarefasPage', segment: 'tarefas', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_projetos_projetos__["a" /* ProjetosPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_projeto_projeto__["a" /* ProjetoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tarefas_tarefas__["b" /* TarefasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tarefa_tarefa__["a" /* TarefaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_pessoas_pessoas__["a" /* PessoasPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_pessoa_pessoa__["a" /* PessoaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_projetos_service_projetos_service__["a" /* ProjetosService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_tarefas_service_tarefas_service__["a" /* TarefasService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_pessoas_service_pessoas_service__["a" /* PessoasService */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_brightness__["a" /* Brightness */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\topicosEspeciaisSI\tesi\todolist\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\topicosEspeciaisSI\tesi\todolist\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TarefasService = (function () {
    function TarefasService() {
        this.tarefas = [{ codigo: 1, projeto: 1, descricao: 'Elaborar primeira prova',
                data: new Date(2017, 9, 19), prioridade: 1 },
            { codigo: 2, projeto: 1, descricao: 'Fechar o diário',
                data: new Date(2017, 11, 2), prioridade: 2 },
            { codigo: 3, projeto: 2, descricao: 'Gravar vídeo de apresentação',
                data: new Date(2017, 9, 10), prioridade: 1 },
            { codigo: 4, projeto: 3, descricao: 'Planejar campanha',
                data: new Date(2017, 10, 28), prioridade: 3 }
        ];
        this.ultimoCodigo = 4;
        console.log('Hello TarefasServiceProvider Provider');
    }
    TarefasService.prototype.getTarefas = function () {
        return this.tarefas;
    };
    TarefasService.prototype.editTarefa = function (cdg, prj, desc, dta, prior) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == cdg) {
                this.tarefas[i].projeto = prj;
                this.tarefas[i].descricao = desc;
                this.tarefas[i].data = dta;
                this.tarefas[i].prioridade = prior;
                break;
            }
        }
    };
    TarefasService.prototype.addTarefa = function (prj, desc, dta, prior) {
        this.ultimoCodigo++;
        this.tarefas.push({ codigo: this.ultimoCodigo,
            projeto: prj,
            descricao: desc,
            data: dta,
            prioridade: prior });
    };
    TarefasService.prototype.deleteTarefa = function (cdg) {
        for (var i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].codigo == cdg) {
                this.tarefas.splice(i, 1);
                break;
            }
        }
    };
    return TarefasService;
}());
TarefasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TarefasService);

//# sourceMappingURL=tarefas-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetosService = (function () {
    function ProjetosService() {
        this.projetos = [
            { codigo: 1, nome: 'Algoritmos' },
            { codigo: 2, nome: 'Pós-graduação' },
            { codigo: 3, nome: 'EAD' }
        ];
        this.ultimoCodigo = 3;
        console.log('Hello ProjetosService Provider');
    }
    ProjetosService.prototype.getProjetos = function () {
        return this.projetos;
    };
    ProjetosService.prototype.editProjeto = function (cdg, nom) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == cdg) {
                this.projetos[i].nome = nom;
                break;
            }
        }
    };
    ProjetosService.prototype.deleteProjeto = function (cdg) {
        for (var i = 0; i < this.projetos.length; i++) {
            if (this.projetos[i].codigo == cdg) {
                this.projetos.splice(i, 1);
                break;
            }
        }
    };
    ProjetosService.prototype.addProjeto = function (nom) {
        this.ultimoCodigo++;
        this.projetos.push({
            codigo: this.ultimoCodigo,
            nome: nom
        });
    };
    return ProjetosService;
}());
ProjetosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProjetosService);

//# sourceMappingURL=projetos-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PessoasService = (function () {
    function PessoasService() {
        this.pessoas = [{ codigo: 2, tarefa: [2, 1], nome: 'Alair Fonseca Pinto Filho', idade: 25, cargo: 'Arquiteto de Software' },
            { codigo: 1, tarefa: [1, 2, 3, 4], nome: 'Bianca Cristina Torres Silva', idade: 20, cargo: 'Gerente de Projetos' },
            { codigo: 3, tarefa: [3], nome: 'Caique Matos', idade: 30, cargo: 'CEO' },
            { codigo: 4, tarefa: [2], nome: 'Hebert Costa Andrade', idade: 35, cargo: 'CTO' }];
        this.ultimoCodigo = 4;
        console.log('Hello PessoasServiceProvider Provider');
    }
    PessoasService.prototype.getPessoas = function () {
        return this.pessoas;
    };
    PessoasService.prototype.editPessoa = function (cdg, trf, nom, idad, carg) {
        for (var i = 0; i < this.pessoas.length; i++) {
            if (this.pessoas[i].codigo == cdg) {
                this.pessoas[i].tarefa = trf;
                this.pessoas[i].nome = nom;
                this.pessoas[i].cargo = carg;
                break;
            }
        }
    };
    PessoasService.prototype.addPessoa = function (trf, nom, idad, carg) {
        this.ultimoCodigo++;
        this.pessoas.push({ codigo: this.ultimoCodigo,
            tarefa: trf,
            nome: nom,
            idade: idad,
            cargo: carg });
    };
    PessoasService.prototype.deletePessoa = function (cdg) {
        for (var i = 0; i < this.pessoas.length; i++) {
            if (this.pessoas[i].codigo == cdg) {
                this.pessoas.splice(i, 1);
                break;
            }
        }
    };
    return PessoasService;
}());
PessoasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PessoasService);

//# sourceMappingURL=pessoas-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map