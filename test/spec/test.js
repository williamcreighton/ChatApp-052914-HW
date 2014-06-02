/* global describe, it */

// Agreed upon Message Object Format:

// {
//   user: "", 
//   message: "", 
//   time: epoch, 
//   meta: "", <- not a MUST HAVE requirement for message to post.
//   appID: "" <- not a MUST HAVE requirement for message to post.
// }



(function () {
    'use strict';

    describe('acceptable standards for data being pulled from server', function() {
        
        // similar to the test for the slideshow - this will only accept objects as opposed to only accepting arrays.
        it('should only accept an object as its argument', function() {
            var notAnObject = function() {
            	// a 'string' is being passed here so as expected below, the test should throw an Error.
            	myObject('testing is fun');
            }
            expect(notAnObject).to.throw(Error);
        });
		
		// again, similar to the test for the slideshow, this will not accept empty objects.
		it('should not accept an empty object as its argument', function() {
            var notAnObject = function() {
            	// an empty {} is being passed here so as expected below, the test should throw an Error.
            	myObject({});
            }
            expect(myObject).to.throw(Error);
        });
    
    	//based on the agreed format, the Object must contain a name, message and time property. The lack of any of 
        //these means that the Object will be rejected and thus the message will not post.
        it('should contain the following properties', function() {
            var whereTheObjectHasNoUser = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a user property.
            	myObject({message: 'Ima userless message', time: Date.now()});
            }
            expect(whereTheObjectHasNoUser).to.throw(Error);

            var whereTheObjectHasNoMessage = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a message property.
            	myObject({user: 'WHC', time: Date.now()});
            }
            expect(whereTheObjectHasNoMessage).to.throw(Error);

            var whereTheObjectHasNoDate = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a time property.
            	myObject({user: 'WHC', message: 'Ima userless message'});
            }
            expect(whereTheObjectHasNoDate).to.throw(Error);
        });

        it('should prevent gifs from being displayed if they appear in the message property', function() {
        	var whereTheObjectContainsAGif = function() {
        		// the test should throw an Error - the corresponding function needs to be a regex singling out gifs.
        		// this is NOT a final product specification as much as wanting to move the distraction during building
        		//  of application.
            	myObject({user: 'WHC', message: 'http://31.media.tumblr.com/tumblr_ls2b1zTJ7n1qlvie8o1_500.gif', time: Date.now()});
        	}
        	expect(whereTheObjectContainsAGif).to.throw(Error);
        });
    });
})();