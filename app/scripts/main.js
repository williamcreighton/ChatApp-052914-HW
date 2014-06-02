'use strict';

// var chatBuilder = function(object){
// 	if (!$.isArray(object)){
// 		throw new Error ('Sorry thats not an Object!');
// 	} else if (object.length <= 0){
// 		throw new Error ('Nope. That Object is empty.');	
// 	}
// };

// function myObject () {

// }; 

$(".messages-container").scrollTop($('.messages-display').height(300));


// declaring the rendered chatData information as a variable with the value of an underscore
// template which will render that data as text in the browser based on where it's being "pointed."
var chatDump = _.template($('.chats').text());

// var chatMessages = ('http://tiny-pizza-server.herokuapp.com/collections/chat-messages');

// Fetch Chat App Data
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chatData){
	chatBuilder(chatData);
});

// Create a function, chatBuilder, which will forEach over the chat data. The result of this 
// will be contained within 
function chatBuilder (data) {
	data.forEach(function(messages){
		if (messages.user && messages.message && messages.time) {
			var renderedMessages = chatDump(messages);
			$('.messages-list').prepend(renderedMessages);
		}
   	})
};