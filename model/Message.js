/**
 * Created by Administrator on 2017/10/30.
 */
//用户的消息表
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({

})
const Message = mongoose.model('Message',MessageSchema);
module.exports = Message
