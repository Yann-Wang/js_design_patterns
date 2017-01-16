const pubsub = require("./pubsub");

var messageLogger = function(topics,data){
	console.log("Logging: " + topics + ": " + data);
};

var subscription = pubsub.subscribe("inbox/newMessage",messageLogger);

pubsub.publish("inbox/newMessage","hello world!");

pubsub.publish("inbox/newMessage",["test","a","b","c"]);

pubsub.publish("inbox/newMessage",{
	sender: "hello@google.com",
	body: "Hey again!"
});

pubsub.publish("inbox/newMessage","Hello! are you still there?");