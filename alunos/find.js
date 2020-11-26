 /**
  * Procurar registros na coleção
  */

 db.alunos.find()

 /**
  * retorna registros formatados
  */

db.alunos.find().pretty()

/**
 * Procura registros com filtro
 */

db.alunos.find({
     "nome": "jailson"
 }).pretty()

db.alunos.find({
    "habilidades.nome": "inglês"
 }).pretty()

 db.alunos.find({
     "nome": "jailson",
    "habilidades.nome": "inglês"
 }).pretty()

 
db.alunos.find({
    "curso.nome":"Engenharia Quimica"
}).pretty()

db.alunos.find({
    "curso.nome":"Medicina"
}).pretty()

/**
 * Pesquisa com operador logico OR
 */

 db.alunos.find({
     $or: [
        {"curso.nome": "Engenharia Quimica"},
        {"curso.nome": "Medicina"}
     ]
 }).pretty()

 db.alunos.find({
    $or: [
       {"curso.nome": "Engenharia Quimica"},
       {"curso.nome": "Medicina"}
    ],
    "nome": "Daniela"
}).pretty()

db.alunos.find({
    $or: [
       {"curso.nome": "Engenharia Quimica"},
       {"curso.nome": "Medicina"},
       {"curso.nome": "Moda"}
    ],
    "nome": "Daniela"
}).pretty()


db.alunos.find({
    "curso.nome": {
        $in: ["Engenharia Quimica", "Medicina"]
    }     
}).pretty()


/**
 * operador maior que
 */

db.alunos.find({
    "notas": { $gt: 8}
})

db.alunos.findOne({
    "notas": { $gt: 8}
})

/**
 * operador menor que
 */

db.alunos.findOne({
    "notas": { $lt: 5}
})

/**
 * Ordenando
 */

db.alunos.find().sort({"nome": 1})

db.alunos.find().sort({"nome": -1})

db.alunos.find().sort({"nome": 1}).limit(3)

