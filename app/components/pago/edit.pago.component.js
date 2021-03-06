"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar el núcleo de Angular
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var login_service_1 = require('../../services/login.service');
var tramite_service_1 = require('../../services/tramite/tramite.service');
var pago_service_1 = require("../../services/pago/pago.service");
var Pago_1 = require('../../model/pago/Pago');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var PagoEditComponent = (function () {
    function PagoEditComponent(_loginService, _TramiteService, _PagoService, _route, _router) {
        this._loginService = _loginService;
        this._TramiteService = _TramiteService;
        this._PagoService = _PagoService;
        this._route = _route;
        this._router = _router;
    }
    PagoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pago = new Pago_1.Pago(null, null, null, "", "", "");
        var token = this._loginService.getToken();
        this._TramiteService.getTramite().subscribe(function (response) {
            _this.tramites = response.data;
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
        this._PagoService.showPago(token, this.id).subscribe(function (response) {
            var data = response.data;
            _this.pago = new Pago_1.Pago(data.id, data.tramite.id, data.valor, data.fechaPago, data.horaPagoHM, data.fuente);
            console.log(_this.pago);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    PagoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var token = this._loginService.getToken();
        this._PagoService.editPago(this.pago, token).subscribe(function (response) {
            _this.respuesta = response;
            (function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert("Error en la petición");
                }
            });
        });
    };
    PagoEditComponent = __decorate([
        core_1.Component({
            selector: 'default',
            templateUrl: 'app/view/pago/edit.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [login_service_1.LoginService, tramite_service_1.TramiteService, pago_service_1.PagoService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, tramite_service_1.TramiteService, pago_service_1.PagoService, router_1.ActivatedRoute, router_1.Router])
    ], PagoEditComponent);
    return PagoEditComponent;
}());
exports.PagoEditComponent = PagoEditComponent;
//# sourceMappingURL=edit.pago.component.js.map