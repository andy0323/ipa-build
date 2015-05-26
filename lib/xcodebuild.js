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
function xcodebuildCmd(option) {
    var cmd = 'xcodebuild';

    // 获取参数
    var isSupportPod   = option.IS_SUPPORT_POD;
    var workspacePath  = option.WORKSPACE_PATH;
    var projectPath    = option.PROJECT_PATH;
    var projectName    = option.PROJECT_NAME;
    var buildPath      = option.BUILD_PATH;

    // 命令行片段
    var cmd_workspace = get_cmd_workspace(workspacePath, projectName);
    var cmd_project   = get_cmd_project(projectPath);
    var cmd_target    = get_cmd_target(projectName);
    var cmd_conf      = get_cmd_configuration();
    var cmd_sdk       = get_cmd_sdk(buildPath);

    // 拼接命令行
    if (isSupportPod) {
        cmd = cmd_append_cmd(cmd, cmd_workspace);
    }else {
        cmd = cmd_append_cmd(cmd, cmd_project);
        cmd = cmd_append_cmd(cmd, cmd_target);
    }
    cmd = cmd_append_cmd(cmd, cmd_conf);
    cmd = cmd_append_cmd(cmd, cmd_sdk);

    return cmd;
}
exports.cmd = xcodebuildCmd;


/**
 *  --project
 */
function get_cmd_project(project_path) {
    var cmd = '-project'; 

    var archs = 'ARCHS=' + archs_os;

    cmd = cmd_append_cmd(cmd, project_path);
    cmd = cmd_append_cmd(cmd, archs);

    return cmd;
}

/**
 *  --target
 */
function get_cmd_target(target_name) {
    var cmd = '-target';
    cmd = cmd_append_cmd(cmd, target_name);

    return cmd;
}

/**
 *  --configuration
 */
function get_cmd_configuration() {
    var cmd = '-configuration';
    cmd = cmd_append_cmd(cmd, 'Debug');

    return cmd;
}

/**
 *  --sdk
 */
function get_cmd_sdk(build_dir_path) {
    var cmd = '-sdk iphoneos build'

    var valid_archs = 'VALID_ARCHS=' + archs_os;

    var conf_build_dir = 'CONFIGURATION_BUILD_DIR=' + build_dir_path;

    cmd = cmd_append_cmd(cmd, valid_archs);
    cmd = cmd_append_cmd(cmd, conf_build_dir);

    return cmd;
}

/**
 *  workspace
 */
function get_cmd_workspace(workspace_path, target_name) {
    var cmd = '-workspace';
    cmd = cmd_append_cmd(cmd, workspace_path);
    cmd = cmd_append_cmd(cmd, '-scheme');
    cmd = cmd_append_cmd(cmd, target_name);

    return cmd
}

/**
 *  命令行拼接
 */
function cmd_append_cmd(cmd, new_cmd) {
    cmd += ' ';
    cmd += new_cmd;

    return cmd;
}
