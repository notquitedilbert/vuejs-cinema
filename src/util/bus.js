function checkFilter (cat, title, checked) {
    if (checked) {
        this[cat].push(title)
    } else {
        let index = this[cat].indexOf(title)
        if (index > -1) {
            this[cat].splice(index, 1)
        }
    }
}

function setDay(day){this.day=day}


export {checkFilter, setDay}