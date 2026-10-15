let html = "<table><tr><th>Товар</th><th>Ціна</th></tr>";

function enter(event) {

    if(event.key == "Enter") {
        let tovar = document.getElementById("tovar").value;
        let cina = document.getElementById("cina").value;
    
        if (tovar === "" || cina === "") {
            return;
        }

        html = html = html + "<tr><td>" + tovar + "</td><td>" + cina + "</td></tr>";
        
        document.getElementById("result").innerHTML = html + "</table>";
        document.getElementById("tovar").value = "";
        document.getElementById("cina").value = "";
        document.getElementById("tovar").focus();
    }
}