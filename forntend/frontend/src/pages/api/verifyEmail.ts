

import axios from "axios";
export default async function verifyEmail(req: any, res: any) {
    const reqPayload = req.body
    console.log(reqPayload)
    axios({
        url: "http://localhost:4000/api/verify",
        method: "POST",
        data: req.body
    }).then(response => {
        res.status(200).json(response.data)
    }).catch(err => {
        res.status(401).json(err.response.data)
    })
}