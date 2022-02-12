import { getAuthors, getTopics, getRecipients, sendLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("select[name='serviceAuthor']").value
        const userLetter = document.querySelector("input[name='serviceLetter']").value
        const userTopicChoices = document.querySelectorAll("input[name='serviceTopic']")
        let userTopicChoice
        for (const userTopic of userTopicChoices) {
            if (userTopic.checked) {
                userTopicChoice = userTopic
            }
        }
        const finalTopicChoice = userTopicChoice.value
        const userRecipient = document.querySelector("select[name='serviceRecipient']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthor,
            letter: userLetter,
            topic: finalTopicChoice,
            recipient: userRecipient
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

const authors = getAuthors()
const topics = getTopics()
const recipients = getRecipients()

export const Service = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceAuthor">Author</label>
            <select name="serviceAuthor" class="authors" id="authors">`
            for (const author of authors) {

            html += `<option id="theAuthors" value="${author.name}" /> ${author.name}`
        
            }    
        html += `</select>`
        html += `</div>
        <div class="letters">
            <label class="label" for="serviceLetter">Letter</label>
            <input type="textarea" name="serviceLetter" class="input" />
        </div>`
        html += `<div class="topics">
            <label class="label" for="serviceTopic">Topic</label>`
            for (const topic of topics) {
            html += `<input type="radio" name="serviceTopic" value="${topic.name}" class="input" /> ${topic.name}`
            }
        html += `</div>`
        html += `<div class="field">
            <label class="label" for="serviceRecipient">Recipient</label>
            <select name="serviceRecipient" id="recipients">
            <option>Choose Recipient</option>`
            for (const recipient of recipients) {
                html += `<option value="${recipient.name}">${recipient.name}`
        }
        html += `</select>`
        html += `</div>
        <button class="button" id="submitRequest">Send</button>
    `

    return html
    }