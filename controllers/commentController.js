const CommentModel = require("../model/commentModel")

const commentController = {
    find:async (req,res) => {
        let found = await CommentModel.find({id:req.params.commentId});
        res.json(found);
    },
    all:async(req,res) => {
        let allComment= await CommentModel.find()
        res.json(allUsers);
    },
    create:async(req,res) =>{
        let newComment = new CommentModel(req.body);
        // newComment.owner = req.body.owner
        // newComment.content = req.body.content

        let savedComment = await newComment.save();

        res.json(savedComment)
    }
}

module.exports = commentController