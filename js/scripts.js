function newItem() {
    ////////////////////////////////////////////////
    // JQ 1.0
    //1. Adding a new item to the list of items: 
    let jqinputValue = $('#input').val();
    console.log(jqinputValue);
    let jqli = $('<li></li>');
    jqli.append(jqinputValue);

    if (jqinputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(jqli);
    }
    ///////////////////////////////////////////////////////////////
    // JQ 2.0
    //2. Crossing out an item from the list of items:

    jqli.on("dblclick", function crossOut() {
        jqli.toggleClass("strike");
    });

    ////////////////////////////////////////////////////////////////
    // JQ 3.0
    //3(i). Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    jqli.append(crossOutButton);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

    function deleteListItem() {
        jqli.addClass("delete")
    }
    crossOutButton.on("click", deleteListItem);

    /////////////////////////////////////////////////////////////////
    // JQ 4.0
    // 4. Reordering the items: 
    $('#list').sortable();

}

