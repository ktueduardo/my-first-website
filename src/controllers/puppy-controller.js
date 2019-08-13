//Importando modulos
const Puppy = require('../models/puppy-model');

exports.get = (req, res, next) => {
    Puppy.find({})
        .then(data => {
            res.status(200).send(data)
        })
        .catch(e => {
            message: "falha ao carregar os filhotes"
        })
}

exports.post = (req, res, next) => {
    var puppy = new Puppy(req.body);
    puppy
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

exports.delete = (req, res, next) => {
    Puppy
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Filhote removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover filhote',
                data: e
            });
        });
}