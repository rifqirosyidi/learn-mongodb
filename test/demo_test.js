const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Save Record', function() {
    // Create Test
    it('Save to Database', function(done) {

        var char = new MarioChar({
            name: "Mario"
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });

    }) ;
});