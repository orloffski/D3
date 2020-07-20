# Примеры манипуляции элементами и их свойствами

### Изменение фона страницы на примете стилизации div class=card: <br/>
![Optional Text](../gifs/background_color.gif)
```javascript
function setBackgroundWithDuration(color, duration){
    d3.select("div[class=card]")
        .transition()
        .duration(duration)
        .style("background-color", color);
}
```
call:
```javascript
setBackgroundWithDuration("black");
...
setBackgroundWithDuration("black", 750);
...
setBackgroundWithDuration("white");
```
***
### Изменение цвета текста на примере всех элементов div class=description: <br/>
![Optional Text](../gifs/text_color.gif)
```javascript
function setTextColor(color, duration){
    d3.selectAll("div[class=description]")
        .transition()
        .duration(duration)
        .style("color", color);
}
```
call
```javascript
setTextColor("red");
...
setTextColor("blue", 750);
...
setTextColor("black");
```
***
### Добавление текста в элемент div: <br/>
![Optional Text](../gifs/text_add.gif)
```javascript
function addTextToElement(text){
    d3.select("div[class=text]")
        .html(text);
}
```
call:
```javascript
addTextToElement(
        "<div class='event'>" + 
        "<div class='content'>" + 
          "<div class='summary'>" + 
             "<a>Elliot Fu</a> added <a>Jenny Hess</a> to the project" + 
          "</div>" + 
        "</div>" + 
      "</div>"
    );
...
addTextToElement("");
```
***
### Создание и удаление элементов разметки: <br/>
![Optional Text](../gifs/create_delete.gif)

create element:
```javascript
function addNewElement(){
    d3.select("div[class=elements]").append("p").html(
        "<div class='event'>" + 
        "<div class='content'>" + 
          "<div class='summary'>" + 
             "<a>Elliot Fu</a> added <a>Jenny Hess</a> to the project" + 
          "</div>" + 
        "</div>" + 
      "</div>"
    );
}
```
delete all elements (variant 1):
```javascript
function deleteAllParentElements(){
    d3.select("div[class=elements]").html("");    // variant 1
}
```
delete all elements (variant 2):
```javascript
function deleteAllParentElements(){
    d3.select("div[class=elements]").selectAll("*").remove();   // variant 2
}
```
