export default function toggleScroll() {
    
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth,
        body = document.body,
        hide = () => {
            body.style.overflowY = 'hidden'
            body.style.paddingRight = `${scrollWidth}px`
        },
        show = () => {
            body.style.overflowY = 'auto'
            body.style.paddingRight = 0
        }

    return {
        hide,
        show
    }
}