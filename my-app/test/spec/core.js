/*global describe, it */
'use strict';

define(['../../app/scripts/core'], function(core) {
    describe('The core module', function () {
        describe('initialisation', function () {
            it('should expose an init method', function () {
            	expect(core.init).toBeDefined();
            });
        });
    });
});