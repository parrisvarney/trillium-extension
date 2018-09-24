$.get('http://www.trilliumbrewing.com/fort-point-location/?no-cache=' + new Date().getTime(), function(html) {
    var fortPointBeers   = [];
    var fortPointText    = '';
    var fortPointUpdated = new Date(0);
    var fortPointHours   = $(html).find(':contains("fort point")').parent().find('p')[0];


    $(html).find('.summary-item').each(function() {
	var beerName   = $(this).find('a').data('title');
	var beerImg    = $(this).find('img').data('src');
        var beerFormat = [];
	
        $(this).find('.summary-metadata-item--tags').each(function() {
		beerFormat.push($(this).text());
	});

        fortPointBeers.push({name: beerName, imgSrc: beerImg, format: beerFormat});
    });

    for (var i=0; i<fortPointBeers.length; i++) {
        fortPointText +=
            "<div class='available-beer-div'>"+
            "<img src='"+fortPointBeers[i].imgSrc+"'/>"+
            fortPointBeers[i].name+
            "<span class='format-span'>"+
            fortPointBeers[i].format.join(' ')+
            "</span></div>";
    }

    $('#fort-point').html(fortPointText);
    $('#last-updated').html(fortPointUpdated.toLocaleString());
    $('#fort-point-hours').html(fortPointHours);
});

$('#site-link').find('span').on('click', function() {
    window.open('http://www.trilliumbrewing.com/#trillium-brewing-beer-list-section','_blank');
});
