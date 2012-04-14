if (typeof ext == 'undefined') var ext = {};
var tweetMarker_apiKey = '';
ext.HototTweetmarker = {

id: 'org.hotot.tweetmarker',
name: 'Hotot TweetMarker',
description: 'Save timeline position using TweetMarker',
version: '0.1',
author: 'Mathieu D. (MatToufoutu)',
url: 'http://hotot.org',
icon: 'icon.png',

prefs: null,
option_dialog: null,

set_marker: function set_marker(tweet, view) {
	hotot_log(tweet);
	hotot_log(view);
},

enable: function enable() {
	ext.register_listener(
		ext.FORM_TWEET_LISTENER,
		ext.HototTweetmarker.set_marker
	);
},

disable: function disable() {
	ext.unregister_listener(
		ext.FORM_TWEET_LISTENER,
	    ext.HototTweetmarker.set_marker
	);
}

}
