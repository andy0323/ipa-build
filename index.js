var builder = require('./lib/ipa-build.js');

module.exports = function (xcodeproj_path, ipa_path, build_path ,project_name, app_path) {
	builder.exec(xcodeproj_path, ipa_path, build_path ,project_name, app_path);
}
