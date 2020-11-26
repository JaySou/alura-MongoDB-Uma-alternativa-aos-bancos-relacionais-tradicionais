
/**
 * Insere um registro na coleção
 */

db.alunos.insert({
    "nome": "Jailson",
    "data_nascimento": new Date("1993,03,27")
})

/**
* Insere um registros com varias caracteristicas
*/

db.alunos.insert({
    "nome": "jailson",
    "data_nascimento": new Date("1993,03,27"),
    "curso": {
        "nome": "Sistema de infomração"
    },
    "notas": [10.0, 9.0, 4.5],
    "habilidades": [
        {
            "nome": "inglês",
            "nivel": "Avançado"
        },
        {
            "nome": "taekwondo",
            "nivel": "Basico"
        }
    ]
})


db.alunos.insert({
   "nome": "Julio  ",
   "data_nascimento": new Date("1972,08,30"),
   "curso": {
       "nome": "Medicina"
   },
   "habilidades": [
       {
           "nome": "inglês",
           "nivel": "Avançado"
       }
   ]
})

db.alunos.insert({
   "nome": "Alberto",
   "data_nascimento": new Date("1972,09,30"),
   "curso": {
       "nome": "Engenharia Quimica"
   },
   "habilidades": [
       {
           "nome": "inglês",
           "nivel": "Intermediario"
       }
   ]
})

db.alunos.insert({
   "nome": "Daniela",
   "data_nascimento": new Date("1995,09,30"),
   "curso": {
       "nome": "Moda"
   },
   "habilidades": [
       {
           "nome": "Alemão",
           "nivel": "Básico"
       }
   ]
})


db.alunos.insert({
    "nome": "jailson",
    "curso": {
        "nome": "matemática"
    }
})

db.alunos.insert({
    "nome": "Fernando",
    "data_nascimento": new Date("1994, 03, 26"),
    "notas": [10, 4.5, 7],
    "curso": {
        "nome": "Sistema de informação"
    }
})


db.alunos.insert({
    "nome": "Alan",
    "data_nascimento": new Date("1994, 03, 26"),
    "notas": [10, 4.5, 7],
    "curso": {
        "nome": "Sistema de informação"
    }
})

db.alunos.insert({
    "nome": "Maria",
    "data_nascimento": new Date("1994, 03, 26"),
    "notas": [10, 4.5, 7],
    "curso": {
        "nome": "Sistema de informação"
    }
})


