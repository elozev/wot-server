'use strict'
const jwt = require('jsonwebtoken');

module.exports = (router, db) => {
    router.post('/auth', (req, res, next) => {
        db.users.findOne({where: {email: req.body.email}})
            .then(user => {
                if (!user)
                    res.status(404).json({message: "User not found!"});
                else if (user) {

                    if (!user.validPassword(req.body.password)) {
                        res.status(401).json({
                            success: false,
                            message: "Password do not match!"
                        });
                    } else {
                        //--------------------  payload ------------ secret_key
                        const token = jwt.sign({email: user.email}, db.constants.secret, {expiresIn: db.constants.token_expiration});
                        const expiresAt = Date.now() + db.constants.token_expiration;
                        res.status(200)
                            .json({
                                success: true,
                                message: "Token generated",
                                expiresAt: expiresAt,
                                expiresAtPretty: new Date(expiresAt),
                                token: token
                            })
                    }
                }
            });
    });
};
