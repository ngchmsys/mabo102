const PALETTE = `
<div>
    <p class="palette-color">{{ color.style_type }}({{color.setColor.r}}, {{color.setColor.g}}, {{color.setColor.b}})</p>
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
        style_type: "RGB",
        site_title: 'Palette',
        stockColors: [],
        stock_limit: 9
    },
    methods: {
        stock: function(event) {
            console.dir(event)
            console.log(this.setColor.r, this.setColor.g, this.setColor.b, this.setColor.a)
            if(this.isLimit()) { 
                this.stockColors.shift()
            }
            this.stockColors.push(this.setColor)
            console.log('StockCount: ' + this.stockColors.length)
            console.dir(this.stockColors)
        },
        isLimit: function() {
            return (this.stockColors.length >= this.stock_limit)
        },
        reset: function(event) {
            console.dir(event)
            this.setColor.r = 0
            this.setColor.g = 0
            this.setColor.b = 0
            this.setColor.a = 1.0
            this.stockColors = []
            console.log('StockCount: ' + this.stockColors.length)
        }
    }
});