///*const app = Vue.createApp({});*/
//app.component('homeComponent', {
//    template: '#HomeComponent',
//    data: function () {
//        return {
//            Campo1: "",
//            Campo2: "",
//            Campo3: "",
//            Numeros: [1, 2, 3, 4, 5],
//            Usuario: {
//                Nombre: "Julio",
//                Apellido: "Acevedo"
//            }
//        }
//    },
//    methods: {
//        clickMessage: function () {
//            var _this = this;
//            axios.get('/Test').then(function (response) {
//                _this.Usuario = response.data;
//            });
//        },
//        clickMessage2: function () {
//            alert("Message 2");
//        }
//    },
//    beforeMount() {
//        //    alert("before Mount");
//    },
//    mounted() {
//        //    alert("Ya me veo :D");
//    },
//    created() {
//        //    alert("Creado");
//    },
//    name: 'HomeComponent'
//});
import { Home, perro } from './homeComponent.js';

app.component('usuarioComponent', {
    template: '#UsuarioComponent',
    data: function () {
        return {
        }
    },
    methods: {
        prueba: perro
    },
    name: 'UsuarioComponent'
});

const Usuario = app.component("usuarioComponent");

const routes = [
    { path: '/', component: Home },
    { path: '/Usuario', component: Usuario },
    { path: '/Prueba', component: Home }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

app.use(router);

app.mount('#atmRoot');