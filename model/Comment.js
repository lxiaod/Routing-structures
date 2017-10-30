/**
 * Created by Administrator on 2017/10/30.
 */
//二级回复表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({

})
const Comment = mongoose.model('Comment',CommentSchema);
module.exports = Comment