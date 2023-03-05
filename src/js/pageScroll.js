const pageScroll = () => {

    // Get element from DOM
    const topButton = document.querySelector('.top-button')

    // Show button after hero section
    const showButton = () => {

        if ( scrollY > 750 ) {
            
            topButton.classList.add('top-button--visible')

        } else {

            topButton.classList.remove('top-button--visible')
        }

    }

    // Change button color on footer
    const changeButtonColor = () => {

        if ( scrollY > 3440 ) {

            topButton.classList.add('top-button--footer')
            
        } else {

            topButton.classList.remove('top-button--footer')
        }

    }

    // Events
    window.addEventListener('scroll', showButton)
    window.addEventListener('scroll', changeButtonColor)
}

pageScroll()