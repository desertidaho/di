export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
        <button class="button" onclick="openReveal('#'${this.poemsArray[i].id})" style="background-color: black;">
          <div class="card" style="border: none; background-color: black; color: white;">
            <div class="card-section" style="background-image: linear-gradient(black 2px, rgb(77, 75, 75)); padding-bottom: 0px;">
              <h2 style="font-style: italic; font-family: fantasy;">${this.poemsArray[i].title}</p>
            </div>
            <img src="./assets/images/${this.poemsArray[i].img}" alt="poem picture" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
          </div>
        </button>








      
      `
    }
    return template
  }

}