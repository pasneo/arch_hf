
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
            return false;
        }
        else {
            return true;
        }
    }
    return false;
}

function requireAuthentication() {
    if (isAuthenticated()) return true;
    else window.location.href = 'login.html';
    return false;
}

function newRequest(method, url, async) {
    let req = new XMLHttpRequest();
    req.open(method, url, async);
    if (isAuthenticated())
        req.setRequestHeader("Authorization", "Bearer " + getAuthorizationToken());
    return req;
}

function GETRequest(url, async, func) {

    let req = newRequest('GET', url, async);

    req.onreadystatechange = function() {
        func(req, req.response);
    }
    
    req.send();

}

function POSTRequest(url, json, async, func) {

    let req = newRequest('POST', url, async);

    req.setRequestHeader("Content-type", "application/json");
    
    req.onreadystatechange = function() {
        func(req, req.response);
    }

    req.send(json);

}

function PUTRequest(url, json, async, func) {
    
    let req = newRequest('PUT', url, async);

    req.setRequestHeader("Content-type", "application/json");
    
    req.onreadystatechange = function() {
        func(req, req.response);
    }

    req.send(json);

}

function DELETERequest(url, async, func) {
    
    let req = newRequest('DELETE', url, async);
    
    req.onreadystatechange = function() {
        func(req, req.response);
    }

    req.send(json);

}

function paramURL(base, param) {
    return base + param;
}

function ShowAdminControlsIfNeeded() {

    if (isAuthenticated()) {
        let adminControls = document.getElementsByClassName('admin');
        for(i=0; i<adminControls.length; ++i) adminControls[i].style.visibility = 'hidden';
    }
    else {
        let adminControls = document.getElementsByClassName('admin');
        for(i=0; i<adminControls.length; ++i) adminControls[i].style.visibility = 'visible';
    }

}