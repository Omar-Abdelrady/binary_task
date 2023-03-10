import axios from "axios";
export default async function login(req: any, res: any) {
    const reqPayload = req.body
    axios({
        url: "http://localhost:4000/api/login",
        method: "POST",
        data: req.body
    }).then(response => {
        res.status(200).json(response.data)
    }).catch(err => {
        res.status(403).json(err.response.data)
    })
}