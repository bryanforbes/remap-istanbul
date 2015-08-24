/* jshint node:true */

var remap = require('../main');

module.exports = function (grunt) {
	grunt.registerMultiTask('remapIstanbul', function () {
		var done = this.async();
		var opts = this.options();

		remap(this.filesSrc, opts).then(function () {
			done();
		});
	});
};
