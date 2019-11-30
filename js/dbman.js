

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

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
        else {
            //TODO: get created entity's id
            result.id = JSON.parse(req.responseText).studentId;
        }
    });

    return result;
}

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

function CreateCourse(subject_id, code, type, lecturer_id, classroom) {
    
    let url = API_URL('courses');

    let json = JSON.stringify({
        subjectId: subject_id,
        code:code,
        type:type,
        teacherId: lecturer_id,
        classRoom:classroom
    });

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
        else {
            //TODO: get created entity's id
        }
    });

    return result;
}

function CreateExam(subject_id, date, classroom) {

    let url = API_URL('exams');

    let json = JSON.stringify({
        subjectId:subject_id,
        date:FormatDateToDB(date),
        classRoom:classroom
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

function UpdateCourse(course_id, code, type, lecturer_id, classroom) {
            
    let url = API_URL_P('course', course_id);

    let json = JSON.stringify({
        type:type,
        teacherId:lecturer_id,
        classRoom:classroom
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function UpdateExam(exam_id, subject_id, date, classroom) {
            
    let url = API_URL_P('exams', exam_id);

    let json = JSON.stringify({
        subjectId:subject_id,
        date:FormatDateToDB(date),
        classRoom:classroom
    });

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        /*if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }*/
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

function DeleteLecturer(lecturer_id) {

    let url = API_URL_P('teachers', lecturer_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
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

function DeleteCourse(course_id) {

    let url = API_URL_P('courses', course_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function DeleteExam(exam_id) {

    let url = API_URL_P('exams', exam_id);

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

function GetLecturers() {

    let url = API_URL('teachers');

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
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

function GetCourses() {
    //TODO (returns an array of objects)
}

function GetExams() {
    
    let url = API_URL('exams');

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

function GetLecturer(lecturer_id) {

    let url = API_URL_P('teachers', lecturer_id);

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
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

function GetCourse(course_id) {
    //TODO (returns an object)
}

function GetExam(exam_id) {

    let url = API_URL_P('exams', exam_id);

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

function GetExamsFirstPage() {
    let url = API_URL('examsList');
    return GetFirstPage(url, 'examId');
}

function GetExamsPrevPage(firstDocId) {
    let url = API_URL('examsList');
    return GetPrevPage(url, firstDocId, 'examId');
}

function GetExamsNextPage(lastDocId) {
    let url = API_URL('examsList');
    return GetNextPage(url, lastDocId, 'examId');    
}

        
function Login(username, password) {

    let url = API_URL('login');

    //TODO

}