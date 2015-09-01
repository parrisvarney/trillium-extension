function loadOptions() {
    var showUpcoming = localStorage['showUpcoming'] * 1;

    if (showUpcoming) {
        document.getElementById('show-upcoming-yes').checked = true;
    } else {
        document.getElementById('show-upcoming-no').checked = true;
    }
}

function saveOptions() {
    localStorage['showUpcoming'] = document.querySelector('input[name="show-upcoming"]:checked').value;

    document.getElementById('status').innerHTML = 'Save successful';
    setTimeout(function() {
        document.getElementById('status').innerHTML = '';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);