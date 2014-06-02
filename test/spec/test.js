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
            	chatBuilder('testing is fun');
            }
            expect(notAnObject).to.throw(Error);
        });
		
		// again, similar to the test for the slideshow, this will not accept empty objects.
		it('should not accept an empty object as its argument', function() {
            var emptyObject = function() {
            	// an empty {} is being passed here so as expected below, the test should throw an Error.
            	chatBuilder({});
            }
            expect(emptyObject).to.throw(Error);
        });
    
    	//based on the agreed format, the Object must contain a name, message and time property. The lack of any of 
        //these means that the Object will be rejected and thus the message will not post.
        it('should contain the following properties', function() {
            var whereTheObjectHasNoUser = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a user property.
            	chatBuilder({message: 'Ima userless message', time: Date.now()});
            }
            expect(whereTheObjectHasNoUser).to.throw(Error);

            var whereTheObjectHasNoMessage = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a message property.
            	chatBuilder({user: 'WHC', time: Date.now()});
            }
            expect(whereTheObjectHasNoMessage).to.throw(Error);

            var whereTheObjectHasNoDate = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a time property.
            	chatBuilder({user: 'WHC', message: 'Ima userless message'});
            }
            expect(whereTheObjectHasNoDate).to.throw(Error);
        });
    });

	describe('acceptable standards for data to POST to the server', function() {
        
        // similar to the test for the slideshow - this will only accept objects as opposed to only accepting arrays.
        it('should only accept an object as its argument', function() {
            var notAnObject = function() {
            	// a 'string' is being passed here so as expected below, the test should throw an Error.
            	chatSender('testing is fun');
            }
            expect(notAnObject).to.throw(Error);
        });
		
		// again, similar to the test for the slideshow, this will not accept empty objects.
		it('should not accept an empty object as its argument', function() {
            var emptyObject = function() {
            	// an empty {} is being passed here so as expected below, the test should throw an Error.
            	chatSender({});
            }
            expect(emptyObject).to.throw(Error);
        });
    
    	//based on the agreed format, the Object must contain a name, message and time property. The lack of any of 
        //these means that the Object will be rejected and thus the message will not post.
        it('should contain the following properties', function() {
            var whereTheObjectHasNoUser = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a user property.
            	chatSender({message: 'Ima userless message', time: Date.now()});
            }
            expect(whereTheObjectHasNoUser).to.throw(Error);

            var whereTheObjectHasNoMessage = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a message property.
            	chatSender({user: 'WHC', time: Date.now()});
            }
            expect(whereTheObjectHasNoMessage).to.throw(Error);

            var whereTheObjectHasNoDate = function() {
            	// the test should throw an Error because the incoming Object does NOT contain a time property.
            	chatSender({user: 'WHC', message: 'Ima userless message'});
            }
            expect(whereTheObjectHasNoDate).to.throw(Error);
        });
    });    
})();