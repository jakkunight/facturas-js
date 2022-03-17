const db = require('../database/db');

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
                const rows = await db.query("SELECT * FROM " + table);
                if(rows.length){
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
                const rows = await db.query("DELETE FROM " + table + " WHERE id = ?", [id]);
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

crud.find_row_by_id = async (table, id) => {
    if(table && id){
        if(typeof table === "string" && typeof id === "string"){
            try{
                const rows = await db.query("SELECT * FROM " + table + " WHERE id = ?", [id]);
                if(rows.length){
                    console.log("[CRUD -> find_row_by_id()] QUERY OK.");
                    return rows[0];
                }else{
                    console.log("[CRUD -> find_row_by_id()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> find_row_by_id()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> find_row_by_id()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> find_row_by_id()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.find_row_by_key = async (table, key, value) => {
    if(table && key && value){
        if(typeof table === "string" && typeof key === "string" && (typeof value === "string" || typeof value === "number" || typeof value === "boolean")){
            try{
                const rows = await db.query("SELECT * FROM " + table + " WHERE " + key + " = ?", [value]);
                if(rows.length){
                    console.log("[CRUD -> find_row_by_key()] QUERY OK.");
                    return rows[0];
                }else{
                    console.log("[CRUD -> find_row_by_key()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> find_row_by_key()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> find_row_by_key()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> find_row_by_key()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.search_row_by_key = async (table, key, value) => {
    if(table && key && value){
        if(typeof table === "string" && typeof key === "string" && (typeof value === "string" || typeof value === "number" || typeof value === "boolean")){
            try{
                const rows = await db.query("SELECT * FROM " + table + " WHERE " + key + " LIKE '%" + value + "%'");
                if(rows.length){
                    console.log("[CRUD -> search_row_by_key()] QUERY OK.");
                    return rows[0];
                }else{
                    console.log("[CRUD -> search_row_by_key()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> search_row_by_key()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> search_row_by_key()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> search_row_by_key()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.search_row_by_keys = async (table, keys, values) => {
    if(table && keys && values){
        if(typeof table === "string" && typeof keys === "object" && typeof values === "object" && keys.length === values.length){
            try{
                var query = "SELECT * FROM " + table + " WHERE ";
                for(var i = 0; i < keys.length; i++){
                    query += keys[i] + " LIKE '%" + values + "%'"
                    if(i != keys.length - 1){
                        query += " OR";
                    }
                }
                const rows = await db.query(query);
                if(rows.length){
                    console.log("[CRUD -> search_row_by_keys()] QUERY OK.");
                    return rows[0];
                }else{
                    console.log("[CRUD -> search_row_by_keys()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> search_row_by_keys()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> search_row_by_keys()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> search_row_by_keys()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

crud.find_row_by_keys = async (table, keys, values) => {
    if(table && keys && values){
        if(typeof table === "string" && typeof keys === "object" && typeof values === "object" && keys.length === values.length){
            try{
                var query = "SELECT * FROM " + table + " WHERE ";
                for(var i = 0; i < keys.length; i++){
                    query += keys[i] + " = '%" + values + "%'"
                    if(i != keys.length - 1){
                        query += " AND"
                    }
                }
                const rows = await db.query(query);
                if(rows.length){
                    console.log("[CRUD -> find_row_by_keys()] QUERY OK.");
                    return rows[0];
                }else{
                    console.log("[CRUD -> find_row_by_keys()] FATAL ERROR.");
                    return -1;
                }
            }catch(error){
                console.log("[CRUD -> find_row_by_keys()] FATAL ERROR.");
                console.log(error);
                return -1;
            }
        }else{
            console.log("[CRUD -> find_row_by_keys()] ERROR. THE DATATYPES DOESN'T MATCH.");
            return -1;
        }
    }else{
        console.log("[CRUD -> find_row_by_keys()] ERROR. THE DATA IS IN BLANK.");
        return -1;
    }
};

module.exports = crud;