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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CiudadanoVehiculoService = (function () {
    function CiudadanoVehiculoService(_http) {
        this._http = _http;
        this.url = "http://localhost/GitHub/colossus-sit/web/app_dev.php/propietariovehiculo";
    }
    CiudadanoVehiculoService.prototype.getCiudadanoVehiculo = function () {
        return this._http.get(this.url + "/").map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.register = function (ciudadanoVehiculo, token, tramiteId, datosT, casosVariantesT) {
        var json = JSON.stringify(ciudadanoVehiculo);
        var datos = JSON.stringify(datosT);
        var casosVariantes = JSON.stringify(casosVariantesT);
        var params = "json=" + json + "&authorization=" + token + "&datos=" + datos + "&casosVariantes=" + casosVariantes;
        console.log(params);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/new/" + tramiteId, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.registerPropietario = function (ciudadanoVehiculo, token) {
        var json = JSON.stringify(ciudadanoVehiculo);
        var params = "json=" + json + "&authorization=" + token;
        console.log(params);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/new/propietario/vehiculo", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.deleteCiudadanoVehiculo = function (token, id) {
        var params = "authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/" + id + "/delete", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.showCiudadanoVehiculo = function (token, id) {
        var params = "authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/show/" + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.editCiudadanoVehiculo = function (ciudadanoVehiculo, token) {
        var json = JSON.stringify(ciudadanoVehiculo);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/edit", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService.prototype.showCiudadanoVehiculoId = function (token, id) {
        var params = "authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/ciudadano/vehiculo/" + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CiudadanoVehiculoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CiudadanoVehiculoService);
    return CiudadanoVehiculoService;
}());
exports.CiudadanoVehiculoService = CiudadanoVehiculoService;
//# sourceMappingURL=ciudadanoVehiculo.service.js.map