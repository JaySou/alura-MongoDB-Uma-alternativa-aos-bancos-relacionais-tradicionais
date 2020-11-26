/**
 * Update apenas no primeiro registro encontrado
 */

db.alunos.update(
    {"curso.nome": "Sistema de informação"},
    { 
        $set: { 
            "curso.nome": "Sistemas de informação update" 
        } 
    }
)


/**
 * update em varios registros
 */

db.alunos.update(
    {"curso.nome": "Sistema de informação"},
    { 
        $set: { 
            "curso.nome": "Sistemas De Informação" 
        } 
    },
    {
        multi: true
    }
)

/**
 * Adiciona um item no array
 */

db.alunos.update(
    {"_id" : ObjectId("5e1d081ad2223833f7255746")},
    {
        $push: {
            notas: 8.5
        }
    }
)

/**
 * Adicionando varios itens de uma vez em um array
 */

 db.alunos.update(
    {"_id" : ObjectId("5e1d081ad2223833f7255746")},
    {
        $push: {
            notas: { $each: [ 8.5, 3 ] }
        }
    }
)

/**
 * Inserindo localização
 */

 db.alunos.update(
    {"_id" : ObjectId("5e1d0817d2223833f7255745")},
    {
        $set:{
            "localizacao": {
                "endereco": "Rua Vergueiro, 3185",
                "cidade": "São Paulo",
                "pais": "Brasil",
                "coordinates": [-23.588213, -46.632356],
                "type": "Point"
            } 
        }
    }
 )

 