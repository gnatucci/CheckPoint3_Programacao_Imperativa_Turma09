const { Aluno } = require('./aluno');

const aluno1 = new Aluno('guilherme', 6, [10, 8, 7]); 
const aluno2 = new Aluno('leonardo', 5, [10, 10, 10]); 
const aluno3 = new Aluno('Leticia', 5, [7, 7, 7]); 
const aluno4 = new Aluno('Carlos', 4, [7, 7, 7]); 

exports.aluno1 = aluno1;
exports.aluno2 = aluno2;
exports.aluno3 = aluno3;
exports.aluno4 = aluno4;
exports.estudantes = [aluno1, aluno2, aluno3, aluno4];
