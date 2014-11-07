var shell = require('shelljs');

// 是否DEBUG模式
var debug = true;

// 真机ARCHS
var archs_os = '\"armv7 armv7s arm64\"';

/**
 *	xcodebuild 
 * 
 * 	@param xcodeproj_path 	项目名称
 *  @param project_name 	项目名称
 *  @param build_path 		build输出路径
 */
exports.xcodebuild = function(xcodeproj_path, project_name, build_path){

	var cmd_build = get_xcodebuild_cmd(xcodeproj_path, project_name, build_path);

	shell.exec(cmd_build);
};

/**
 *	xcrun
 * 
 * 	@param app_path		.app文件路径
 *  @param ipa_path 	ipa输出路径
 */
exports.xcrun = function(app_path, ipa_path){

	var cmd_xcrun = get_xcrun_cmd(app_path, ipa_path);

	shell.exec(cmd_xcrun);
};

/**
 *	xcodebuild 命令语句
 */
function get_xcodebuild_cmd(xcodeproj_path, project_name, build_path){

	var cmd = 'xcodebuild';

	var cmd_project = get_xcodebuild_project_cmd(xcodeproj_path);
	var cmd_target  = get_xcodebuild_target_cmd(project_name);
	var cmd_conf    = get_xcodebuild_configuration_cmd();
	var cmd_sdk     = get_xcodebuild_sdk_cmd(build_path);

	cmd = cmd_append_cmd(cmd, cmd_project);
	cmd = cmd_append_cmd(cmd, cmd_target);
	cmd = cmd_append_cmd(cmd, cmd_conf);
	cmd = cmd_append_cmd(cmd, cmd_sdk);

	return cmd;
}

/**
 *	xcrun 命令语句
 */
function get_xcrun_cmd(app_path, ipa_path){

	var cmd = 'xcrun -sdk iphoneos PackageApplication';

	var cmd_v = '-v';
	
	cmd_v = cmd_append_cmd(cmd_v, app_path);

	var cmd_o = '-o';
	cmd_o = cmd_append_cmd(cmd_o, ipa_path);


	cmd = cmd_append_cmd(cmd, cmd_v);
	cmd = cmd_append_cmd(cmd, cmd_o);

	return cmd;
}

/**
 *	1. --project
 */
function get_xcodebuild_project_cmd(project_path){

	var cmd = '-project'; 

	var archs = 'ARCHS=' + archs_os;

	cmd = cmd_append_cmd(cmd, project_path);
	cmd = cmd_append_cmd(cmd, archs);

	return cmd;
}

/**
 *	2. --target
 */
function get_xcodebuild_target_cmd(project_name){

	var cmd = '-target';

	cmd = cmd_append_cmd(cmd, project_name);

	return cmd;
}

/**
 *	3. --configuration
 */
function get_xcodebuild_configuration_cmd(){

	var cmd = '-configuration';

	cmd = cmd_append_cmd(cmd, 'Debug');

	return cmd;
}

/**
 *	4. --sdk
 */
function get_xcodebuild_sdk_cmd(build_dir_path){

	var cmd = '-sdk iphoneos build'

	var valid_archs = 'VALID_ARCHS=' + archs_os;

	var conf_build_dir = 'CONFIGURATION_BUILD_DIR=' + build_dir_path;

	cmd = cmd_append_cmd(cmd, valid_archs);
	cmd = cmd_append_cmd(cmd, conf_build_dir);

	return cmd;
}

/**
 *	命令行拼接
 */
function cmd_append_cmd(cmd, new_cmd) {

	cmd += ' ';

	cmd += new_cmd;

	return cmd;
}

