const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
      type:String,
      required:true
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"user"
    }
  
  
  })

const PostModel = mongoose.model('post',PostSchema);

module.exports = PostModel;
