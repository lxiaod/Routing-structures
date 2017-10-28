/**
 * Created by Administrator on 2017/10/28.
 */
//连接数据库
const mongoose = require('mongoose');
//引入数据库配置参数文件
const setting = require('../setting');
//调用模块下面的connect方法去连接数据库
mongoose.connect(`mongodb://${setting.host}/$(setting.db)`);