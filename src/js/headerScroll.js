const headerScroll = () => {

    // Get element from DOM
    const header = document.querySelector('.site-header')

    // Toggle header class
    const toggleHeaderClass = () => {

        // Hide header when scroll occurs, otherwise show header.
        if (scrollY > 0) {

            header.classList.add('site-header--scroll')

        } else {

            header.classList.remove('site-header--scroll')
        }

    }

    window.addEventListener('scroll', toggleHeaderClass)

}

headerScroll()