const { aluno1, aluno2, aluno3, aluno4, estudantes } = require('./estudantes');

const curso = {
  nomeDoCurso: 'Digital House - Certified Tech Developer',
  notaDeAprovacao: 7,
  faltasMaximas: 5,
  listaDeEstudantes: [...estudantes],
  listaAprovados: [],
  listaDeAprovacao: [],

  adicionarAluno: function (aluno) {
    this.listaDeEstudantes.push(aluno);
  },

  estaAprovado: function (aluno) {
    const excedeuLimiteDeFaltas = aluno.qtdFaltas > this.faltasMaximas;
    if (excedeuLimiteDeFaltas) return false;

    const atingiuLimiteDeFaltas = aluno.qtdFaltas == this.faltasMaximas;
    const mediaDoAluno = aluno.calcularMedia();
    const penalidade = 1.1;
    const notaDeCorte = atingiuLimiteDeFaltas
      ? this.notaDeAprovacao * penalidade
      : this.notaDeAprovacao;
    const estaAcimaDaMedia = mediaDoAluno >= notaDeCorte;

    return estaAcimaDaMedia;
  },

  estudantesAprovados: function () {
    this.listaDeEstudantes.forEach((aluno) => {
      if (this.estaAprovado(aluno))
        this.listaAprovados.push({
          nome: aluno.nome,
          aprovado: this.estaAprovado(aluno),
        });
      this.listaDeAprovacao.push({
        nome: aluno.nome,
        aprovado: this.estaAprovado(aluno),
      });
    });
    console.log(this.listaDeAprovacao);
    console.log(this.listaAprovados);
  },
};

console.log(curso);

curso.estudantesAprovados();

console.log(curso.listaDeEstudantes);

console.log(`A média de ${aluno1.nome} foi ${aluno1.calcularMedia()} e seu número de faltas é ${aluno1.faltas()}.`);
console.log(`A média de ${aluno2.nome} foi ${aluno2.calcularMedia()} e seu número de faltas é ${aluno2.faltas()}.`);
console.log(`A média de ${aluno3.nome} foi ${aluno3.calcularMedia()} e seu número de faltas é ${aluno3.faltas()}.`);
console.log(`A média de ${aluno4.nome} foi ${aluno4.calcularMedia()} e seu número de faltas é ${aluno4.faltas()}.`);
console.log(curso.listaAprovados);



module.exports = curso;
