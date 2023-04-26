import { useLogin } from "@/store/loginStore";
import { useRouter } from "next/router"
import { useEffect } from "react"
import NavbarComponent from "./NavbarComponent";
import axios from "axios";

export default function withAuth<P>(Component: any) {
    return (props: P) => {

        const router = useRouter();
        const user = useLogin();

        useEffect(() => {
            async function verifyToken() {
                try {
                    if (!user.getToken) {
                        router.push("/")
                    }

                    const response = await axios.post(
                        "http://localhost:4545/api/v1/auth/verify",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${user.getToken}`
                            }
                        }
                    );

                    console.log(response, "RESPONSE VERIFY")
                } catch (error) {

                }
            }

            verifyToken();
        }, [])

        return (
            <div>
                <NavbarComponent />
                <Component {...props} />
            </div>
        )
    }
}