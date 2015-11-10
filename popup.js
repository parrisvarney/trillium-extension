$.get('http://www.trilliumbrewing.com/?no-cache=' + new Date().getTime(), function(html) {
    var fortPointBeers = [];
    var fortPointText = '';

    $(html).find('h3').each(function() {
        if ($(this).text().match(/AVAILABLE AT FORT POINT/i)) {
            $(this).closest('.sqs-block').next().find('img').each(function() {
                var beerName = $(this).attr('alt');
                var beerFormat = [];

                $(this).closest('a').next().find('.summary-metadata-container--below-content .summary-metadata--primary .summary-metadata-item--tags a').each(function() {
                    beerFormat.push($(this).text());
                });
                fortPointBeers.push({name: beerName, format: beerFormat});
            });
        }
    });

    for (var i=0; i<fortPointBeers.length; i++) {
        fortPointText +=
            "<div class='available-beer-div'>"+
            fortPointBeers[i].name+
            "<span class='format-span'>"+
            fortPointBeers[i].format.join(' ')+
            "</span></div>";
    }

    $('#fort-point').html(fortPointText);
});
