class Persona {
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "Melissa",
  apellido1 = "Flores",
  pais = "Honduras";

const fher = {
  nombre: "Fernando",
  apellido: "Herrara",
  pais: "Costa Rica",
};

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto(fher);
persona2.getInfo();
persona1.getInfo();
