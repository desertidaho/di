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
              <h2 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</p>
           </div>
           <img src="./assets/images/${this.poemsArray[i].img}" alt="poem picture" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; width: 100vw; height: 400px; object-fit: cover;">
          </div>
        </button>
      </div>

      <div class="reveal small" id="${this.poemsArray[i].id}" data-reveal style="color: black;">
        <div class="grid-x grid-margin-x align-center" style="margin-top: 40px;">
            <h1 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</h1>
        </div>
        <div class="grid-x grid-margin-x align-center" style="margin-top: 10px;">
          <p style="font-style: italic; margin-top: 1rem; margin-bottom: 3rem; font-size: 0.7rem;">${this.poemsArray[i].poem}</p>
          <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="grid-x grid-margin-x align-center align-spaced" style="font-size: 1.5rem;"">
          <a class="warning button" href="https://www.amazon.com/gp/product/1792611633" target="_blank" aria-labelledby="Amazon" style="color: Black;">Buy on Amazon</a>
          <a class="warning button" href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf" target="_blank"  aria-labelledby="Bitcoin" style="color: black;">Donate Bitcoin</a>
        </div>

        <div class="grid-x grid-margin-x align-center">
          <div class="small-6 cell" style="margin: 2rem 0rem;">
            <a href="https://www.amazon.com/gp/product/1792611633" target="_blank">
              <img src="./assets/images/desertidahobook.png" alt="Desert Idaho book">
            </a>
          </div>
        </div>

      </div>
      `
    }
    return template
  }

}