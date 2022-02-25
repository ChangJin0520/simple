import Login from '@/views/login/login.vue';

export const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    }
];