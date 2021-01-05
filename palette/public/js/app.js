var PALETTE = `
<div>
    <p class="palette-color">{{ color.style_type }}({{color.setColor.r}}, {{color.setColor.g}}, {{color.setColor.b}}, {{color.setColor.a}})</p>
    <div class="palette-area" :style="{background: 'rgba(' + color.setColor.r + ',' + color.setColor.g + ',' + color.setColor.b + ',' + color.setColor.a + ')'}"></div>
</div>
`

Vue.component('palette', {
    props:['color'],
    template: PALETTE
})

var vm = new Vue({
    el: '#app',
    data: {
        setColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 1.0
        },
        style_type: "hex",
        site_title: 'Palette'
    },
    methods: {
        stock: function(event) {
            alert(event+" Stocked.")
        }
    }
});