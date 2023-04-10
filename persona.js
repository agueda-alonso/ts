"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Edad = edad;
        this.Dni = dni;
        this.Cumpleanos = cumpleanos;
        this.ColorFavorito = colorFavorito;
        this.Sexo = sexo;
        this.Direcciones = direcciones;
        this.Mails = mails;
        this.Telefonos = telefonos;
        this.Notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this.Nombre;
        },
        set: function (nombre) {
            this.Nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this.Apellidos;
        },
        set: function (apellidos) {
            this.Apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this.Edad;
        },
        set: function (edad) {
            this.Edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this.Dni;
        },
        set: function (dni) {
            this.Dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this.Cumpleanos;
        },
        set: function (cumpleanos) {
            this.Cumpleanos = cumpleanos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this.ColorFavorito;
        },
        set: function (colorFavorito) {
            this.ColorFavorito = colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this.Sexo;
        },
        set: function (sexo) {
            this.Sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this.Direcciones;
        },
        set: function (direcciones) {
            this.Direcciones = direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this.Mails;
        },
        set: function (mails) {
            this.Mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this.Telefonos;
        },
        set: function (telefonos) {
            this.Telefonos = telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this.Notas;
        },
        set: function (notas) {
            this.Notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarNuevaDireccion = function (direccion) {
        this.Direcciones.push(direccion);
    };
    Persona.prototype.agregarNuevoTelefono = function (telefono) {
        this.Telefonos.push(telefono);
    };
    Persona.prototype.agregarNuevoMail = function (mail) {
        this.Mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
