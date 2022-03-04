const db = require('..database/db');

const crud = {};

crud.insert_row = async (table, row) => {
    if(table && row){
        if(typeof table === "string" && typeof row === "object"){
            try{
                const rows = await db.query("INSERT INTO " + table + " SET ?", [row]);
                if(rows.affectedRows){
                    console.log("[CRUD -> insert_row()] QUERY OK.");
                    return 0;
                }else{
                    console.log("[CRUD -> insert_row()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> insert_row()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> insert_row()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> insert_row()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.read_table = async (table) => {
    if(table){
        if(typeof table === "string"){
            try{
                const rows = await db.query("SELECT * FROM" + table);
                if(rows){
                    console.log("[CRUD -> read_table()] QUERY OK.");
                    return rows;
                }else{
                    console.log("[CRUD -> read_table()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> read_table()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> read_table()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> read_table()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.update_row = async (table, row, id) => {
    if(table && row && id){
        if(typeof table === "string" && typeof row === "object" && typeof id === "string"){
            try{
                const rows = await db.query("UPDATE " + table + " SET ? WHERE id = ?", [row, id]);
                if(rows.affectedRows){
                    console.log("[CRUD -> update_row()] QUERY OK.");
                    return 0;
                }else{
                    console.log("[CRUD -> update_row()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> update_row()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> update_row()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> update_row()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.delete_row = async (table, id) => {
    if(table && id){
        if(typeof table === "string" && typeof id === "string"){
            try{
                const rows = await db.query("DELETE FROM" + table + " WHERE id = ?", [id]);
                if(rows.affectedRows){
                    console.log("[CRUD -> delete_row()] QUERY OK.");
                    return 0;
                }else{
                    console.log("[CRUD -> delete_row()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> delete_row()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> delete_row()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> delete_row()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

module.exports = crud;