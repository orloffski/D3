# Примеры диаграмм

### Горизонтальная диаграмма: <br/>
![Optional Text](../png/horizontal_chart.gif)
```javascript
var data = [4, 8, 11, 16, 18, 23, 42, 43];

const divHorizontal = d3.select("div[class=horisontal]")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

divHorizontal.selectAll("div")
    .data(data)
    .join("div")
    .style("background", "steelblue")
    .style("padding", "5px")
    .style("margin", "5px")
    .style("width", d => `${d * 10}px`)
    .text(d => d);
```