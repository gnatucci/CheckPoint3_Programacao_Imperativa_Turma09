const Aluno = function (nome = '', qtdFaltas = 0, notas = []) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;

  this.calcularMedia = function () {
    const qtdNotas = this.notas.length;

    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      const nota = this.notas[i];
      soma += nota;
    }

    const media = soma / qtdNotas;
    return media.toFixed(2);
  };

  this.faltas = function () {
    return (this.qtdFaltas += 1);
  };
};

exports.Aluno = Aluno;
