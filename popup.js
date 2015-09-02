
if (localStorage['showUpcoming']*1) {
    document.getElementById("up-next").style.display = "block";
    document.getElementById("up-next-label").style.display = "block";
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.trilliumbrewing.com/wordpress_blog/beers/find-trillium-2/?no-cache=' + new Date().getTime(), true);
xhr.onload = function() {
    var hoursDiv         = document.getElementById('hours'),
        growlersDiv      = document.getElementById('growlers'),
        bottlesDiv       = document.getElementById('bottles'),
        upNextDiv        = document.getElementById('up-next'),
        retailHoursStart = this.responseText.indexOf('Retail Hours'),
        growlersStart    = this.responseText.indexOf('Growler Fills'),
        bottlesStart     = this.responseText.indexOf('Bottles'),
        upNextStart      = this.responseText.indexOf('Up Next'),
        bottleShopsStart = this.responseText.indexOf('BOTTLE SHOPS'),
        retailHours,
        growlers,
        bottles,
        upNext;

    retailHours = this.responseText.substring(retailHoursStart, growlersStart).match(/<h3>(.*?)<\/h3>/ig);
    growlers    = this.responseText.substring(growlersStart, bottlesStart).match(/<h3>(.*?)<\/h3>/ig);
    bottles     = this.responseText.substring(bottlesStart, upNextStart).match(/<h3>(.*?)<\/h3>/ig);
    upNext      = this.responseText.substring(upNextStart, bottleShopsStart).match(/<h3>(.*?)<\/h3>/ig);

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

    if (localStorage['showUpcoming'] *1) {
        upNextDiv.innerHTML = '';
        upNext.forEach(function (r) {
            upNextDiv.innerHTML = upNextDiv.innerHTML + r;
        });
    }
};

xhr.send();