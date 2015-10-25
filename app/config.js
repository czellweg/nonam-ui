var webconfig = {
    baseUrl: 'https://nonam-backend.herokuapp.com/'
};

function getBaseUrl() {
    var length = webconfig.baseUrl.length;
    if (webconfig.baseUrl.charAt(length - 1) !== '/') {
        webconfig.baseUrl += '/'
    }
    return webconfig.baseUrl;
}