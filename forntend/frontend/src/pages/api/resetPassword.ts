

import axios from "axios";
export default async function resetPassword(req: any, res: any) {
    console.log();
    axios({
        url: "http://localhost:4000/api/user/update-password",
        method: "POST",
        data: req.body,
        headers: req.headers
    }).then(response => {
        res.status(200).json(response.data)
    }).catch(err => {
        res.status(401).json(err.response.data)
    })
}