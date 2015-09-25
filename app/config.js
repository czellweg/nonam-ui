var webconfig = {
    baseUrl: 'http://localhost:8080/'
};

function getBaseUrl() {
    var length = webconfig.baseUrl.length;
    if (webconfig.baseUrl.charAt(length - 1) !== '/') {
        webconfig.baseUrl += '/'
    }
    return webconfig.baseUrl;
}