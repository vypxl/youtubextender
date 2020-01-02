function reloadSubs() {
    if (!active()) return
    document.querySelector('[href="/feed/subscriptions"]').click()
}

function keydown({ key }) {
    if (!active()) return
    if (
        key == 'r' &&
        document.querySelector('input#search') !== document.activeElement
    )
        reloadSubs()
}

function active() {
    return window.location.pathname === '/feed/subscriptions'
}

function inject() {
    setInterval(reloadSubs, 300000)
    document.addEventListener('keydown', keydown)
}

inject()
