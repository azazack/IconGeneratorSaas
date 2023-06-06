import {useAuth0} from "@auth0/auth0-vue";

export default async function isAuth() {
    const { isAuthenticated } = useAuth0();
    await console.log(localStorage)
}
