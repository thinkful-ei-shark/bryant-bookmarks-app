
/*
//form variables to hold html data
//<form id= "main-form ">*/
let  mainForm =   `
                   <input type="submit" id ="new-button" value="new">
                   <input type="submit" id ="filter-button" value="filter">
                   <br>
                   <input type="text" id="bookmark" name="bookmark" value="" placeholder="bookmarks">
                   ` ;
                   //</form>



//<form id="create-bookmark-form">
let createForm =      `
                       <input type="text" id="bookmark-https" name="bookmark" value="" placeholder="add bookmark using https">
                       <br>
                       <input type="text" id="bookmark-title" name="bookmark" value="" placeholder="title">
                       <br>
                       <input type="text" id="bookmark-description" name="bookmark" value="" placeholder="description">
                       <br>
                       <input type="submit" id="create-createbutton" value="create">
                       <input type="submit" id="create-cancelbutton" value="cancel">
                       `;
                       //</form>



function render(page)
{
    $("#form").html(page);
}      


//function to load create bookmark form from main form

// function loadCreateBookmarkScreen()
// {
//    //$("#main-form").remove();
//     //$("form").html("createform");
//     render(createForm);
// }


// //function to load mainform from createform

// function loadMainForm()
// {
//     // $("#create-bookmark-form").remove();
//     // $("form").html("mainForm");

// }




//switching loading screens based on input and buttons clicked


//on main page when click new button
//main-form"
$("#form").on("click","#new-button", function(){
    console.log("create a new bookmark, loads create bookmarkscreen");

    render(createForm);

    // state then render();

    //displays the createbookmarkscreen
    //loadCreateBookmarkScreen();

});

//on the main form when the filter button is clicked
$("#form").on("click","#filter-button",function(){

    console.log("this will load the options to select bookmarks by rating");
    console.log("then it will load that/those particular bookmarks in a new form");

    //runs function to start drop down

});

//checks create button on create bookmark form
$("#form").on("click","#create-createbutton",function(){

    console.log("create bookmark button is cliked");
    console.log("now render the \"create bookmark form\"");

    //loads all the info to the database/list/array

    //then maybe go back to main screen

  

})



//checks the cancel button on the create bookmark form
$("#form").on("click","#create-cancelbutton",function(){

    console.log("create form cancel button was clicked");
    console.log("now go back to main screen");
    $("#form").html(mainForm);

    //load the main form
    //loadMainForm;

});














// $( "#dataTable tbody" ).on( "click", "tr", function() {
//     console.log( $( this ).text() );
//   });
//on main page when click filter button


//when adding a new bookmark
//enter/capture info for
//bookmark url, bookmark title, description, rating

//click create button add to *store*

//click cancel and go back to main screen


//render()

 function watchForm() {
     $('#form').submit(event => {
       event.preventDefault();
     });
   }
  
   $(function() {
    
     render(mainForm);
     watchForm();
  });




 //3 steps

 //execute watch form

 //get data from form elements
 //console log them

 //pass in infrom from form
 //using template
 //then
 //then
 //display results




  //