import { Letters } from "./Letters.js"
import { Service } from "./Service.js"

export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="serviceForm">
    ${Service()}
    </section>

    <h2>Service Letters</h2>
    <section class="serviceLetters">
        ${Letters()}
    </section>
    `
}

