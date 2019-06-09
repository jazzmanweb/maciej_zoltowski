var HttpsProxyAgent = require('https-proxy-agent');
var config = [{
    target: 'http://localhost:3000',
    context: '/api',
    secure: false
}];

function setupForCorporateProxy(config) {
    var server = process.env.http_proxy || process.env.HTTP_PROXY;
    if (server) {
        var agent = new HttpsProxyAgent(server);
        config.forEach(function(entry) {
            entry.agent = agent;
        });
    }
    return config;
}

module.exports = setupForCorporateProxy(config);
