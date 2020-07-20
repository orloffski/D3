function setBackgroundWithDuration(color, duration){
    d3.select("div[class=card]")   // select first element to work
        .transition()
        .duration(duration) // set duration
        .style("background-color", color);  // set background color
}

function setTextColor(color, duration){
    d3.selectAll("div[class=description]")   // select elements to work (all "div[class=description]" elements on page)
        .transition()
        .duration(duration) // set duration
        .style("color", color); // set background color
}

function addTextToElement(text){
    d3.select("div[class=text]")
        .html(text);  // add text
}

function addNewElement(){
    //d3.select("div[class=elements]").append("p").text("New paragraph.");  // Variant 1
    d3.select("div[class=elements]").append("p").html(
        "<div class='event'>" + 
        "<div class='content'>" + 
          "<div class='summary'>" + 
             "<a>Elliot Fu</a> added <a>Jenny Hess</a> to the project" + 
          "</div>" + 
        "</div>" + 
      "</div>"
    )   // Variant 2
}

function deleteAllParentElements(){
    //d3.select("div[class=elements]").html("");    // variant 1
    d3.select("div[class=elements]").selectAll("*").remove();   // variant 2
}

function setBgBlack(){
    setBackgroundWithDuration("black");
}

function setBgBlackDuration(){
    setBackgroundWithDuration("black", 750);
}

function setBgWhite(){
    setBackgroundWithDuration("white");
}

function setRedTextColor(){
    setTextColor("red");
}

function setBlueTextColorWithDuration(){
    setTextColor("blue", 750);
}

function setDefaultTextColor(){
    setTextColor("black");
}

function addText(){
    addTextToElement(
        "<div class='event'>" + 
        "<div class='content'>" + 
          "<div class='summary'>" + 
             "<a>Elliot Fu</a> added <a>Jenny Hess</a> to the project" + 
          "</div>" + 
        "</div>" + 
      "</div>"
    );
}

function clearText(){
    addTextToElement("");
}

$(document).ready(function(){
    $('.ui.accordion').accordion();
 });