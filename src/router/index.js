import {createRouter, createWebHistory} from 'vue-router';
import Main from '../pages/index.vue';
import Webclone from '../pages/webclone/index.vue';
import Project from '../pages/project/index.vue';


const router = createRouter({
    history : createWebHistory(),
    linkActiveClass : 'active',
    routes : [
        {
            /* main */
            path : '/', // url
            name : 'Main',
            component : Main
        },
        {
            /* webclone */
            path : '/webclone', // url
            name : 'Webclone',
            component : Webclone
        },
        {
            /* project */
            path : '/project', // url
            name : 'Project',
            component : Project
        },
    ]
})

export default router;