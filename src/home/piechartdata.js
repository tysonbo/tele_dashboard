const piechartdata = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'CONNECT Daily Screen Pops Volume'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Business Unit',
        colorByPoint: true,
        data: [{
            name: 'Service',
            y: 42.0,
            sliced: true,
            selected: true
        }, {
            name: 'Sales',
            y: 27.0
        }, {
            name: 'Claims',
            y: 18.0
        }, {
            name: 'Commercial Lines',
            y: 10.0
        }, {
            name: 'Support Center',
            y: 2.7
        }, {
            name: 'No Business Unit',
            y: 1.3
        }]
    }]    
}
export default piechartdata;