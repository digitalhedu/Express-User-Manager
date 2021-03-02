const fs = require("fs");
const path = require("fs");
module.exports = {
    findUserByEmail:(email) => Promise(JSON.parse(fs.readFileSync(path.resolve(__dirname,"../users.json"),"utf-8")).find(user => user.email == email))
}