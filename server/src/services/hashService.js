import bcrypt, { genSaltSync } from 'bcryptjs'

const salt = genSaltSync(10);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

export default {
    hashPassword
}