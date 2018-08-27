let express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/TaskController");


router.get("/tasks", list);
router.get("/task/:id", show);
router.post("/tasks", create);

module.exports =  router;