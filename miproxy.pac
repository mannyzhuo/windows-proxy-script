// 自己用的

var proxy = "PROXY 127.0.0.1:1080;";

var domains = {
  "lithium.com":1,
   "soundofhope.org":1,
  "i.epochtimes.com":1,
  "bit.ly":1,
  "pincong.rocks":1,
  "wenzhao.ca":1,
  "dubox.com":1,
  "2049post.wordpress.com":1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
  
    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return direct;
}
