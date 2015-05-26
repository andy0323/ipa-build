require('shelljs/global');

var xcodebuild = require('./xcodebuild'),
	xcrun = require('./xcrun');

exports.xcode = xcodebuild;
exports.xcrun = xcrun;


// 测试
function DEBUG(option) {
	var buildCmd = xcodebuild.cmd(option);
	var runCmd   = xcrun.cmd(option);

	console.log('\n');
	console.log(buildCmd);
	
	console.log('\n');
	console.log(runCmd);
}
exports.DEBUG = DEBUG;


// 执行
function start(option) {
	cd(option.DIR_PATH);
	exec('xcodebuild clean');

	var buildCmd = xcodebuild.cmd(option);
	var runCmd   = xcrun.cmd(option);

	exec(buildCmd);
	exec(runCmd);
}
exports.START = start;
