let express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/MessageController");


router.get("/messages", list);
router.get("/message/:id", show);
router.post("/messages", create);

module.exports =  router;