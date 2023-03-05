const modeToggle = () => {

    // Get elements from DOM
    const toggleButton = document.querySelector('.mode-toggle')
    
    // Toggle mode
    const toggleMode = (event) => {

        // Toggle class 'dark'
        document.body.classList.toggle('dark')

        // Toggle icon
        const modeIcon = event.currentTarget.querySelector('span')
    
        if ( modeIcon.textContent === 'light_mode') {
            
            modeIcon.textContent = 'dark_mode'
    
        } else {
    
            modeIcon.textContent = 'light_mode'
    
        }
    }

    // Event
    toggleButton.addEventListener('click', toggleMode)
}

modeToggle()
