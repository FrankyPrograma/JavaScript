class Persona {
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre); // undefined
    console.log("Hola a todos, soy un método stático");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // El set solo recibe un argumento (generalmente)
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  // El get es para recuperar un valor
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Metodos (funciones propias de la clase)
  quienSoy() {
    console.log("Soy" + this.nombre + "Y mi identidad es: " + this.codigo);
  }

  miFrase() {
    this.quienSoy(); // Llamar metodos dentro de la propia clase
    console.log(`${this.codigo} dice ${this.miFrase}`);
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spider",
  "Soy tu amigo y vecino Spiderman"
);

class Heroe extends Persona {
  clan = "Sin Clan";

  constructor(nombre, codigo, frase) {
    // Hacemos referencia a la clase de la que extiende
    super(nombre, codigo, frase); // El super antes que las propiedades de la propia clase
    this.clan = "Avengers";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy(); // Se imprime este mensaje también
  }
}

spiderman.setComidaFavorita = "Tarta de cereza de la tia May";

// Los metodos y propiedades staticas se pueden acceder sin instanciar la clase
console.log("Conteo statico", Persona._conteo);
console.log(Persona._conteo);
Persona.mensaje();
Persona.propiedadExterna = "Hola Mundo"; // Crea esta propiedad statica (como si fuese un objeto)
