const UsersModel = require("../models/userModel");

exports.getUsuarioByEmail = async (email) => {
    

    const user = await UsersModel.findOne({
        where: {
            email: email
        }
    })
    return user
}


