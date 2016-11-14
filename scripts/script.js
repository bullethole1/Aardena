$(document).ready(function() {
    var availableTags = [
        "Aardena",
        "Cerberus",
        "Emil",
        "Albin",
        "Peter",
        "Johan",
        "Faust",
        "Lyrics",
        "Ep",
        "Members",
        "Spotify",
        "Email"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});