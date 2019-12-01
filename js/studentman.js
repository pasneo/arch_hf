
function Create(url, json, idProp) {

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

function CreateStudent(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {

    let url = API_URL('students');

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
}

function UpdateStudent(student_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    
    let url = API_URL_P('students', student_id);

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

function DeleteStudent(student_id) {

    let url = API_URL_P('students', student_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function RemoveStudentFromSubject(student_id, subject_id) {
    
    let url = API_URL_P2('enroll', student_id, subject_id);

    let json = JSON.stringify({
        subject:true,
        exam:false,
        enroll:false
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function AddStudentToSubject(student_id, subject_id) {

    let url = API_URL_P2('enroll', student_id, subject_id);

    let json = JSON.stringify({
        subject:true,
        exam:false,
        enroll:true
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function RemoveStudentFromExam(student_id, exam_id) {

    let url = API_URL_P2('enroll', student_id, exam_id);

    let json = JSON.stringify({
        subject:false,
        exam:true,
        enroll:false
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: error handling
    });

    return result;

}

function AddStudentToExam(student_id, exam_id) {
    
    let url = API_URL_P2('enroll', student_id, exam_id);

    let json = JSON.stringify({
        subject:false,
        exam:true,
        enroll:true
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        //TODO: error handling
    });

    return result;

}

function GradeStudent(student_id, subject_id, grade) {
    
    let url = API_URL_P2('grade', student_id, subject_id);

    let json = JSON.stringify({
        grade:grade
    });
    
    POSTRequest(url, json, false, function(req, res) {
        //TODO: error handling
    });

    return;
}

function GetStudents() {

    let url = API_URL('students');

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;

}

function GetStudent(student_id) {

    let url = API_URL_P('students', student_id);

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;

}

function GetStudentsFirstPage() {
    let url = API_URL('studentsList');
    return GetFirstPage(url, 'studentId');
}

function GetStudentsPrevPage(firstDocId) {
    let url = API_URL('studentsList');
    return GetPrevPage(url, firstDocId, 'studentId');
}

function GetStudentsNextPage(lastDocId) {
    let url = API_URL('studentsList');
    return GetNextPage(url, lastDocId, 'studentId');
}