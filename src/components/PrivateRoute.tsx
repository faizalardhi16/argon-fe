import { useLogin } from "@/store/loginStore";
import { useRouter } from "next/router"
import { useEffect } from "react"
import NavbarComponent from "./NavbarComponent";

export default function withAuth<P>(Component: any) {
    return (props: P) => {

        const router = useRouter();
        const user = useLogin();

        useEffect(() => {
            if (user.getToken) {
                router.push("/")
            }
        }, [])

        return (
            <div>
                <NavbarComponent />
                <Component {...props} />
            </div>
        )
    }
}