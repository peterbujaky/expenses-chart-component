fetch("./data.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    let days = data.map(item => item.day);
    let amounts = data.map(item => item.amount);

    const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [{
        label: '# of Votes',
        data: amounts,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



});



