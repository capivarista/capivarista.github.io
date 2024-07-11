document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', function () {
        const filter = searchBar.value.toLowerCase();
        const cards = document.getElementById('projectCards').getElementsByClassName('col-md-4');

        Array.from(cards).forEach(function (card) {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            const text = card.querySelector('.card-text').innerText.toLowerCase();
            if (title.includes(filter) || text.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

$(document).ready(function() {
    $('#searchBar').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('#projectCards .card').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
