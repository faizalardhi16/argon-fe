export default function isAuthentication(){
    const userToken = localStorage.getItem("user_token")

    return userToken
}