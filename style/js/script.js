function setBackgroundWithDuration(color, duration){
    d3.select("body")   // select element to work
        .transition()
        .duration(duration) // set duration
        .style("background-color", color);  // set background color
}

function setTextColor(color, duration){
    d3.selectAll("p")   // select elements to work (all "p" elements on page)
        .transition()
        .duration(duration) // set duration
        .style("color", color); // set background color
}

function addTextToElement(text){
    d3.select("div[class=text]")
        .html(text);  // add text
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
    addTextToElement("Hello, world!");
}

function clearText(){
    addTextToElement("");
}