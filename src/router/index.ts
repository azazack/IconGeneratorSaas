import { createWebHistory,createRouter }from "vue-router";
import Login from "../pages/login.vue"
import App from "../pages/index.vue";
import { authGuard } from "@auth0/auth0-vue";

import Callback from "../pages/callback.vue";
const routes = [
    {
        path: "/login",
        name: "Login",
        component:Login ,
    },
    {
        path: "/app",
        name: "App",
        component:App ,
        beforeEnter:authGuard
    },
    {
        path: "/callback",
        name: "Callback",
        component:Callback ,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

// router.beforeEach(async (to,from,next) => {
//     await isAuth()
// })
export default router;
