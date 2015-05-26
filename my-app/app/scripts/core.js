/* global define, Modernizr */
'use strict';

define(function() {
	var self = {};
	self.init = function() {
		console.log('core mudule initialised!');
	};
	console.log('Module ready');

	if(Modernizr.canvas) {
		console.log('canvas is present!');
	}

	return self;
});