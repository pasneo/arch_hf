

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

    return CreateEntity(url, json, 'studentId');

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

    return UpdateEntity(url, json);
}

function DeleteStudent(student_id) {

    let url = API_URL_P('students', student_id);

    let result = {success:true, errorMessage:null, id:null};

    return DeleteEntity(url);
}

function Enroll(url, json) {

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        let resObj = JSON.parse(req.responseText);
        if (resObj.error) {
            result.success = false;
            result.errorMessage = resObj.error;
            alert(result.errorMessage);
        }
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

    return Enroll(url, json);
}

function AddStudentToSubject(student_id, subject_id) {

    let url = API_URL_P2('enroll', student_id, subject_id);

    let json = JSON.stringify({
        subject:true,
        exam:false,
        enroll:true
    });

    return Enroll(url, json);
}

function RemoveStudentFromExam(student_id, exam_id) {

    let url = API_URL_P2('enroll', student_id, exam_id);

    let json = JSON.stringify({
        subject:false,
        exam:true,
        enroll:false
    });

    return Enroll(url, json);

}

function AddStudentToExam(student_id, exam_id) {
    
    let url = API_URL_P2('enroll', student_id, exam_id);

    let json = JSON.stringify({
        subject:false,
        exam:true,
        enroll:true
    });

    return Enroll(url, json);

}

function GradeStudent(student_id, subject_id, grade) {
    
    let url = API_URL_P2('grade', student_id, subject_id);

    let json = JSON.stringify({
        grade:grade
    });
    
    POSTRequest(url, json, false, function(req, res) {
        let resObj = JSON.parse(req.responseText);
        if (resObj.error) {
            result.success = false;
            result.errorMessage = resObj.error;
            alert(result.errorMessage);
        }
    });

    return;
}

function GetStudents() {
    let url = API_URL('students');
    return GetEntities(url);
}

function GetStudent(student_id) {
    let url = API_URL_P('students', student_id);
    return GetEntity(url);
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