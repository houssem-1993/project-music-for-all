const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
      type:String,
      required:true
    },
    // postID:{
    //   type:Schema.Types.ObjectId,
    //   ref:"post"
    // },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"user"
      }
    
  
  
  })

const CommentModel = mongoose.model('comment',CommentSchema);

module.exports = CommentModel;
