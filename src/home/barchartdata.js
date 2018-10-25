const barchartdata = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Calls transfered'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of calls transferred in Thousands'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Calls transfered for: <b>{point.y:.1f} </b>'
    },
    series: [{
        name: 'Transfers',
        data: [
            ['Claims', 11.26],
            ['Commercial Lines', 6.25], // 25% of call volume seperated by each bu %
            ['Sales', 16.89],
            ['Service', 26.27],
            ['Support Center', 1.87]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}
export default barchartdata;