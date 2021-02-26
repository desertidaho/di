export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
      <div class="cell">
        <button class="button" onclick="openReveal('#${this.poemsArray[i].id}')" style="background-color: black;">
          <div class="card" style="border: none; background-color: black; color: white;">
            <div class="card-section" style="background-image: linear-gradient(black 1px, rgb(38, 38, 38)); padding-bottom: 0px;">
              <h2 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</h2>
           </div>
           <img src="./assets/images/${this.poemsArray[i].img}" alt="poem picture" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; width: 100vw; height: 35vh; object-fit: cover;">
          </div>
        </button>
      </div>

      <div class="reveal full" id="${this.poemsArray[i].id}" data-reveal style="color: black;">
        <div class="grid-x grid-margin-x align-center" style="margin-top: 3rem;">
          <h2 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</h2>
        </div>
        <div class="grid-x grid-margin-x align-center" style="margin-top: 10px;">
          <p style="font-style: italic; margin-top: 1rem; margin-bottom: 3rem; font-size: 0.75rem;">${this.poemsArray[i].poem}</p>
          <button class="close-button" data-close aria-label="Close modal" type="button" style="color: black;">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="grid-x grid-margin-x align-center" style="margin-top: 0rem; margin-bottom: 2rem;">
          <audio controls preload="auto">
            <source src="./assets/audio/${this.poemsArray[i].audio}" type="audio/wav">
          </audio>
        </div>
        <div class="grid-x grid-margin-x align-center" style="font-size: 1.5rem; margin-bottom: 3rem;">
          <a class="warning button" href="https://www.amazon.com/gp/product/1792611633" target="_blank" aria-labelledby="Amazon" style="color: Black;">Buy on Amazon</a>
          <a class="warning button" href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf" target="_blank"  aria-labelledby="Bitcoin" style="color: black; margin-left: 3rem;">Donate Bitcoin</a>
        </div>
      </div>
      `
    }
    return template
  }

}