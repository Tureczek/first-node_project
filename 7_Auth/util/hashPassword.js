// Create a script that hashes passwords
// get the password to hash from args
// bonus Use promises or async await

const bcrypt = require("bcrypt");
const saltRounds = 12;

hashedPassword  = "s";
plainTextPassword = process.argv[2]

/*
async (myPassword) => {
    try {
        const hashedPassword = await bcrypt.hash("myPassword", saltRounds);
        console.log(`hashedPassword = ${hashedPassword}`)
    }
}


console.log(process.argv)
*/
