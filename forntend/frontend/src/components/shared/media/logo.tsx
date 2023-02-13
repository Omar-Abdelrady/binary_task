import Image from "next/image";
import Logo from "./../../../../public/assets/login/media/icons/binery-logo.png";
export default function LogoComponent() {
    return (
        <>
            <Image width={45} src={Logo} alt={'Binery'} />
        </>
    )
}