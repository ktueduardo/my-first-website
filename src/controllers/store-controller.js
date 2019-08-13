/*Ainda em desenvolvimento...
Tem como proposito listar todos os itens das duas tabelas 
Pais e filhotes*/ 

exports.post = (req, res, next) =>{
    res.status(200).send({
        title: 'node api beta',
        version : '0.0.1'
    })
}

exports.delete = (req, res, next) =>{
    const id = req.params.id;
    res.status(200).send({id:id})
}