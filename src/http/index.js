import axios from "axios";

export default axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/cd44ca5e16d3d883749b990c`,
    headers: {
        "Content-type": "application/json"
    }
});

