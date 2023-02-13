import axios from "axios";
export default async function signup(req: any, res: any) {
    const reqPayload = req.body
    axios({
        url: "http://localhost:4000/api/register",
        method: "POST",
        data: req.body
    }).then(response => {
        res.status(200).json(response.data)
    }).catch(err => {
        console.log(err)
        res.status(401).json(err.response.data)
    })
}