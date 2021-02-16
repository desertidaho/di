export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
        <button class="button" onclick="openReveal('#${this.poemsArray[i].id}')" style="background-color: black;">
        <div class="card" style="border: none; background-color: black; color: white;">
          <div class="card-section" style="background-image: linear-gradient(black 2px, rgb(77, 75, 75)); padding-bottom: 0px;">
            <h2 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</p>
          </div>
          <img src="./assets/images/${this.poemsArray[i].img}" alt="poem picture" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
        </div>
      </button>

      <div class="reveal" id="${this.poemsArray[i].id}" data-reveal style="color: black;">
        <h1 style="font-style: italic; font-family: fantasy; margin-top: 40px;">${this.poemsArray[i].title}</h1>
        <p style="font-style: italic; margin: 1rem 0rem; font-size: 0.8rem;">${this.poemsArray[i].poem}</p>
        <button class="close-button" data-close aria-label="Close modal" type="button">
         <span aria-hidden="true">&times;</span>
        </button>
        <div class="grid-x grid-margin-x align-center">
          <div class="large-6 medium-6 small-6 cell" style="margin: 2rem 0rem;">
            <a href="https://www.amazon.com/gp/product/1792611633" target="_blank">
              <img src="./assets/images/desertidahobook.png" alt="Desert Idaho book">
            </a>
          </div>
        </div>

        <div class="grid-x grid-margin-x align-center align-spaced" style="font-size: 1.5rem;">
          <a href="https://www.amazon.com/gp/product/1792611633" target="_blank">Buy on Amazon</a>
          <a href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf" target="_blank">Donate Bitcoin</a>
        </div>
      </div>
      `
    }
    return template
  }


}