/** processForm: get data from form and make AJAX call to our API. */

function processForm(evt) {
    evt.preventDefault();
    let data={}
    data['name'] = $('#name').val();
    data['year'] = $('#year').val();
    data['email'] = $('#email').val();
    data['color'] = $('#color').val();
    sendRequest(data)
}

//intermediate function that decides what to do with the returned repsonse
function handleResponse(resp) {
    if(resp.data.errors){
        displayErrors(resp.data.errors)
    }
    else{
        populateResults(resp.data)
    }
        
}


$("#lucky-form").on("submit", processForm);

//sends axios post request to server api
function sendRequest(data){
    axios.post('/api/get-lucky-num', data).then(function(response){
        handleResponse(response)
    }).catch(function(err){
        console.log(err)
    })

}
//displays errors returned from the api next to their according inputs
function displayErrors(errors){
    for(let [key, value] of Object.entries(errors)){
        $(`#${key}-err`).text(value)
    }

}
//displays the successful resonse from the api for the user
function populateResults(data){
    console.log(data)
    num = `Your lucky number is ${data.num.num}. ${data.num.fact}`
    year = `Your birth year is ${data.year.year}. ${data.year.fact}`
    $('#lucky-results').html(`${num}</br></br> ${year}`)
}