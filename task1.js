let airports = ["Бориспіль", "Львів", "Одеса", 
                "Жуляни", "Берлін", "Лондон", 
                "Париж", "Лос Анджелес"]
let arrFlights = [];
let html = "";

//функція, що по суті починає відлік хвилин від поточного часу
function minutesFromNow(minutes) {
    return new Date(Date.now() + minutes * 60 * 1000)
}

arrFlights[0] = {
    Nomer: "PA101",
    From: airports[1],
    To: airports[4],
    Duration: 120,
    Start: minutesFromNow(-200)
};

arrFlights[1] = {
    Nomer: "OD777",
    From: airports[2],
    To: airports[5],
    Duration: 180,
    Start: minutesFromNow(-100)
};

arrFlights[2] = {
    Nomer: "ZH234",
    From: airports[3],
    To: airports[6],
    Duration: 150,
    Start: minutesFromNow(45)
};

arrFlights[3] = {
    Nomer: "BR404",
    From: airports[4],
    To: airports[0],
    Duration: 110,
    Start: minutesFromNow(-300)
};

arrFlights[4] = {
    Nomer: "BA001",
    From: airports[5],
    To: airports[7],
    Duration: 660,
    Start: minutesFromNow(-400)
};

arrFlights[5] = {
    Nomer: "AF999",
    From: airports[6],
    To: airports[7],
    Duration: 630,
    Start: minutesFromNow(120)
};

arrFlights[6] = {
    Nomer: "LV112",
    From: airports[1],
    To: airports[2],
    Duration: 60,
    Start: minutesFromNow(-90)
};

arrFlights[7] = {
    Nomer: "LH505",
    From: airports[4],
    To: airports[6],
    Duration: 105,
    Start: minutesFromNow(-50)
};

function formatTime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    if (hours > 0 && mins > 0) {
        return hours + " год " + mins + " хв";
    }
    else if (hours > 0 && mins === 0) {
        return hours + " год";
    }
    else {
        return mins + " хв";
    }
}

// функція, що рахує кількість хвилин до вильоту
function diffMinutes(start) {
    let currentDate = new Date();
    let diff = start.getTime() - currentDate.getTime();
    return Math.ceil(diff / (60 * 1000));
}

function vivod(item, i, array) {
    let diffMin = diffMinutes(item.Start);
    let status = "";

    if (diffMin > 0) {
        html = html + "<tr class='no_takeoff'>";
        status = "Ще не вилітав, до вильоту " + formatTime(diffMin);
    }
    else if ( -diffMin < item.Duration) {
        html = html + "<tr class='air'>";
        status = "В повітрі";
    }
    else {
        html = html + "<tr class='done'>";
        status = "Приземлився"
    }
    html = html + "<td>" + item.Nomer + "</td>";
    html = html + "<td>" + item.From + "</td>";
    html = html + "<td>" + item.To + "</td>";
    html = html + "<td>" + formatTime(item.Duration) + "</td>";
    html = html + "<td>" + status + "</td>";
    html = html + "</tr>";
}

function ras() {
    html = "<table class='board'>";
    html = html + "<tr><th>Номер польоту</th><th>Звідки</th><th>Куди</th><th>Тривалість</th><th>Статус</th></tr>";
    arrFlights.forEach(vivod);
    html = html + "</table>";
    document.getElementById('result').innerHTML = html;
}