// 计时器中间件，值保存在Session当中
module.exports = options => {
    return async (ctx,next)=>{
        if(ctx.session.counter){
            ctx.session.counter++
        }else{
            ctx.session.counter=1
        }
        await next();
    }
};