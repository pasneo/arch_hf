

var BASE_API_URL = "https://europe-west1-szoftarch-bme.cloudfunctions.net/api/";

function API_URL(rel) {
    return BASE_API_URL+rel;
}

function API_URL_P(rel, p1) {
    return BASE_API_URL+rel+'/'+p1;
}

function API_URL_P2(rel, p1, p2) {
    return BASE_API_URL+rel+'/'+p1+'&'+p2;
}




function CreateEntity(url, json, idProp) {

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
        else {
            result.id = JSON.parse(req.responseText)[idProp];
        }
    });

    return result;

}

function UpdateEntity(url, json) {
    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: check error
    });

    return result;
}

function DeleteEntity(url) {
    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function GetEntities(url) {
    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;
}

function GetEntity(url) {
    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;
}




function GetPage(url, json, idProp) {

    let result = {data:null, firstDocId:null, lastDocId:null};

    POSTRequest(url, json, false, function(req, res) {
        result.data = JSON.parse(req.responseText);
        if (result.data && result.data.length > 0) {
            result.firstDocId = result.data[0][idProp];
            result.lastDocId = result.data[result.data.length-1][idProp];
        }
    });

    return result;

}

function GetFirstPage(url, idProp) {
    let json = JSON.stringify({
        paginate:"first"
    });
    return GetPage(url, json, idProp);
}

function GetPrevPage(url, firstDocId, idProp) {
    let json = JSON.stringify({
        paginate:"prev",
        firstDocId:firstDocId
    });
    return GetPage(url, json, idProp);
}

function GetNextPage(url, lastDocId, idProp) {
    let json = JSON.stringify({
        paginate:"next",
        lastDocId:lastDocId
    });
    return GetPage(url, json, idProp);
}
        
function Login(username, password) {

    let url = API_URL('login');

    //TODO

}