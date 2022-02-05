//add local storage
shownote();                     //function to display notes......

let addbtn = document.getElementById("add");
addbtn.addEventListener("click", function () {
    let txt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        let notesobj = [];
    }
    else {
        let notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    txt.value = "";
    console.log(notesobj);

    //display notes
    shownote();
})

//function to show elements from local storage


function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div id="notes">
        <div class="column">
          <div class="row">
              <div class="noteCard my-2 mx-2 card">
                  <h1>Note ${index + 1}</h1>
                  <p>${element}</p>
                  <button type="submit" id="${index}" onclick="delete_note(this.id)"><strong>Delete note</strong></button>
              </div>
          </div>
         
      </div>
      </div>`;

    });

    let notesln = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesln.innerHTML = html;
    }
    else {
        notesln.innerHTML = `Nothing to show!`;

    }
}

//function to delete note
function delete_note(index)

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownote();
    
//search
let search = document.getElementById("search");
search.addEventListener("input", function () {


    let inputval = search.value.toLowerCase();
    console.log(inputval);
    let note = document.getElementsByClassName("noteCard");
    Array.from(note).forEach(function (element) {

        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }



    })



})