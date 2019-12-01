function CreateSubject(code, name, credit) {

    let url = API_URL('subjects');

    let json = JSON.stringify({
        code:code,
        name:name,
        credit:credit
    });

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
        else {
            //TODO: get created entity's id
            result.id = JSON.parse(req.responseText).subjectId;
        }
    });

    return result;


}

function UpdateSubject(subject_id, code, name, credit) {

    let url = API_URL_P('subjects', subject_id);

    let json = JSON.stringify({
        code:code,
        name:name,
        credit:credit
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: check error
    });

    return result;

}

function DeleteSubject(subject_id) {

    let url = API_URL_P('subjects', subject_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function GetSubjects() {
    
    let url = API_URL('subjects');

    let result;

    GETRequest(url, false, function(req, res) {
        //if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        //}
    });

    return result;
}

function GetSubject(subject_id) {

    let url = API_URL_P('subjects', subject_id);

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;

}

function GetSubjectsFirstPage() {
    let url = API_URL('subjectsList');
    return GetFirstPage(url, 'subjectId');
}

function GetSubjectsPrevPage(firstDocId) {
    let url = API_URL('subjectsList');
    return GetPrevPage(url, firstDocId, 'subjectId');
}

function GetSubjectsNextPage(lastDocId) {
    let url = API_URL('subjectsList');
    return GetNextPage(url, lastDocId, 'subjectId');    
}