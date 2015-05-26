/**
 *  @name：utils.js
 *  
 *  @des：所有函数的工具类
 */

/**
 *  相关配置信息
 */
var config = {
    // 是否DEBUG模式
    debug: true,
    
    // 真机ARCHS
    archs_os: "\"armv7 armv7s arm64\""
};
exports.config = config;


// 是否打印输出日志
var _verbose;
function setVerbose(verbose) {
    _verbose = verbose;
}
exports.setVerbose = setVerbose;


// 输出日志
function log(str){
    if(_verbose == true){
        console.log(str);
    }  
};
exports.log = log;
