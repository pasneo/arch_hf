
function CreateStudent(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    //TODO (create entity and return an object containing {success, errorMessage, createdObjectId(id)})
    return {"success":true, "errorMessage":null, "id":0};
}

function CreateLecturer(firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    //TODO (create entity and return an object containing {success, errorMessage, createdObjectId(id)})
    return {"success":true, "errorMessage":null, "id":0};
}

function CreateSubject(code, name, credit) {
    //TODO (create entity and return an object containing {success, errorMessage, createdObjectId(id)})
    return {"success":true, "errorMessage":null, "id":0};
}

function CreateCourse(subject_id, code, type, lecturer_id, classroom) {
    //TODO (create entity and return an object containing {success, errorMessage, createdObjectId(id)})
    return {"success":true, "errorMessage":null, "id":0};
}

function CreateExam(subject_id, date, classroom) {
    //TODO (create entity and return an object containing {success, errorMessage, createdObjectId(id)})
    return {"success":true, "errorMessage":null, "id":0};
}

function UpdateStudent(student_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    //TODO
    return {"success":true, "errorMessage":null, "id":0};
}

function UpdateLecturer(lecturer_id, firstName, lastName, dateOfBirth, address, city, country, zip, phone, email) {
    //TODO
    return {"success":true, "errorMessage":null, "id":0};
}

function UpdateSubject(subject_id, code, name, credit) {
    //TODO
    return {"success":true, "errorMessage":null, "id":0};
}

function UpdateCourse(course_id, code, type, lecturer_id, classroom) {
    //TODO
    return {"success":true, "errorMessage":null, "id":0};
}

function UpdateExam(exam_id, subject_id, date, classroom) {
    //TODO
    return {"success":true, "errorMessage":null, "id":0};
}

function DeleteStudent(student_id) {
	//TODO
}

function DeleteLecturer(lecturer_id) {
	//TODO
}

function DeleteSubject(subject_id) {
	//TODO
}

function DeleteCourse(course_id) {
	//TODO
}

function DeleteExam(exam_id) {
	//TODO
}

function RemoveStudentFromSubject(student_id, subject_id) {
    //TODO
}

function AddStudentToSubject(student_id, subject_id) {
    //TODO (register student to subject)
}

function RemoveStudentFromExam(student_id, exam_id) {
    //TODO
}

function AddStudentToExam(student_id, exam_id) {
    //TODO (register student to exam)
}

function GradeStudent(student_id, subject_id, grade) {
    //TODO
}

function GetStudents() {
    //TODO (returns an array of objects)

    //Example (to be deleted)
    let json = '{ "students":[\
        {	"studentId": 0,\
            "firstName":"John",\
            "lastName":"Williams",\
            "address":"85 Howling St",\
            "email":"mymail@mail.com"\
        },\
        {	"studentId": 1,\
            "firstName":"Billy",\
            "lastName":"Johnson",\
            "address":"170 Wall St",\
            "email":"billy@mail.com"\
        },\
        {	"studentId": 2,\
            "firstName":"Anna",\
            "lastName":"Olsen",\
            "address":"21 Jump St",\
            "email":"anna@mail.com"\
        }\
    ]}';
    return JSON.parse(json).students;

}

function GetLecturers() {
    //TODO (returns an array of objects)

    let json = '{ "lecturers":[\
        {	"lecturerId": 0,\
            "firstName":"John",\
            "lastName":"Williams",\
            "address":"85 Howling St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"New York",\
            "zip":"New York",\
            "phone":"123-456-7890",\
            "email":"mymail@mail.com"\
        },\
        {	"lecturerId": 1,\
            "firstName":"Billy",\
            "lastName":"Johnson",\
            "address":"170 Wall St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"New York",\
            "zip":"New York",\
            "phone":"123-456-7890",\
            "email":"billy@mail.com"\
        },\
        {	"lecturerId": 2,\
            "firstName":"Anna",\
            "lastName":"Olsen",\
            "address":"21 Jump St",\
            "dateOfBirth":"1992-01-01",\
            "city":"New York",\
            "country":"New York",\
            "zip":"New York",\
            "phone":"123-456-7890",\
            "email":"anna@mail.com"\
        }\
    ]}';
    return JSON.parse(json).lecturers;

}

function GetSubjects() {
    //TODO (returns an array of objects)

    let json = '{ "subjects":[\
        {	"subjectId": 0,\
            "code":"BMEVIAUMA06",\
            "name":"Software Architectures",\
            "credit":4\
        },\
        {	"subjectId": 1,\
            "code":"BMEVIMIMA01",\
            "name":"Software and System Verification",\
            "credit":4\
        }\
    ]}';
    return JSON.parse(json).subjects;

}

function GetCourses() {
    //TODO (returns an array of objects)
}

function GetExams() {
    //TODO (returns an array of objects)

    let json = '{ "exams":[\
        {	"examId": 0,\
            "date":"2019-01-20",\
            "classroom":"IB028",\
            "subjectId":0\
        },\
        {	"examId": 1,\
            "date":"2019-01-21",\
            "classroom":"Q-I",\
            "subjectId":1\
        },\
        {	"examId": 2,\
            "date":"2019-01-22",\
            "classroom":"IB027",\
            "subjectId":0\
        }\
    ]}';
    return JSON.parse(json).exams;

}


function GetStudent(student_id) {
    //TODO (returns an object)

    let students = GetStudents();

    for(i=0; i<students.length; ++i) {
        if (students[i].studentId == student_id) return students[i];
    }

}

function GetLecturer(lecturer_id) {
    //TODO (returns an object)

    let lecturers = GetLecturers();

    for(i=0; i<lecturers.length; ++i) {
        if (lecturers[i].lecturerId == lecturer_id) return lecturers[i];
    }

}

function GetSubject(subject_id) {
    //TODO (returns an object)

    let subjects = GetSubjects();

    for(i=0; i<subjects.length; ++i) {
        if (subjects[i].subjectId == subject_id) return subjects[i];
    }

}

function GetCourse(course_id) {
    //TODO (returns an object)
}

function GetExam(exam_id) {
    //TODO (returns an object)

    let exams = GetExams();

    for(i=0; i<exams.length; ++i) {
        if (exams[i].examId == exam_id) return exams[i];
    }

}