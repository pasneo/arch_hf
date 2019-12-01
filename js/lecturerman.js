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

    return CreateEntity(url, json, 'teacherId');
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

    return UpdateEntity(url, json);
}

function DeleteLecturer(lecturer_id) {
    let url = API_URL_P('teachers', lecturer_id);
    return DeleteEntity(url);
}

function GetLecturers() {
    let url = API_URL('teachers');
    return GetEntities(url);
}

function GetLecturer(lecturer_id) {
    let url = API_URL_P('teachers', lecturer_id);
    return GetEntity(url);
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