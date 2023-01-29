fetch("./data.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    let days = data.map(item => item.day);
    let amounts = data.map(item => item.amount);
    let maxValue = Math.max(...amounts);
    let maxIndex = amounts.indexOf(maxValue);
    console.log(maxIndex);

    const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [{
        label: amounts,
        data: amounts,
        backgroundColor: color=> {
            let colors = color.index === maxIndex ? "#76B5BC" :  "#EC755D";
            return colors;
        },
        borderRadius: 3,
        borderWidth: 0,
        hoverBackgroundColor: color => {
            let hoverColor = color.index === maxIndex ? "#B4E0E5" : "#FF9B86";
            return hoverColor;
        }
      }]
    },
    options: {
        layout: {
            padding: {
                top: 0,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        onHover: {
            mode: 'nearest',
            intersect: true,
            cursor: 'pointer',
        },
        tooltips: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            titleFontFamily: "'Open Sans Bold', sans-serif",
            titleFontSize: 18,
            titleFontColor: '#000',
            bodyFontFamily: "'Open Sans'",
            bodyFontSize: 14,
            bodyFontColor: '#000',
            displayColors: false,
        },
      scales: {

        y: {
            display: false,
          beginAtZero: true,
          max: maxValue,
          grid: {
            display: false,
          }
        },
        x: {
            display: false,
            grid: {
                display: false,
            }
        }
      }
    }
  });

  chart.data.datasets[0].backgroundColor[2] = "#ff0000";
  chart.update();

});



