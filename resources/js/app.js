// import './bootstrap';
// import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const iterationPaginated = function (data, index) {
    return (data.current_page - 1) * (data.per_page) + index + 1
}
const iteration = function (data, index) {
    return index + 1;
}
const number_format = function(number) {
    if(number == null || number == '' || number == 0) {
        return 0;
    } else {
        return parseInt(number).toLocaleString();
    }
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const myApp = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy);
            // .mount(el);

        myApp.config.globalProperties.$iterationPaginated = iterationPaginated;
        myApp.config.globalProperties.$iteration = iteration;
        myApp.config.globalProperties.$number_format = number_format;
        myApp.mount(el);
        return myApp;
    },
    progress: {
        color: '#4B5563',
    },
});
