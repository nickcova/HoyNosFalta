const switches = document.querySelectorAll('.switch');

for (let i=0; i<switches.length; i++){
    switches[i].addEventListener('change', (event) => {
    
        let card = event.target.closest("div.column > div.card");
        let cardImage = event.target.closest("div.column > div.card").querySelector(".card-image > figure");
    
        if (event.target.checked){
            card.classList.add('has-text-light');
            card.classList.add('has-background-danger');
            cardImage.classList.add('bounce');
        } else {
            card.classList.remove('has-text-light');
            card.classList.remove('has-background-danger');
            cardImage.classList.remove('bounce');
        }
        
    });
}