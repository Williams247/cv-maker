const INITIAL_APP_STATE = JSON.parse(localStorage.getItem("Builder__AppState")) || {
    $init: false,
    $initStateFromLocalStorage: false,
    createdBy: "Ade Thor Miwa",
    summary: "",
    personal: {
        firstName: "",
        lastName: "",
        profession: "",
        city: "",
        stateOrProvince: "",
        zipCode: "",
        phone: "",
        email: ""
    },
    experience: [],
    education: [],
    skills: [],
    others: {}
}

export default INITIAL_APP_STATE;