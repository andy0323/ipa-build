/**
 *  @name：utils.js
 *  
 *  @des：所有函数的工具类
 */

process.env.NODE_ENV = 'ipa_config';
process.env.NODE_CONFIG_DIR = '../config'

// 是否打印输出日志
var _verbose;
exports.verbose = _verbose;


/**
 *  打印运行日志
 */
function log(str){
    if(_verbose == true){
        console.log(str);
    }  
};
exports.log = log;


/**
 *  模块是否已经定义
 */
function isDefined(x) { return x !== null && x !== undefined; } 

/**
 *  判断是否存在 项目文件路径 .xcodeproj
 */
function isExist(xcodeproj_path) {

    // 如果路径存在, 并且是字符串
    if (xcodeproj_path && typeof(xcodeproj_path) == 'string') {

        // 正则匹配
        var reg = /\.xcodeproj$/g;        

        if(reg.test(xcodeproj_path)) 
            return true;
        else 
            return false;
    }
}