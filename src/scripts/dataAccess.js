const applicationState = {
    letters: [],
    authors: [
        {
            id: 1,
            name: "Mark Twain"
        },
        {
            id: 2,
            name: "J.D. Salinger"
        }
    ],
    topics: [
        {
            id: 1,
            name: "Friendly"
        },
        {
            id: 2,
            name: "Congratulations"
        },
        {
            id: 3,
            name: "Condolences"
        }
    ],
    recipients: [
        {
            id: 1,
            name: "Mark Twain"
        },
        {
            id: 2,
            name: "J.D. Salinger"
        }
    ]
}

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (serviceLetters) => {
                // Store the external state in application state
                applicationState.letters = serviceLetters
            }
        )
}

const mainContainer = document.querySelector("#container")

export const sendLetter = (userServiceLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceLetter)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letters => ({...letters}))
}

export const getAuthors = () => {
    return applicationState.authors.map(authors => ({...authors}))
}

export const getTopics = () => {
    return applicationState.topics.map(topics => ({...topics}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipients => ({...recipients}))
}