import {Button} from "@mui/material";

type dataType = {
    title: string,
    bg?: string,
    color?: string,
    type?: string
}
export default function ButtonComponent (data:dataType) {
    return(
        <>
            <Button fullWidth style={{ background: data.bg|| 'rgb(0, 127, 255)', color: data.color|| 'white', padding: '13px 0', fontWeight: 'bold', borderRadius: '8px' }} type={data.type}>
                { data.title }
            </Button>
        </>
    )
}