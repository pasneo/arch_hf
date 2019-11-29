
function hasParam(paramName) {
    var re = new RegExp('[?&]'+paramName+'=');
    return re.test(location.search);
}

function getParam(paramName) {
    
    let url = new URL(window.location.href);
    return url.searchParams.get(paramName);

}

function setAuthorizationToken(token) {
    localStorage.FBIdToken = token;
}

function getAuthorizationToken() {
    return localStorage.FBIdToken;
}

function isAuthenticated() {
    const token = getAuthorizationToken();
    if (token) {
        const decodedToken = jwtDecode(token); //TODO: where is jwtDecode defined?
        if (decodedToken.exp * 1000 < Date.now()) {
            window.location.href = '/login';
            return false;
        }
        else {
            return true;
        }
    }
    return false;
}

function newRequest(method, url, async) {
    let req = new XMLHttpRequest();
    req.open(method, url, async);
    if (isAuthenticated())
        req.setRequestHeader("Authorization", "Bearer " + getAuthorizationToken());
    return req;
}

function GETRequest(url, func, async) {

    let req = newRequest('GET', url, async);

    req.onreadystatechange = function() {
        func(req, req.response);
    }
    
    req.send();

}

function POSTRequest(url, json, func, async) {

    let req = newRequest('POST', url, async);

    req.setRequestHeader("Content-type", "application/json");
    
    req.onreadystatechange = function() {
        func(req, req.response);
    }

    req.send(json);

}

function PUTRequest(url, json, func, async) {
    
    let req = newRequest('PUT', url, async);

    req.setRequestHeader("Content-type", "application/json");
    
    req.onreadystatechange = function() {
        func(req, req.response);
    }

    req.send(json);

}

function paramURL(base, param) {
    return base + param;
}