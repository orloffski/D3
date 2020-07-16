function setBgBlack(){
    setBackgroundWithDuration("black");
}

function setBgBlackDuration(){
    setBackgroundWithDuration("black", 750);
}

function setBgWhite(){
    setBackgroundWithDuration("white");
}

function setBackgroundWithDuration(color, duration){
    d3.select("body")
        .transition()
        .duration(duration)
        .style("background-color", color);
}