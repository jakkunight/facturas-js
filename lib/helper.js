const bcryptjs = require('bcryptjs');

const helper = {};

helper.encrypt_password = async (password_text) => {
    if(password_text && typeof password_text === "string"){
        try{
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(password_text, salt);
            console.log("[HELPER -> encrypt_password()] RETURNING PASSWORD HASH...");
            return hash;
        }catch(error){
            console.log("[HELPER -> encrypt_password()] FATAL ERROR.");
            console.log(error);
            return -1;
        }
    }else{
        console.log("[HELPER -> encrypt_password()] ERROR. PASSWORD IS IN BLANK OR ITS TYPE IS NOT STRING.");
        return -1;
    }
};
helper.compare_passwords = async (password_text, password_hash) => {
    if(password_hash && password_text && typeof password_text === "string"){
        try{
            const match = await bcryptjs.compare(password_text, password_hash);
            console.log("[HELPER -> encrypt_password()] RETURNING RESULT...");
            return match;
        }catch(error){
            console.log("[HELPER -> encrypt_password()] FATAL ERROR.");
            console.log(error);
            return -1;
        }
    }else{
        console.log("[HELPER -> compare_passwords()] ERROR. PASSWORD OR HASH ARE IN BLANK OR THEIR TYPE IS NOT STRING.");
        return -1;
    }
};

module.exports = helper;