function CreateExam(subject_id, date, classroom) {

    let url = API_URL('exams');

    let json = JSON.stringify({
        subjectId:subject_id,
        date:FormatDateToDB(date),
        classRoom:classroom
    });

    return CreateEntity(url, json, 'examId');
}

function UpdateExam(exam_id, subject_id, date, classroom) {
            
    let url = API_URL_P('exams', exam_id);

    let json = JSON.stringify({
        subjectId:subject_id,
        date:FormatDateToDB(date),
        classRoom:classroom
    });
    
    return UpdateEntity(url, json);
}

function DeleteExam(exam_id) {
    let url = API_URL_P('exams', exam_id);
    return DeleteEntity(url);
}

function GetExams() {
    let url = API_URL('exams');
    return GetEntities(url);
}

function GetExam(exam_id) {
    let url = API_URL_P('exams', exam_id);
    return GetEntity(url);
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