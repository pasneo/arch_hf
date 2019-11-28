
function getParam(paramName) {
    
    let url = new URL(window.location.href);
    let student_id = url.searchParams.get(paramName);

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
        const decodedToken = jwtDecode(token);
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
    req.setRequestHeader("Authorization", "Bearer " + getAuthorizationToken());
    return req;
}

function GETRequest(url, func) {

    let req = newRequest('GET', url, true);

    req.onreadystatechange = function() {
        func(req, req.response);
    }
    
    req.send();

}

function POSTRequest(url, json) {

    let req = newRequest('POST', url, true);

    req.setRequestHeader("Content-type", "application/json");
    req.send(json);

}

function PUTRequest(url, json) {
    
    let req = newRequest('PUT', url, true);

    req.setRequestHeader("Content-type", "application/json");
    req.send(json);

}

function paramURL(base, param) {
    return base + param;
}