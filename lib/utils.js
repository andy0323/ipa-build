
var _verbose;

exports.verbose = _verbose;

/**
 *  打印运行日志
 */
exports.log = function(str){
    if(_verbose == true){
        console.log(str);
    }  
};

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