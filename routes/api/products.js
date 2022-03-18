const router = require('express').Router();
const crud = require('../../lib/crud');
const stdres = require('../../lib/stdres');

router.post('/products/search/', async (req, res) => {
    if(req.body){
        const {
            key,
            value
        } = req.body;
        try{
            const rows = await crud.search_row_by_key("products", key, value);
            if(rows.length){
                console.log("[API -> PRODUCTS -> SEARCH()] ROWS FOUND.");
                res.json(JSON.stringify(rows));
            }else{
                console.log("[API -> PRODUCTS -> SEARCH()] NO ROWS FOUND.");
                res.json(stdres.not_found);
            }
        }catch(error){
            console.log("[API -> PRODUCTS -> SEARCH()] FATAL ERROR.");
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[API -> PRODUCTS -> SEARCH()] FATAL ERROR. NO BODY FOUND.");
        res.json(stdres.fatal_error);
    }
});

router.post('/products/find/', async (req, res) => {
    if(req.body){
        const {
            key,
            value
        } = req.body;
        try{
            const rows = await crud.find_row_by_key("products", key, value);
            if(rows.length){
                console.log("[API -> PRODUCTS -> FIND()] QUERY OK.");
                res.json(await JSON.stringify(rows[0]));
            }else{
                console.log("[API -> PRODUCTS -> FIND()] ERROR. NOT FOUND.");
                res.json(stdres.not_found);
            }
        }catch(error){
            console.log("[API -> PRODUCTS -> FIND()]");
            console.log(error);
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[API -> PRODUCTS -> FIND()] FATAL ERROR. NO BODY FOUND.");
        res.json(stdres.fatal_error);
    }
});

router.post('/products/insert/', async (req, res) => {
    if(req.body){
        const {
            name,
            description,
            sell_price,
            cost,
            quantity
        } = req.body;
        try{
            const rows = await crud.insert_row("products", {
                name,
                description,
                sell_price,
                cost,
                quantity
            });
            if(rows === 0){
                console.log("[API -> PRODUCTS -> INSERT] QUERY OK.");
                res.json(stdres.ok);
            }else{
                console.log("[API -> PRODUCTS -> INSERT] FATAL ERROR.");
                res.json(stdres.fatal_error);
            }
        }catch(error){
            console.log("[API -> PRODUCTS -> INSERT] FATAL ERROR.");
            console.log(error);
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[API -> PRODUCTS -> INSERT] FATAL ERROR. NO BODY FOUND.");
        res.json(stdres.fatal_error);
    }
});

router.post('/products/update/', async (req, res) => {
    if(req.body){
        const {
            id,
            name,
            description,
            cost,
            sell_price,
            quantity
        } = req.body;
        const new_data = {};
        if(name){
            new_data.name = name;
        }
        if(description){
            new_data.description = description;
        }
        if(cost){
            new_data.cost = cost;
        }
        if(sell_price){
            new_data.sell_price = sell_price;
        }
        if(quantity){
            new_data.quantity = quantity;
        }
        try{
            const rows = await crud.update_row("products", new_data, id);
            if(rows === 0){
                console.log("[API -> PRODUCTS -> UPDATE] QUERY OK.");
                res.json(stdres.ok);
            }else{
                console.log("[API -> PRODUCTS -> UPDATE] FATAL ERROR.");
                res.json(stdres.fatal_error);
            }
        }catch(error){
            console.log("[API -> PRODUCTS -> UPDATE] FATAL ERROR.");
            console.log(error);
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[API -> PRODUCTS -> UPDATE] FATAL ERROR. NO BODY FOUND.");
        res.json(stdres.fatal_error);
    }
});

router.post('/products/delete/', async (req, res) => {
    if(req.body){
        const {
            id
        } = req.body;
        try{
            const rows = await crud.delete_row("products", id);
            if(rows === 0){
                console.log("[API -> PRODUCTS -> DELETE] QUERY OK.");
                res.json(stdres.ok);
            }else{
                console.log("[API -> PRODUCTS -> DELETE] FATAL ERROR.");
                res.json(stdres.fatal_error);
            }
        }catch(error){
            console.log("[API -> PRODUCTS -> DELETE] FATAL ERROR.");
            console.log(error);
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[API -> PRODUCTS -> DELETE] FATAL ERROR. NO BODY FOUND.");
    }
});

module.exports = router;