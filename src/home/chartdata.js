const chartdata = {
    title: {
        text: 'Daily Call Volume',
        x: -20 //center
    },
    // subtitle: {
    //     text: 'Source: WorldClimate.com',
    //     x: -20
    // },
    xAxis: {
        categories: ['5:00 am', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00am',
        '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00pm'
        ]
    },
    yAxis: {
        title: {
        text: 'Number of Calls'
        },
        plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
        }]
    },
    // tooltip: {
    //     valueSuffix: '°C'
    // },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Claims',
        data: [7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507, 7507]
    }, {
        name: 'Commercial Lines',
        data: [4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827, 4827]
    }, {
        name: 'Servicing',
        data: [3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217, 3217]
    }, {
        name: 'Sales',
        data: [1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787, 1787]
    },
    {
        name: 'Support Center',
        data: [536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536]
    }]    
}
export default chartdata;