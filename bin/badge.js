#!/usr/bin/env node

var shell   = require('shelljs');
var program = require('commander');
var version = require("../package.json").version;

program
  .version(version)
    .usage(" badge -n badge-cli -f [md] -t [npm] ")
    .option('-v, --verbose', '打印详细日志')
    .option('-o, --output [output]', '指定ipa输出路径')
  .parse(process.argv);


// 是否打印
var _verbose = program.verbose;

// 输出ipa路径
var output   = program.output;


// 判断参数输入
var args = program.args;
if (args.length != 1) {
    console.log('请输入搜索文件夹路径');  
};

// 搜索文件路径
var search_folder = args[0];

// 查找pbxproj文件
var pbxproj_search_result = shell.find('-R', search_folder).filter(function(file) { return file.match(/\.pbxproj$/); });

// 搜索项目引用索引
var pbxproj_main_arr = new Array;
for (var i = 0; i < pbxproj_search_result.length; i++) {
  
  var pbxproj = pbxproj_search_result[i];
  var content = shell.cat(pbxproj);

  var reg = /PBXContainerItemProxy/g;
  var search_res = reg.test(content);
  if (search_res == true) {
    pbxproj_main_arr.push(pbxproj);
  }
};

if (pbxproj_main_arr.length != 1) {
  console.log('搜索工程主文件失败..'); return;
};

// 获取工程路径
var pbxproj_splite_arr = pbxproj_main_arr[0].split('/')
// 获取上级文件夹路径
pbxproj_splite_arr.pop();

// 获取工程主路径
var xcodeproj_path = pbxproj_splite_arr.join('/');

// 解析所有参数，设置默认参数
var arr = xcodeproj_path.split('/');

var proj_name  = arr.pop().split('.')[0];
var fold_path  = arr.join('/');
var build_path = fold_path + '/build';
var app_path   = build_path + '/' + proj_name + '.app';
var ipa_path   = build_path + '/' + proj_name + '.ipa';

// 通过用户的输入, 重新设置配置项
if (program.output) {
  ipa_path = output;
}

log('项目名称='       +    proj_name);
log('文件夹路径='     +    fold_path);
log('输出文件路径='    +   build_path);
log('编译包路径='     +    app_path);
log('安装包输出路径='  +    ipa_path);

// 运行程序
require('../index')(xcodeproj_path, ipa_path, build_path, proj_name, app_path);

/**
 *  打印运行日志
 */
function log(str){
    if(_verbose == true){
        console.log(str);
    }
}

/**
 *  模块是否已经定义
 */
function isDefined(x) { return x !== null && x !== undefined; } 

/**
 *  数组扩展
 */
Array.prototype.contain = function(obj) {
    return this.indexOf(obj) !== -1;
}

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

