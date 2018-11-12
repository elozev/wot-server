'use strict'

module.exports = (router, db) => {
    router.post('/auth', (req, res, next) => {
        db.users.findOne({where: {email: req.body.email}})
            .then(user => {
                if (!user)
                    res.status(404).json({message: "User not found!"});
                else if (user) {

                    if (!user.validPassword(req.body.password)) {
                        res.json({message: "Password do not match!"});
                    } else {
                        res.json({message: "Here is your token!"});
                    }
                }
            });
    });
};
