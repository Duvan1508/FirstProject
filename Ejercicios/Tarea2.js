var carreras = [ ];

function Persona(nombre,direccion, telefono) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
}

function Taxi(persona, placa, fecha, hora) {
  this.persona = persona;
  this.placa = placa;
  this.fecha = fecha;
  this.hora = hora;
}

$(function() {
  var name = "";
  var address = "";
  var phone = "";
  var car = "";
  var date = "";
  var hour = "";

  $( "#boton" ).click(function() {
    name = $("#nombre").val();
    address = $("#direccion").val();
    phone = $("#numero").val();
    car = $("#taxi").val();
    date = $("#fecha").val();
    hour = $("#hora").val();
    var p1 = new Persona(name, address, phone);
    var c1 = new Taxi(p1, car, date, hour);
    console.log(c1);
    carreras.push(c1);
    addRow(c1);
    cleanForm();
  });

  function cleanForm() {
    $("#nombre").val("");
    $("#direccion").val("");
    $("#numero").val("");
    $("#taxi").val("");
    $("#fecha").val("");
    $("#hora").val("");
  }

  function addRow(carrera) {
    var row = "<tr><td>" + carrera.persona.nombre + "</td><td>" + carrera.persona.direccion  + "</td><td>" + carrera.persona.telefono + "</td><td>" + carrera.placa + "</td><td>" + carrera.fecha + "-" + carrera.hora +  "</td></tr>";
    $("#tbody").append(row);
  }
});
