import { fetchLetters } from "./dataAccess.js"
import { PenPals } from "./PenPals.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
