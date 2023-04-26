import { useLogin } from "@/store/loginStore";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import { GetServerSideProps } from "next";
import { accessTokenKey } from "@/constant/accessTokenKey";

export default function withAuth<P>(Component: any) {
    return (props: P) => {
        const [loading, setLoading] = useState<boolean>(true);
        const router = useRouter();
        const user = useLogin();

        useEffect(() => {
            async function verifyToken() {
                try {
                    if (!user.getToken) {
                        router.push("/login")
                    }

                    await axios.post(
                        "http://localhost:4545/api/v1/auth/verify",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${user.getToken}`
                            }
                        }
                    );


                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                    localStorage.removeItem(accessTokenKey)
                    window.location.href = "/login"
                }
            }

            verifyToken();
        }, [])

        if (loading) {
            return <></>
        }

        return (
            <div>
                <NavbarComponent />
                <Component {...props} />
            </div>
        )
    }
}

