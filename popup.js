var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.trilliumbrewing.com/wordpress_blog/beers/find-trillium-2/', true);
xhr.onload = function(e) {
    var hoursDiv         = document.getElementById('hours'),
        growlersDiv      = document.getElementById('growlers'),
        bottlesDiv       = document.getElementById('bottles'),
        retailHoursStart = this.responseText.indexOf('Retail Hours'),
        growlersStart    = this.responseText.indexOf('Growler Fills'),
        bottlesStart     = this.responseText.indexOf('Bottles'),
        upNext           = this.responseText.indexOf('Up Next'),
        retailHours,
        growlers,
        bottles;

    retailHours = this.responseText.substring(retailHoursStart, growlersStart).match(/<h3>(.*?)<\/h3>/ig);
    growlers    = this.responseText.substring(growlersStart, bottlesStart).match(/<h3>(.*?)<\/h3>/ig);
    bottles     = this.responseText.substring(bottlesStart, upNext).match(/<h3>(.*?)<\/h3>/ig);

    hoursDiv.innerHTML = '';
    retailHours.forEach(function(r) {
        hoursDiv.innerHTML = hoursDiv.innerHTML + r;
    });

    growlersDiv.innerHTML = '';
    growlers.forEach(function(r) {
        growlersDiv.innerHTML = growlersDiv.innerHTML + r;
    });

    bottlesDiv.innerHTML = '';
    bottles.forEach(function(r) {
        bottlesDiv.innerHTML = bottlesDiv.innerHTML + r;
    });
};

xhr.send();