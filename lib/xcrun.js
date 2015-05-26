require('shelljs/global');

var archs_os = require('./utils').config.archs_os;

/*
    var option = {
        "BUILD_PATH"        : BUILD_PATH,
        "IS_SUPPORT_POD"    : isUsePod,
        "WORKSPACE_PATH"    : workspacePath,
        "PROJECT_PATH"      : projectPath,
        "PROJECT_NAME"      : projectName,
        "APP_PATH"          : appPath,
        "IPA_PATH"          : ipaPath
    };
 */

/**
 *  生成命令行
 */
function get_xcrun_cmd(option) {
    // 获取参数  
    var appPath = option.APP_PATH;
    var ipaPath = option.IPA_PATH;

    var cmd = 'xcrun -sdk iphoneos PackageApplication';

    var cmd_v = '-v';
    cmd_v = cmd_append_cmd(cmd_v, appPath);

    var cmd_o = '-o';
    cmd_o = cmd_append_cmd(cmd_o, ipaPath);


    cmd = cmd_append_cmd(cmd, cmd_v);
    cmd = cmd_append_cmd(cmd, cmd_o);

    return cmd;
}
exports.cmd = get_xcrun_cmd;

/**
 *  命令行拼接
 */
function cmd_append_cmd(cmd, new_cmd) {

    cmd += ' ';

    cmd += new_cmd;

    return cmd;
}