import { deleteLetter, getLetters } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("letter--")) {
        const [,letterId] = click.target.id.split("--")
        deleteLetter(parseInt(letterId))
    }
})

const convertMap = (obj) => {
    return `
    <li class="letterInfo">
    Dear ${obj.recipient},
    <br>${obj.letter}
    <br>Sincerely, ${obj.author}</li>
    <li class="letterTopic">${obj.topic}</li>
    <li><button class="letter__delete"
                id="letter--${obj.id}">
            Delete
        </button>
    </li>`
}

export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul style="list-style-type:none;">
            ${
                letters.map(convertMap).join("")
            }
        </ul>
    `

    return html
}