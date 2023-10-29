class Rectangulo {
  // Esto le hace propiedad privada (no puedes acceder desde fuera)
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.area = base * altura;
  }

  // También se pueden hacer metodos privados en JavaScript
  #calcularArea() {
    console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);
