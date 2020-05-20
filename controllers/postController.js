const PostModel = require("../model/postModel.js")

const postController = {
    find:async (req,res) => {
        let found = await PostModel.find({id:req.params.postId});
        res.json(found);
    },
    all:async(req,res) => {
        let allPosts= await PostModel.find()
        res.json(allUsers);
    },
    create:async(req,res) =>{
        let newPost = new PostModel(req.body);
        // newPost.owner = req.body.owner
        // newPost.content = req.body.content

        let savedPost = await newPost.save();

        res.json(savedPost)
    }
}

module.exports = postController