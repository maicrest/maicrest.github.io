const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')

if (navToggle && navMenu) {
    const handleToggle = () => {
        const isOpen = navMenu.classList.toggle('is-open')
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    }

    const handleClose = () => {
        navMenu.classList.remove('is-open')
        navToggle.setAttribute('aria-expanded', 'false')
    }

    navToggle.addEventListener('click', handleToggle)

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', handleClose)
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            handleClose()
        }
    })
}
