const changeModeUi = () => {
    document.querySelector('.btn-mode-ui').addEventListener('click', () => {
        if (document.querySelector('.container').classList.contains('ligth-mode')) {
            document.querySelector('.container').classList.replace('ligth-mode', 'dark-mode')
            document.querySelector('.btn-mode-ui span').innerHTML = 'Ligth Mode'
            localStorage.setItem('UserModeUi', 'Dark Mode')
            
        } else {
            document.querySelector('.container').classList.replace('dark-mode', 'ligth-mode')
            document.querySelector('.btn-mode-ui span').innerHTML = 'Dark Mode'
            localStorage.setItem('UserModeUi', 'Ligth Mode')
        }
    })
}
const UIModeUserStorage = (uiMode) => {
    if (uiMode == null) {
        localStorage.setItem('UserModeUi', 'Ligth Mode')
    } else {
        if (uiMode === 'Ligth Mode') {
            document.querySelector('.container').classList.replace('dark-mode', 'ligth-mode')
            document.querySelector('.btn-mode-ui span').innerHTML = 'Dark Mode'
            localStorage.setItem('UserModeUi', 'Ligth Mode')
        } else {
            document.querySelector('.container').classList.replace('ligth-mode', 'dark-mode')
            document.querySelector('.btn-mode-ui span').innerHTML = 'Ligth Mode'
            localStorage.setItem('UserModeUi', 'Dark Mode')
        }
    }
}


window.addEventListener('load', () => {
    changeModeUi()
    UIModeUserStorage(localStorage.getItem('UserModeUi'))
})
