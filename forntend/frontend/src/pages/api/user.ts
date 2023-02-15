import axios from "axios";
export default async function user (req: any, res: any) {
    await axios({
        url: "http://localhost:4000/api/",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+req.body.token
        }
    }).then(response =>
    {
        res.status(200).send(response.data);
    }).catch(err => {
        res.status(401).send(err.response.data);
    })
}

