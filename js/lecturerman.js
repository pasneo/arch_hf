function CreateLecturer(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {

    let url = API_URL('teachers');

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dob:FormatDateToDB(dateOfBirth),
        address:{
            address:address,
            city:city,
            country:country,
            zip:zip
        },
        phone:phone,
        email:email
    });

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
        else {
            //TODO: get created entity's id
            result.id = JSON.parse(req.responseText).teacherId;
        }
    });

    return result;
}

function UpdateLecturer(lecturer_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
        
    let url = API_URL_P('teachers', lecturer_id);

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dob:FormatDateToDB(dateOfBirth),
        address:{
            address:address,
            city:city,
            country:country,
            zip:zip
        },
        phone:phone,
        email:email
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: check error
    });

    return result;
}

function DeleteLecturer(lecturer_id) {

    let url = API_URL_P('teachers', lecturer_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function GetLecturers() {

    let url = API_URL('teachers');

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;
}

function GetLecturer(lecturer_id) {

    let url = API_URL_P('teachers', lecturer_id);

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;

}

function GetLecturersFirstPage() {
    let url = API_URL('teachersList');
    return GetFirstPage(url, 'teacherId');
}

function GetLecturersPrevPage(firstDocId) {
    let url = API_URL('teachersList');
    return GetPrevPage(url, firstDocId, 'teacherId');
}

function GetLecturersNextPage(lastDocId) {
    let url = API_URL('teachersList');
    return GetNextPage(url, lastDocId, 'teacherId');
}