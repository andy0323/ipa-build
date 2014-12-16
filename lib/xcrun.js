var shell = require('shelljs');
var config = require('./utils').config;

var debug = config.debug;
var archs_os = config.archs_os;

/**
 *  xcrun 命令语句
 */
function get_xcrun_cmd(app_path, ipa_path) {  
    var cmd = 'xcrun -sdk iphoneos PackageApplication';

    var cmd_v = '-v';
    cmd_v = cmd_append_cmd(cmd_v, app_path);

    var cmd_o = '-o';
    cmd_o = cmd_append_cmd(cmd_o, ipa_path);


    cmd = cmd_append_cmd(cmd, cmd_v);
    cmd = cmd_append_cmd(cmd, cmd_o);

    return cmd;
}
exports.cmd = get_xcrun_cmd;

/**
 *  运行xcrun命令
 */
function exec_xcrun_cmd(app_path, ipa_path) {
    shell.exec(get_xcrun_cmd(app_path, ipa_path));
}
exports.exec = exec_xcrun_cmd;

/**
 *  命令行拼接
 */
function cmd_append_cmd(cmd, new_cmd) {

    cmd += ' ';

    cmd += new_cmd;

    return cmd;
}