var builder = require('./lib/ipa-build.js');

module.exports = function (xcodeproj_path, ipa_path, build_path ,project_name, app_path) {

	builder.xcodebuild(xcodeproj_path, project_name, build_path);
	builder.xcrun(app_path, ipa_path);
}


