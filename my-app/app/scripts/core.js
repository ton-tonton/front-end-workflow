/* global define */
'use strict';

define(function() {
	var self = {};
	self.init = function() {
		console.log('core mudule initialised!');
	};
	console.log('Module ready');
	return self;
});