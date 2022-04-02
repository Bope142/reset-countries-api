const changePage = (pageNumber) => {
    if (pageNumber === 1) {
        document.querySelector('.page-detail').classList.replace('page-active', 'page-inactive')
        document.querySelector('.page-home').classList.replace('page-inactive', 'page-active')
    } else {
        document.querySelector('.page-home').classList.replace('page-active', 'page-inactive')
        document.querySelector('.page-detail').classList.replace('page-inactive', 'page-active')
    }
}
const backHomePage = () => {
    document.querySelector('.btn-back-home').addEventListener('click', () => {
        changePage(1)
    })
}
const contryEvent = () => {
    const contryParentNode = document.querySelectorAll('.country');
    if (contryParentNode.length !== 0) {
        contryParentNode.forEach((contryLayout, index) => {
            contryLayout.addEventListener('click', () => {
                changePage(2)
            })
        })
    }
}


window.addEventListener('load', () => {
    contryEvent()
    backHomePage()

})
