new Vue({
    el: ".container",
    data:{
        titulo: "Titulo 1",
        mensaje: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisl blandit, consequat nibh sit amet, gravida justo.",
        cont: 0,
        imagen:""
    },
    methods:{
        capa1: function () {
            this.titulo="Titulo 1"
            this.mensaje="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisl blandit, consequat nibh sit amet, gravida justo."
        },

        capa2: function () {
            this.titulo="Titulo 2"
            this.mensaje="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus sodales lorem vitae efficitur"
        },

        capa3: function () {
            this.titulo="Titulo 3"
            this.mensaje="Sed dictum ut enim eu ultrices. Phasellus eu mi nisl. "
        },

        contAumento: function () {
            this.cont++
            console.log(this.cont)
            if (this.cont>=3) {
                this.cont=0
            }
        },

        contDisminuir: function () {
            this.cont--
            console.log(this.cont)
            if (this.cont<0) {
                this.cont=0
            }
        }
    }
});