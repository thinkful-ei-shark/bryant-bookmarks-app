const library = {
    bookmarks: [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sit',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
      } 
    ],
    adding: false,
    error: null,
    filter: 0
  };



function startScreen()
{
    let startscreen =`
    <h1>Bookmarks</h1>
    <form id='myForm'>
    <input type="submit" id="new-button" value="add new bookmark">
    <label for="filter-menu">filter by rating:</label>
     <select name="filter-menu" id="filter-drop-down">
       <option value="one-stars">1</option>
       <option value="two-stars">2</option>
       <option value="three-stars">3</option>
       <option value="four-stars">4</option>
       <option value="five-stars">5</option>
     </select>
     <br>
     <br>
     <input type="text" id="bookmark" name="bookmark" value="" placeholder="bookmarks">
     </form>`;

     return(startscreen);
}

function createScreen()
{

    let createForm =      `
                        <h1>Bookmarks</h1>
                        <form id ="createbookmark">
                       <label for="bookmark-https">enter url using http(s)://</label>
                       <br>
                       <input type="text" id="bookmark-https" name="bookmark" value= "" placeholder="add bookmark using https">
                       <br>
                       <br>
                       <label for="bookmark-title">enter bookmark title</label>
                       <br>
                       <input type="text" id="bookmark-title" name="bookmark" value="" placeholder="title">
                       <br>
                       <br>
                       <label for="bookmark-description">enter a description:</label>
                       <br>
                       <input type="text" id="bookmark-description" name="bookmark" value="" placeholder="description">
                       <br>
                       <br>
                       <label for="bookmark-ration">enter a rating 1-5(optional):</label>
                       <br>
                       <input type="text" id="bookmark-rating" name="bookmark" value="" placeholder="rating">
                       <br>
                       <br>
                       <input type="submit" id="create-createbutton" value="create">
                       <input type="button" id="create-cancelbutton" value="cancel">
                       </form>`;

                       return(createForm);
}


function start()
{

//maybe change 'new-button' to form?
$('main').on('submit','#myForm', function(e) {

    e.preventDefault();
    console.log("loading the add bookmark screen");

   //if library adding is equal to false
   //set library adding to true
   //load the create bookmark screen
    if(library.adding == false)
    {
        adding();//change library.adding to true
        render();//renders the create screen html

        //here get the values from the form
        //then pass the values to the createbookmark function

        createBookmark();
    }

    // else if (library.adding == true)
    // {
    //   notAdding();
    //   render();
    // }


});
}
//event delegation
//.on bond event filter to create bookmark selector
function retrieveValues()
{

  
}

//to do 
// $('#createbookmark').on('submit'{
function createBookmark(values)
{
  $('#createbookmark').submit(function(event){
  // $('#createbookmark').on('submit','#create-createbutton', function(e) {
     event.preventDefault();

     console.log("posting bookmarks to server and appending to library\n");

    //get input from the form

    //and post the data to the server
  var requestOptions = {
  method: 'POST',
  redirect: 'follow'};


fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))

  // send results to library for a local copy
 // .then(result => library.push(result))

  .catch(error => console.log('error', error));
    //save that data to the library


    //set adding to false
     notAdding();
    //render the starup screen
     render();
});
  }




function getBookMarks()
{
    //code to get from server
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'};

fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}




function deleteBookMarks()
{

    //code to deleter from server
  var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'};

fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}

function isStarted() {
    return library.adding;
  }

  function adding()
  {
      library.adding = true; 
  }

  function notAdding()
  {
      library.adding = false;
  }



//the render function renders based on if adding is true or false
  function render() {

    let htmlString = ' ';
  
  

    if (library.adding === false) {
      console.log("this is the startup screen");
      console.log("click add bookmark to create a new bookmark\n");
      
      htmlString = startScreen();
    }

    else if (library.adding === true) {
      console.log("now you can add a bookmark");
      console.log("click create to create a bookmark");
      console.log("or click cancel to return to the startup screen\n");
      htmlString = createScreen();
      //createBookmark();
    }
  
    $('main').html(htmlString);

  }



function main() {
    render();
    start();
    // createBookmark()


    //start();
    
  }
  
  
  
  $(main);









//   //code to post to server
//   var requestOptions = {
//   method: 'POST',
//   redirect: 'follow'
// };

// fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


//   //code to get from server
//   var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   //code to deleter from server
//   var requestOptions = {
//   method: 'DELETE',
//   redirect: 'follow'
// };

// fetch("https://thinkful-list-api.herokuapp.com/joey/bookmarks", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));