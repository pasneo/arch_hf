

function API_URL(rel) {
    return '/api/'+rel;
}

function API_URL_P(rel, p1) {
    return '/api/'+rel+'/:'+p1;
}

function API_URL_P2(rel, p1, p2) {
    return '/api/'+rel+'/:'+p1+':'+p2;
}

function CreateStudent(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {

    let url = API_URL('students');

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dateOfBirth:dateOfBirth,
        address:address,
        city:city,
        country:country,
        zip:zip,
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
        }
    });

    return result;
}

function CreateLecturer(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {

    let url = API_URL('lecturers');

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dateOfBirth:dateOfBirth,
        address:address,
        city:city,
        country:country,
        zip:zip,
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
        lecturerId: lecturer_id,
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
        date:date,
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

function UpdateStudent(student_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    
    let url = API_URL_P('student', student_id);

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dateOfBirth:dateOfBirth,
        address:address,
        city:city,
        country:country,
        zip:zip,
        phone:phone,
        email:email
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

function UpdateLecturer(lecturer_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
        
    let url = API_URL_P('lecturer', lecturer_id);

    let json = JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        dateOfBirth:dateOfBirth,
        address:address,
        city:city,
        country:country,
        zip:zip,
        phone:phone,
        email:email
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

function UpdateSubject(subject_id, code, name, credit) {
            
    let url = API_URL_P('subject', subject_id);

    let json = JSON.stringify({
        code:code,
        name:name,
        credit:credit
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

function UpdateCourse(course_id, code, type, lecturer_id, classroom) {
            
    let url = API_URL_P('course', course_id);

    let json = JSON.stringify({
        type:type,
        lecturerId:lecturer_id,
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
            
    let url = API_URL_P('exam', exam_id);

    let json = JSON.stringify({
        subjectId:subject_id,
        date:date,
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

function DeleteStudent(student_id) {

    let url = API_URL_P('student', student_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function DeleteLecturer(lecturer_id) {

    let url = API_URL_P('lecturer', lecturer_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function DeleteSubject(subject_id) {

    let url = API_URL_P('subject', subject_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function DeleteCourse(course_id) {

    let url = API_URL_P('course', course_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function DeleteExam(exam_id) {

    let url = API_URL_P('exam', exam_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function RemoveStudentFromSubject(student_id, subject_id) {
    
    let url = API_URL_P2('enroll', student_id, subject_id);

    let result = {success:true, errorMessage:null, id:null};

    PUTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function AddStudentToSubject(student_id, subject_id) {
    
    let url = API_URL_P2('enroll', student_id, subject_id);

    let result = {success:true, errorMessage:null, id:null};

    POSTRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result.success = false;
            result.errorMessage = "Something went wrong";
        }
    });

    return result;
}

function RemoveStudentFromExam(student_id, exam_id) {
    //TODO
    return {"success":true, "errorMessage":null};
}

function AddStudentToExam(student_id, exam_id) {
    //TODO (register student to exam)
    return {"success":true, "errorMessage":null};
}

function GradeStudent(student_id, subject_id, grade) {
    
    let url = API_URL_P2('grade', student_id, subject_id);

    //TODO
    
    return {"success":true, "errorMessage":null};
}

function GetStudents() {

    //To be deleted {
    let json = '{ "students":[\
        {	"studentId": 0,\
            "firstName":"Henry",\
            "lastName":"Belford",\
            "address":"125 Howling St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"USA",\
            "zip":"1234",\
            "phone":"123-456-7890",\
            "email":"mymail@mail.com",\
            "pic":"example-profile-pic.jpg",\
            "subjectsEnrolledIn":[\
                {	"subjectId": 0,\
                    "code":"BMEVIAUMA06",\
                    "name":"Software Architectures",\
                    "credit":4\
                }\
            ],\
            "examsEnrolledIn":[],\
            "grades":[\
                {\
                    "subjectName":"Software Architectures",\
                    "updated":"2019-01-02",\
                    "grade":3\
                }\
            ]\
        },\
        {	"studentId": 1,\
            "firstName":"Johnny",\
            "lastName":"Depp",\
            "address":"12 Wall St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"USA",\
            "zip":"1234",\
            "phone":"123-456-7890",\
            "email":"mymail@mail.com",\
            "pic":"example-profile-pic.jpg",\
            "subjectsEnrolledIn":[],\
            "examsEnrolledIn":[]\
        }\
    ]}';
    return JSON.parse(json).students;
    //}
    
    let url = API_URL('students');

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;

}

function GetLecturers() {
    
    //To be deleted {
    let json = '{ "lecturers":[\
        {	"lecturerId": 0,\
            "firstName":"John",\
            "lastName":"Williams",\
            "address":"85 Howling St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"USA",\
            "zip":"1234",\
            "phone":"123-456-7890",\
            "email":"mymail@mail.com",\
            "pic":"example-profile-pic.jpg",\
            "courses":[\
                {\
                    "courseId":0,\
                    "type":"Lecture",\
                    "code":"E",\
                    "subjectId":0,\
                    "subjectName":"Software Architectures",\
                    "classRoom":"IB028"\
                }\
            ]\
        },\
        {	"lecturerId": 1,\
            "firstName":"Billy",\
            "lastName":"Johnson",\
            "address":"170 Wall St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"USA",\
            "zip":"1234",\
            "phone":"123-456-7890",\
            "email":"billy@mail.com",\
            "pic":"example-profile-pic.jpg"\
        },\
        {	"lecturerId": 2,\
            "firstName":"Anna",\
            "lastName":"Olsen",\
            "address":"21 Jump St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"USA",\
            "zip":"1234",\
            "phone":"123-456-7890",\
            "email":"anna@mail.com",\
            "pic":"example-profile-pic.jpg"\
        }\
    ]}';
    return JSON.parse(json).lecturers;
    //}
    
    let url = API_URL('lecturers');

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;
}

function GetSubjects() {
    
    //To be deleted {
    let json = '{ "subjects":[\
        {	"subjectId": 0,\
            "code":"BMEVIAUMA06",\
            "name":"Software Architectures",\
            "credit":4,\
            "courses":[\
                {\
                    "courseId":0,\
                    "type":"Lecture",\
                    "code":"E",\
                    "lecturerName":"John Williams",\
                    "classRoom":"IB028"\
                }\
            ],\
            "students":[\
                {\
                    "studentId": 1,\
                    "firstName":"Johnny",\
                    "lastName":"Depp",\
                    "address":"12 Wall St",\
                    "dateOfBirth":"1992-01-01",\
                    "city":"New York",\
                    "country":"USA",\
                    "zip":"1234",\
                    "phone":"123-456-7890",\
                    "email":"mymail@mail.com"\
                }\
            ]\
        },\
        {	"subjectId": 1,\
            "code":"BMEVIMIMA01",\
            "name":"Software and System Verification",\
            "credit":4\
        }\
    ]}';
    return JSON.parse(json).subjects;
    //}
    
    let url = API_URL('subjects');

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;
}

function GetCourses() {
    //TODO (returns an array of objects)
}

function GetExams() {
    
    //To be deleted {
    let json = '{ "exams":[\
        {	"examId": 0,\
            "date":"2019-01-20",\
            "classRoom":"IB028",\
            "subjectName":"Software Architectures",\
            "subjectId":0,\
            "students":[\
                {\
                    "studentId":0,\
                    "firstName":"Billy",\
                    "lastName":"Joel",\
                    "address":"27 New York St",\
                    "email":"joel@mail.com"\
                }\
            ]\
        },\
        {	"examId": 1,\
            "date":"2019-01-21",\
            "classRoom":"Q-I",\
            "subjectName":"Software and System Verification",\
            "subjectId":1\
        },\
        {	"examId": 2,\
            "date":"2019-01-22",\
            "classRoom":"IB027",\
            "subjectName":"Software Architectures",\
            "subjectId":0\
        }\
    ]}';
    return JSON.parse(json).exams;
    //}
    
    let url = API_URL('exams');

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;
}


function GetStudent(student_id) {
    
    //To be deleted {
    let students = GetStudents();

    for(i=0; i<students.length; ++i) {
        if (students[i].studentId == student_id) return students[i];
    }

    return null;
    //}

    let url = API_URL_P('student', student_id);

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;

}

function GetLecturer(lecturer_id) {
    
    //To be deleted {
    let lecturers = GetLecturers();

    for(i=0; i<lecturers.length; ++i) {
        if (lecturers[i].lecturerId == lecturer_id) return lecturers[i];
    }

    return null;
    //}

    let url = API_URL_P('lecturer', lecturer_id);

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;

}

function GetSubject(subject_id) {

    //To be deleted {
    let subjects = GetSubjects();

    for(i=0; i<subjects.length; ++i) {
        if (subjects[i].subjectId == subject_id) return subjects[i];
    }

    return null;
    //}

    let url = API_URL_P('subject', subject_id);

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;

}

function GetCourse(course_id) {
    //TODO (returns an object)
}

function GetExam(exam_id) {
    
    //To be deleted {
    let exams = GetExams();

    for(i=0; i<exams.length; ++i) {
        if (exams[i].examId == exam_id) return exams[i];
    }

    return null;
    //}

    let url = API_URL_P('exam', exam_id);

    let result;

    GETRequest(url, json, false, function(req, res) {
        if (req.status < 200 || req.status > 299) {
            result = JSON.parse(req.responseText);
        }
    });

    return result;

}

        
function Login(username, password) {

    let url = API_URL('login');

    //TODO

}