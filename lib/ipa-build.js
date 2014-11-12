var xcodebuild = require('./xcodebuild');
var xcrun = require('./xcrun');

exports.xcodebuild_cmd = xcodebuild.cmd;
exports.xcodebuild_exec = xcodebuild.exec;

exports.xcrun_cmd = xcrun.cmd;
exports.xcrun_exec = xcrun.exec;

/**
 *	打印脚本命令
 */
function cmd(xcodeproj_path, ipa_path, build_path ,project_name, app_path) {
	console.log(xcodebuild.cmd(xcodeproj_path, project_name, build_path));
	console.log(xcrun.cmd(app_path, ipa_path));
}
exports.cmd = cmd;

/**
 *	执行脚本命令
 */
function exec(xcodeproj_path, ipa_path, build_path ,project_name, app_path) {
	xcodebuild.exec(xcodeproj_path, project_name, build_path);
	xcrun.exec(app_path, ipa_path);
}
exports.exec = exec;
