import Poems from "../../models/poems.js";
import Poems1 from "../../../assets/poems/poems1.js";
import Poems2 from "../../../assets/poems/poems2.js";

const _ps1 = new Poems1()
const _ps2 = new Poems2()

let _state = {
  poems: {}
}

let _subscribers = {
  poems: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class PoemsService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Poems() {
    return _state.poems
  }

  getPoems1() {
    let data = _ps1.poems1()
    _setState('poems', new Poems(data))
  }

  getPoems2() {
    let data = _ps2.poems2()
    _setState('poems', new Poems(data))
  }

}