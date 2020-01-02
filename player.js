function keydown({ altKey, ctrlKey, key }) {
    if (!active) return
    if (altKey && ctrlKey && key == 't') {
        let timeEl = document.querySelector('.ytp-time-current')
        let time = timeEl === null ? null : timeEl.innerHTML.split(':')
        if (time === null) return

        if (time.length == 2)
            window.location =
                window.location.href.replace(/[&v]t=[^&]+/g, '') +
                `&t=${time[0]}m${time[1]}s`
        else if (time.length == 3)
            window.location =
                window.location.href.replace(/[&v]t=[^&]+/g, '') +
                `&t=${time[0]}h${time[1]}m${time[2]}s`
    }
}

function active() {
    return window.location.pathname === '/watch'
}

function inject() {
    document.addEventListener('keydown', keydown)
}

inject()
