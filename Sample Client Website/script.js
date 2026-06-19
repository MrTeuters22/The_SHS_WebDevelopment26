function filterResources() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();

    let cards = document.getElementsByClassName("resource-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText;

        if (text.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}