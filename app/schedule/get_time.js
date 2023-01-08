'use strict';
const Subscription = require('egg').Subscription

// 定时任务几乎每个项目都会用到，所以一定要学好
class GetTime extends Subscription{
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule(){
        return {
            // interval:'1s',  // 10s间隔
            cron: '*/3 * * * * *',
            type:'all', // 指定所有的 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe () {
        console.log('定时任务', Date.now())
    }

};

module.exports = GetTime;