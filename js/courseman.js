function CreateCourse(subject_id, code, type, lecturer_id, classroom) {
    
    let url = API_URL('courses');

    let json = JSON.stringify({
        subjectId: subject_id,
        code:code,
        type:type,
        teacherId: lecturer_id,
        classRoom:classroom
    });
    
    return CreateEntity(url, json, 'courseId');
}

function UpdateCourse(course_id, code, type, lecturer_id, classroom) {
            
    let url = API_URL_P('course', course_id);

    let json = JSON.stringify({
        type:type,
        teacherId:lecturer_id,
        classRoom:classroom
    });

    return UpdateEntity(url, json);
}

function DeleteCourse(course_id) {
    let url = API_URL_P('courses', course_id);
    return DeleteEntity(url);
}

function GetCourses() {
    let url = API_URL('courses');
    return GetEntities(url);
}

function GetCourse(course_id) {
    let url = API_URL_P('courses', course_id);
    return GetEntity(url);
}