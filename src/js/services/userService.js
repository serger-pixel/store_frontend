import axios from "axios";
import { root } from "../../index.js";
import MainPage from "../components/MainPage.js";
import { useState } from "react";

const URL = "http://localhost:8080/users"

export async function regUser(user) {
    await axios.post(URL + "/reg", user, {
        headers: {
        'Content-Type': 'application/json'}
    }
)
}

export async function takeUser(login, user){
    await axios.get(URL + "/" + login).then(function(response){
            user.setState({
                data: response.data
            })

            root.render(<MainPage/>)
        }
    )
}