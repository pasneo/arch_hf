function CreateSubject(code, name, credit) {

    let url = API_URL('subjects');

    let json = JSON.stringify({
        code:code,
        name:name,
        credit:credit
    });

    return CreateEntity(url, json, 'subjectId');

}

function UpdateSubject(subject_id, code, name, credit) {

    let url = API_URL_P('subjects', subject_id);

    let json = JSON.stringify({
        code:code,
        name:name,
        credit:credit
    });

    return UpdateEntity(url, json);

}

function DeleteSubject(subject_id) {
    let url = API_URL_P('subjects', subject_id);
    return DeleteEntity(url);
}

function GetSubjects() {
    let url = API_URL('subjects');
    return GetEntities(url);
}

function GetSubject(subject_id) {
    let url = API_URL_P('subjects', subject_id);
    return GetEntity(url);
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