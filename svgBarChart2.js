var data = [100,200,300]; // can add new values

$("document").ready(function() {
    drawBarChart();
});


function drawBarChart() {
  $('#chart').attr('width',500);
  $('#chart').attr('height',data.length*60);
  
  $.each(data, function(i,value ) {
    var rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute('y',i*60);
    rect.setAttribute('width',data[i]);
    rect.setAttribute('height',50);
    rect.setAttribute('fill','steelblue');
    document.getElementById('chart').appendChild(rect);

    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x',10);
    text.setAttribute('y',(i*60)+35);
    text.setAttribute('font-size',20);
    text.setAttribute('fill','white');
    text.innerHTML=data[i];
    document.getElementById('chart').appendChild(text);
  });

}