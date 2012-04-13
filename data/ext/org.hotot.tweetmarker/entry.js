if (typeof ext == 'undefined') var ext = {};
ext.Tweetmarker = {

id: 'org.hotot.tweetmarker',

name: 'Tweetmarker',

description: 'Tweetmarker Support Extention.',

version: '0.01',

author: 'lb1a',

url: 'http://github.com/lb1a/',

on_add_tweets:
function on_add_tweets(tweets, view) {
    // just for debug.
    hotot_log('Test',
        'Update ['+view.name+'], '+ tweets.length +' items');
},

enable:
function enable() {
    ext.register_listener(ext.ADD_TWEETS_LISTENER_AFTER
        , ext.Sample.on_add_tweets);
},

disable:
function disable() {
    ext.unregister_listener(ext.ADD_TWEETS_LISTENER_AFTER
        , ext.Sample.on_add_tweets);
}

}


