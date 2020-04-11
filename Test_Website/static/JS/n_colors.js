(function() {
    d3.csv('../static/data/n_colors.csv')
        .then(data => {
            console.log(data)
            console.log(data.forEach(entry => entry.Color))            
            const trace1 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.sodium),
                name: "sodium",
                type: 'bar'
            }
            const trace2 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.calories),
                name: "calories",
                type: 'bar'
            }
            const trace3 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.fat),
                name: "fat",
                type: 'bar'
            }
            const trace4 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.cholesterol),
                name: "cholesterol",
                type: 'bar'
            }
            const trace5 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.carbs),
                name: "carbohydrates",
                type: 'bar'
            }
            const trace6 = {
                x: data.map(entry => entry.Color),
                y: data.map(entry => entry.protein),
                name: "protein",
                type: 'bar'
            }           
            const layout = {
                title: 'Red vs. White: Average Nutrition Values',
                barmode: 'group',
                xaxis: {
                    title: 'Color of Wine',
                  },
                  yaxis: {
                    title: '% Daily Value(PDV)',
                  }
            }
            Plotly.newPlot('n_colors', [trace1, trace2, trace3, trace4, trace5, trace6], layout)
        })
        .catch(err => console.log(err))       
})()