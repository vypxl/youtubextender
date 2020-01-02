function createTimeWidget() {
    widget = document.createElement('div')
    widget.id = 'timeWidget'
    widget.style = 'display: inline-block; color: white; font-size: 35px'

    return widget
}

function insertTimeWidget(timeWidget) {
    document.querySelector('#buttons').prepend(timeWidget)
}

function updateTimeWidget(timeWidget) {
    if (timeWidget.parentElement === null) insertTimeWidget(timeWidget)

    const time = new Date().toLocaleTimeString('en-GB')
    if (timeWidget.innerHTML != time) timeWidget.innerHTML = time
}

function inject() {
    timeWidget = createTimeWidget()
    setInterval(() => updateTimeWidget(timeWidget), 100)
}

inject()
