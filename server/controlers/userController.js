const UserModel = require("../models/Users");
const get_users = (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

const get_user = (req, res) => {
    const id = req.params.id
    UserModel.findById({_id: id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

const update_user = (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
const delete_user = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}

const create_user = (req, res) => {
    UserModel.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
}

module.exports = {
    get_users,
    get_user,
    update_user,
    delete_user,
    create_user
}