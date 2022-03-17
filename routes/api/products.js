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
                console.log("[OK] ROWS FOUND.");
                res.json(JSON.stringify(rows));
            }else{
                console.log("[ERROR] NO ROWS FOUND.");
                res.json(stdres.not_found);
            }
        }catch(error){
            console.log("[ERROR] FATAL ERROR.");
            res.json(stdres.fatal_error);
        }
    }else{
        console.log("[ERROR] NO BODY FOUND.");
        res.json(stdres.fatal_error);
    }
});

module.exports = router;