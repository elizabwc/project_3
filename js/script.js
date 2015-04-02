    var theCount = [];
    var myStates = [];
    $(document).ready(function(){
 
        $.ajax({
		type: "GET",
		url: "breastCancer.xml",
		dataType: "xml",
		success: parseXML});
        
        function parseXML (xml){
           
            $(xml).find('ROW').each(function(){
                //console.log("once for every person");
                var $ROW = $(this); 
                var count = $ROW.attr('count');
                myStates.push($ROW.find('state').text());
                var description = $ROW.find('count').text();
                theCount.push(parseInt($ROW.find('count').text())); //makes data integer 

	     
        });
            
	buildChart();
    };
    
    function buildChart(xml){
        console.log(myStates)
        var chart1 = new Highcharts.Chart({
            chart: {
            renderTo: 'bar-chart',
            type: 'column'
            },
            title: {
                text: 'Breast Cancer in Numbers'
            },
            xAxis: {
                categories: myStates
            },
            yAxis: {
                title: {
                    text: 'Number of Cases'
                }
            },
            series: [{
                name: 'States',
                data: theCount
            }],
        
        })
        
        var chart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'pie-chart',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
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
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        })
    };
    }); 

