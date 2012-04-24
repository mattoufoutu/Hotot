if (typeof ext == 'undefined') var ext = {};

ext.HototTweetmarker = {

id: 'org.hotot.tweetmarker',
name: 'Hotot TweetMarker',
description: 'Save timeline position using TweetMarker.',
version: '0.1',
author: 'Mathieu D. (MatToufoutu)',
url: 'http://hotot.org',
icon: 'icon.png',

apiKey: 'HT-4DF734316E7F',
apiURL:   'http://tweetmarker.net/v2/lastread?api_key='
        + ext.HototTweetmarker.apiKey
        + '&username='
		+ globals.myself.screen_name,

generate_oauth_echo_headers:
function generate_oauth_echo_headers() {
	var signed_params = globals.twitterClient.oauth.form_signed_params(
          'https://api.twitter.com/1/account/verify_credentials.json'
        , globals.twitterClient.oauth.access_token
        , 'GET'
        , {}
        , true
	);

	var auth_str = 'OAuth realm="http://api.twitter.com/"'
    + ', oauth_consumer_key="'+signed_params.oauth_consumer_key+'"'
    + ', oauth_signature_method="'+signed_params.oauth_signature_method+'"'
    + ', oauth_token="'+signed_params.oauth_token+'"'
    + ', oauth_timestamp="'+signed_params.oauth_timestamp+'"'
    + ', oauth_nonce="'+ signed_params.oauth_nonce +'"'
    + ', oauth_version="'+signed_params.oauth_version+'"'
    + ', oauth_signature="'
    + encodeURIComponent(signed_params.oauth_signature)+'"';

	return {
		  'X-Verify-Credentials-Authorization': auth_str
		, 'X-Auth-Service-Provider'           : 'https://api.twitter.com/1/account/verify_credentials.json'
	};
},

mark_success:
function mark_success(data) {

},

mark_failure:
function mark_failure(data) {

},

set_marker:
function set_marker(tweet, pagename) {
	var headers = ext.HototTweetmarker.generate_oauth_echo_headers();
	toast.set('tweet', $.parseJSON(tweet)).show();
	toast.set('view', $.parseJSON(pagename)).show();

},

get_marker:
function get_marker(tweet, pagename) {

},

enable:
function enable() {
	ext.register_listener(
		ext.ADD_TWEETS_LISTENER,
		ext.HototTweetmarker.set_marker
	);
},

disable:
function disable() {
	ext.unregister_listener(
		ext.ADD_TWEETS_LISTENER,
	    ext.HototTweetmarker.set_marker
	);
}

};
