var data = [4, 8, 11, 16, 18, 23, 42, 43];

const divHorizontal = d3.select("div[class=horisontal]")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

divHorizontal.selectAll("div")
    .data(data)
    .join("div")
    .style("background", "steelblue")
    .style("padding", "5px") // text padding
    .style("margin", "5px")   // columns margin
    .style("width", d => `${d * 10}px`)   // width = data[i]
    .text(d => d);

$(document).ready(function(){
    $('.ui.accordion').accordion();
});