import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const {author, title, picture, content} = req.body
            const post = await Post.create({author, title, picture, content})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController()