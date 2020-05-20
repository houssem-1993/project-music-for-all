const likeModel = require('../model/likeModel')

const likeController = {
        all:async(req,res) => {
        let allPosts= await likeModel.find()
        res.json(allUsers);
    },
    create:async(req,res) =>{
        let newLike = new likeModel();
        newLike.owner = req.body.owner
        newLike.postID = req.body.postID
        
        let savedlike = newLike.save();

        res.json(savedlike)
    }
}

module.exports = likeController