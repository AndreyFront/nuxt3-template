<script>

    import { defineComponent, h } from 'vue'
    
    export default defineComponent({
        name: 'v-title',
        props: {
            typeTitle: {
                type: String,
                required: true,
            },
            modifiers: {
                type: String
            }
        },
        render() {
            return h(this.typeTitle, { class: `title title--${this.typeTitle} ${this.modifiers}` }, this.$slots)
        }
    })

</script>