app.component('homeComponent', {
    template: '#HomeComponent',
    data: function () {
        return {
            Campo1: "",
            Campo2: "",
            Campo3: "",
            Numeros: [1, 2, 3, 4, 5],
            Usuario: {
                Nombre: "Julio",
                Apellido: "Acevedo"
            }
        }
    },
    methods: {
        clickMessage: function () {
            var _this = this;
            axios.get('/Test').then(function (response) {
                _this.Usuario = response.data;
            });
        },
        clickMessage2: function () {
            alert("Message 2");
        }
    },
    beforeMount() {
        //    alert("before Mount");
    },
    mounted() {
        //    alert("Ya me veo :D");
    },
    created() {
        //    alert("Creado");
    },
    name: 'HomeComponent'
});
const Home = app.component("homeComponent");
const perro = () => {
    alert("Esto es una funcion");
};
export { Home, perro };