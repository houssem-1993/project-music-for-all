const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    postID:{
        type:Schema.Types.ObjectId,
        ref:"user"
      },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"user"
      }
})

const LiketModel = mongoose.model('like',LikeSchema);

module.exports = LiketModel;
