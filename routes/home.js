/**
 * Created by Administrator on 2017/10/28.
 */
const mapping = require('../static');
//首页的处理函数
exports.index = (req,res,next)=>{
    res.render('index',{
        title:'首页',
    //  默认模板
        layout:'indexTemplate'
    })
}
//注册页面的处理函数
exports.register = (req,res,next)=>{
    res.render('register',{
        title:'注册页面',
        layout:'indexTemplate',
        resource:mapping.register
    })
}
//登录页面的处理函数
exports.login = (req,res,next)=>{
    res.render('login',{
        title:'登录页面',
        layout:'indexTemplate',
        resource:mapping.login
    })
}
//注册行为的处理函数
exports.postRegister = (req,res,next)=>{

}
//登录行为的处理函数
exports.postLogin = (req,res,next)=>{

}
//退出行为的处理函数
exports.logout = (req,res,next)=>{

}

