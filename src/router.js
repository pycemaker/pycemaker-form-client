import {createWebHistory, createRouter} from 'vue-router';

const routes = [{
    path: "/",
    alias: "/cadastrar",
    name:"cadastrar",
    component: () => import("./components/AddUser")
},
{
    path:"/dashboard",
    name:"listUser",
    component: () => import("./components/ListUser")
}];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;