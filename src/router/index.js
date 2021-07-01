import {createRouter, createWebHashHistory} from "vue-router";
import Places from "@/views/Places";
import Home from "@/views/Home";
import Place from "@/views/Place";
import CommentList from "@/views/CommentList";
import PlaceContainer from "@/views/PlaceContainer";
import NotFound from "@/views/NotFound";
import Login from "@/views/Login";

const routes = [
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/places',
        name: "Places",
        component: Places
    },
    {
        path: '/places/:placeId',
        name: "Place",
        component: PlaceContainer,
        props: true,
        children: [
            {
                path: '',
                name: "PlaceData",
                component: Place
            },
            {
                path: 'comments',
                name: "Comments",
                component: CommentList
            }
        ]
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router