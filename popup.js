$.get('http://www.trilliumbrewing.com/?no-cache=' + new Date().getTime(), function(html) {
    var fortPointBeers   = [];
    var fortPointText    = '';
    var fortPointUpdated = new Date(0);
    var fortPointHours   = $(html).find(':contains("fort point")').parent().find('p')[0];


    $(html).find('h3').each(function() {
        if ($(this).text().match(/AVAILABLE AT FORT POINT/i)) {
            fortPointUpdated = new Date($(this).closest('[data-type=page]').data('updated-on'));

            $(this).closest('.sqs-block').next().find('img').each(function() {
                var beerName = $(this).attr('alt');
                var beerImg  = $(this).data('src');
                var beerFormat = [];

                $(this).closest('a').next().find('.summary-metadata-container--below-content .summary-metadata--primary .summary-metadata-item--tags a').each(function() {
                    beerFormat.push($(this).text());
                });
                fortPointBeers.push({name: beerName, imgSrc: beerImg, format: beerFormat});
            });
        }
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
