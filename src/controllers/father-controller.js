const Father = require('../models/father-model');

exports.post = (req, res, next) =>{
    var father = new Father(req.body);
    father
        .save()
        .then(x => {
            res.status(200).send({ message: 'Filhote registrado com sucesso!' })
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao registrar filhote',
                data: e
            })
        });
}

exports.delete = (req, res, next) =>{
    const id = req.params.id;
    res.status(200).send({id:id})
}