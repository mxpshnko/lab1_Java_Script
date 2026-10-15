let cells = document.getElementById("table1").getElementsByTagName("td")

function color() {
    let text = this.textContent;
    
    if (text !== "" && !isNaN(text)) {

        if (text < 0) {
            this.style.backgroundColor = "red";
        }
        else if (text == 0) {
            this.style.backgroundColor = "blue";
        }
        else {
            this.style.backgroundColor = "green";
        }
    }
    else {
        this.style.backgroundColor = "purple";
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = color;
}