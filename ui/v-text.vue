<script>
    import { defineComponent, h } from 'vue'
    
    export default defineComponent({
        name: 'v-text',
        props: {
            typeText: {
                type: String,
                required: true,
            },
            modifier: {
                type: String
            }
        },
        render() {
            return h(this.typeText, { class: `text text--${this.modifier}` }, this.$slots)
        }
    })
</script>