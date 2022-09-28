import Router from "express"
import Post from "./Post.js";
import PostController from "./PostController.js";

const router = new Router()

router.post('/post', PostController.create)

router.get('/post')
router.get('/post/:id')
router.put('/post')
router.delete('/post:id')

export default router;