'use strict'

module.exports = (router, db) => {

    router.get('/users', function (req, res, next) {
        db.users.findAll()
            .then(users => {
                res.json(users);
            })
    });

    router.post('/users', (req, res, next) => {
        const userToCreate = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: db.users.generateHash(req.body.password),
            email: req.body.email,
            bio: req.body.bio
        };

        db.users.create(userToCreate)
            .then(newUser => {
                res.status(200).json(newUser);
            })
            .catch(db.Sequelize.ValidationError, (msg) => {
                res.status(422).send(msg.errors);
            })
            .catch((err) => {
                return res.status(400).json({message: "issue trying to connect to database", stack_trace: err.errors});
            })
    });

};