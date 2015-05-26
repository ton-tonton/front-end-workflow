/* global require, Modernizr */
'use strict';

require(['core'], function(core) {
	console.log('core module loaded', core);

	if(Modernizr.canvas) {
		console.log('canvas is present!');
	}
});