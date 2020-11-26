// mongoimport -c alunos --jsonArray < alunos.json

db.alunos.createIndex({"localizacao": "2dsphere"})

db.alunos.aggregate([{
    $geoNear:{
        "near": {
            "coordinates":[-23.588055, -46.632403],
            "type":"Point"
},
"distanceField": "distancia.calculada",
"spherical": true
}
}])

db.alunos.aggregate([{
    "$geoNear":{
        "near": {
            "coordinates":[-23.588055, -46.632403],
            "type":"Point"
},
"distanceField": "distancia.calculada",
"spherical": true,
"num":4
}
}])

db.alunos.aggregate([{
    "$geoNear": {
      "near": {
        "coordinates":[-23.588055, -46.632403],
        "type":"Point"
      },
    "distanceField": "distancia.calculada",
    "spherical": true
    }
  },
  { $skip: 1 }
]);