//Готовим диаграмму
function Diagram (n) {
    var ctx = document.getElementById("canvas_plot");
    var myChart = new Chart (ctx, {
     type: 'line',
     data: {
      labels: [], //Подписи оси x
      datasets: [
       {
        label: 'f(x)', //Метка
        data: [], //Данные
        borderColor: 'blue', //Цвет
        borderWidth: 2, //Толщина линии
        fill: false //Не заполнять под графиком
       }
       //Можно добавить другие графики
      ]
     },
     options: {
      responsive: false, //Вписывать в размер canvas
      scales: {
       xAxes: [{
        display: true
       }],
       yAxes: [{
        display: true
       }]
      }
     }
    });
    //Заполняем данными
    for (var x = 0; x<=50; x+=1) {
     myChart.data.labels.push(''+x.toFixed(2));
     myChart.data.datasets[0].data.push(f(x).toFixed(2));
    }
    //Обновляем
    myChart.update();
  
    function f(x) { //Вычисление нужной функции
        k = 0;
        for(let j = 1; j <= n; j++){
            y1 = (2*(1-Math.pow(-1,j))*Math.cos(j*x))/(Math.pow(j,2)*Math.PI) + ((3-2*Math.PI)*Math.pow(-1,j)-3)*Math.sin(j*x)/(Math.PI*j);
            k += y1; 
           // console.log("n = " + j + "\nx = " + x + "\ny = " + y1)
        }
     return (3-Math.PI)/2 + k;
    }
}

function go(f){
    n = f.input_n.value;
    Diagram(n);
console.log(n);
}

 //Ставим загрузку диаграммы на событие загрузки страницы
 //window.addEventListener("load", Diagram); 
    