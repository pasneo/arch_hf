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
            result.id = JSON.parse(req.responseText).examId;
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

function DeleteExam(exam_id) {

    let url = API_URL_P('exams', exam_id);

    let result = {success:true, errorMessage:null, id:null};

    DELETERequest(url, false, function(req, res) {
        //TODO: error handling
    });

    return result;
}

function GetExams() {
    
    let url = API_URL('exams');

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;
}

function GetExam(exam_id) {

    let url = API_URL_P('exams', exam_id);

    let result;

    GETRequest(url, false, function(req, res) {
        result = JSON.parse(req.responseText);
    });

    return result;

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