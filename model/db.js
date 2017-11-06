/**
 * Created by Administrator on 2017/10/28.
 */
//连接数据库
const mongoose = require('mongoose');
//引入数据库配置参数文件
const setting = require('../setting');
const  url = require('url');
//调用模块下面的connect方法去连接数据库
mongoose.connect(`mongodb://${setting.host}/$(setting.db)`);
const DBset = {
//    增加通用的方法
    addOne:(obj,req,res,logMsg)=>{
        let newObj =new obj(req.body);
        newObj.save().then(result=>{
            res.end(logMsg);
        }).catch(err=>{
            res.end(err);
        })
    },
//    删除通用的方法
    delOne:(obj,req,res,logMsg)=>{
        let url =url.parse(req.url,true);
        let targetId =url.params.query.id;
        req.remove({_id:targetId}).then(result=>{
            res.end(result);
        }).catch(err=>{
            res.end(err)
        })
    },
//    修改的通用方法
    updateOne:(obj,req,res,logMsg)=>{
        let url = url.parse(req.url,true);
        let targetId =url.params.query.id;
        req.body.update_time =new Date();
        let update = {$set:req.body};
        obj.update({_id:targetId},update).then(result=>{
            res.end(result);
        }).catch(err=>{
            res.end(err)
        })
    },
//    通用的添加方法
    findOne:(obj,req,res,logMsg)=>{
        let url =url.parse(req.url,true);
        let targetId = url.params.query.id;
        obj.findOne({_id:targetId}).then(result=>{
            res.end(result);
        }).catch(err=>{
            res.end(err);
        })
    }
}
module.exports =DBset;