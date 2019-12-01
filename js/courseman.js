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

function DeleteCourse(course_id) {

    let url = API_URL_P('courses', course_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function GetCourses() {
    //TODO (returns an array of objects)
}

function GetCourse(course_id) {
    //TODO (returns an object)
}