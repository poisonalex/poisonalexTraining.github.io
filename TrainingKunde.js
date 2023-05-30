document.getElementById('trainingsplan-button').onclick = function () {
    document.getElementById('feld-training-detail').style.display = 'flex';
}

document.getElementById('zurueck').onclick = function () {
    document.getElementById('feld-training-detail').style.display = 'none';
}

//--------------------------stoppuhr------------------------------------------------------//

const anzeige = document.getElementById("zeitanzeige");

var gestoppteZeit = 0;
var pausiert = true;
var letzterDurchlauf = new Date();

let gespeicherteZeit = document.getElementById('gespeicherte-zeit');

function start() {
    pausiert = false;
}

function pause() {
    pausiert = true;
}

function reset() {
    pausiert = true;
    gestoppteZeit = 0;
    aktualisiereAnzeige();
}

function aktualisiereZeit() {
    if (pausiert === false) {
        gestoppteZeit += new Date() - letzterDurchlauf;
        aktualisiereAnzeige();
    }

    letzterDurchlauf = new Date();
    setTimeout(aktualisiereZeit, 1);
}

function aktualisiereAnzeige() {
    let millisekunden = gestoppteZeit % 1000;
    let sekunden = Math.floor(gestoppteZeit / 1000) % 60;
    let minuten = Math.floor(gestoppteZeit / 60000) % 60;
    let stunden = Math.floor(gestoppteZeit / 3600000);

    stunden = stunden < 10 ? "0" + stunden : stunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    millisekunden = "000" + millisekunden;
    millisekunden = millisekunden.slice(millisekunden.length - 3);

    anzeige.innerHTML = stunden + ":" + minuten + ":" + sekunden;

    document.getElementById('speichern').onclick = function () {
        gespeicherteZeit.innerHTML = stunden + ":" + minuten + ":" + sekunden;
    }
}

aktualisiereZeit();

//--------------------------schieberegler------------------------------------------------------//
const slider = document.querySelector("#schieberegler");
const output = document.querySelector("output");

slider.addEventListener("input", function () {
    output.value = this.value;
});
//--------------------------1 checkbutton------------------------------------------------------//

let checkCounterM = 0;
document.getElementById('montag-check').onclick = function () {
    if (checkCounterM == 0) {
        document.getElementById('montag-check').setAttribute('style', 'background-color:#06A322; border-color:#06A322');
        document.getElementById('montag-check-i').setAttribute('style', 'color:#05D62B')

        checkCounterM = 1;
    } else if (checkCounterM == 1) {
        document.getElementById('montag-check').setAttribute('style', 'background-color:#00688B; border-color:#035671');
        document.getElementById('montag-check-i').setAttribute('style', 'color:#0095C5')

        checkCounterM = 0;
    }
}

//--------------------------2 checkbutton------------------------------------------------------//

let checkCounterD = 0;
document.getElementById('dienstag-check').onclick = function () {
    if (checkCounterD == 0) {
        document.getElementById('dienstag-check').setAttribute('style', 'background-color:#06A322; border-color:#06A322');
        document.getElementById('dienstag-check-i').setAttribute('style', 'color:#05D62B')

        checkCounterD = 1;
    } else if (checkCounterD == 1) {
        document.getElementById('dienstag-check').setAttribute('style', 'background-color:#00688B; border-color:#035671');
        document.getElementById('dienstag-check-i').setAttribute('style', 'color:#0095C5')

        checkCounterD = 0;
    }
}

//--------------------------3 checkbutton------------------------------------------------------//

let checkCounterMi = 0;
document.getElementById('mittwoch-check').onclick = function () {
    if (checkCounterMi == 0) {
        document.getElementById('mittwoch-check').setAttribute('style', 'background-color:#06A322; border-color:#06A322');
        document.getElementById('mittwoch-check-i').setAttribute('style', 'color:#05D62B')

        checkCounterMi = 1;
    } else if (checkCounterMi == 1) {
        document.getElementById('mittwoch-check').setAttribute('style', 'background-color:#00688B; border-color:#035671');
        document.getElementById('mittwoch-check-i').setAttribute('style', 'color:#0095C5')

        checkCounterMi = 0;
    }
}

//--------------------------4 checkbutton------------------------------------------------------//

let checkCounterDo = 0;
document.getElementById('donnerstag-check').onclick = function () {
    if (checkCounterDo == 0) {
        document.getElementById('donnerstag-check').setAttribute('style', 'background-color:#06A322; border-color:#06A322');
        document.getElementById('donnerstag-check-i').setAttribute('style', 'color:#05D62B')

        checkCounterDo = 1;
    } else if (checkCounterDo == 1) {
        document.getElementById('donnerstag-check').setAttribute('style', 'background-color:#00688B; border-color:#035671');
        document.getElementById('donnerstag-check-i').setAttribute('style', 'color:#0095C5')

        checkCounterDo = 0;
    }
}

//--------------------------checkbutton ende---------------------------------------------------//

//--------------------------graph Montag------------------------------------------------------//

const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const myChart = new Chart("myChartmontag", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [30, 35, 40, 40, 42.5, 45, 45, 47.5, 45, 47.5, 47.5, 50],
            borderColor: "#1DB8EA",
            backgroundColor: '#1DB8EA',
            fill: false,
            label: "Bankdrücken",
            pointRadius: 0,
        }, {
            data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 22.5, 22.5, 22.5],
            borderColor: "#4C6F7C",
            backgroundColor: '#4C6F7C',
            fill: false,
            label: "Flys",
            pointRadius: 0,
        }, {
            data: [30, 35, 40, 45, 45, 45, 45, 45, 45, 50, 50, 50],
            borderColor: "#0F6D8B",
            backgroundColor: '#0F6D8B',
            fill: false,
            label: "Schrägbankdrücken",
            pointRadius: 0,
        }, {
            data: [9, 9, 9, 9, 9, 9, 13.5, 13.5, 13.5, 13.5, 13.5, 13.5],
            borderColor: "#B0B8BB",
            backgroundColor: '#B0B8BB',
            fill: false,
            label: "Seitheben",
            pointRadius: 0,
        }, {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: "#53A1BF",
            backgroundColor: '#53A1BF',
            fill: false,
            label: "Dips",
            pointRadius: 0,
        }, {
            data: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            borderColor: "#286A84",
            backgroundColor: '#286A84',
            fill: false,
            label: "Trizepsstrecken",
            pointRadius: 0,
        }]
    },
    options: {
        responsive: false,
        tension: 0.4,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                align: 'start',
                labels: {
                    color: 'black',
                    font: {
                        weight: '',
                    }
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'kg',
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Wochen',
                }
            }
        }
    }
});

document.getElementById('graph-legende0').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
document.getElementById('graph-legende1').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('graph-legende2').style.backgroundColor = myChart.data.datasets[2].backgroundColor;
document.getElementById('graph-legende3').style.backgroundColor = myChart.data.datasets[3].backgroundColor;
document.getElementById('graph-legende4').style.backgroundColor = myChart.data.datasets[4].backgroundColor;
document.getElementById('graph-legende5').style.backgroundColor = myChart.data.datasets[5].backgroundColor;

document.getElementById('graph-legende0').innerText = myChart.data.datasets[0].label;
document.getElementById('graph-legende1').innerText = myChart.data.datasets[1].label;
document.getElementById('graph-legende2').innerText = myChart.data.datasets[2].label;
document.getElementById('graph-legende3').innerText = myChart.data.datasets[3].label;
document.getElementById('graph-legende4').innerText = myChart.data.datasets[4].label;
document.getElementById('graph-legende5').innerText = myChart.data.datasets[5].label;

//--------------------------graph Dienstag------------------------------------------------------//

//--------------------------progressbar mit fortschritt------------------------------------------------------//

const progressBar3 = document.querySelector('.progressbar-protokoll-value');
let finalFortschrittsbalkenValue = 0;
let maxFortschrittsbalkenValue = 12;
const inhalt1 = document.getElementById('fortschrittbalken-textfeld-input1');
const inhalt2 = document.getElementById('fortschrittbalken-textfeld-input2');
const inhalt3 = document.getElementById('fortschrittbalken-textfeld-input3');
const inhalt4 = document.getElementById('fortschrittbalken-textfeld-input4');
const inhalt5 = document.getElementById('fortschrittbalken-textfeld-input5');
const inhalt6 = document.getElementById('fortschrittbalken-textfeld-input6');
const inhalt7 = document.getElementById('fortschrittbalken-textfeld-input7');
const inhalt8 = document.getElementById('fortschrittbalken-textfeld-input8');
const inhalt9 = document.getElementById('fortschrittbalken-textfeld-input9');
const inhalt10 = document.getElementById('fortschrittbalken-textfeld-input10');
const inhalt11 = document.getElementById('fortschrittbalken-textfeld-input11');
const inhalt12 = document.getElementById('fortschrittbalken-textfeld-input12');

inhalt1.addEventListener('change', inahltUpdate1);
inhalt2.addEventListener('change', inahltUpdate2);
inhalt3.addEventListener('change', inahltUpdate3);
inhalt4.addEventListener('change', inahltUpdate4);
inhalt5.addEventListener('change', inahltUpdate5);
inhalt6.addEventListener('change', inahltUpdate6);
inhalt7.addEventListener('change', inahltUpdate7);
inhalt8.addEventListener('change', inahltUpdate8);
inhalt9.addEventListener('change', inahltUpdate9);
inhalt10.addEventListener('change', inahltUpdate10);
inhalt11.addEventListener('change', inahltUpdate11);
inhalt12.addEventListener('change', inahltUpdate12);

function inahltUpdate1() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 1) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate2() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 2) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate3() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 3) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate4() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 4) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate5() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 5) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate6() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 6) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate7() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 7) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate8() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 8) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate9() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 9) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate10() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 10) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate11() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 11) / maxFortschrittsbalkenValue) * 100}%`;
}
function inahltUpdate12() {
    progressBar3.style.width = `${((finalFortschrittsbalkenValue + 12) / maxFortschrittsbalkenValue) * 100}%`;
}

//--------------------------------------------------------------------------------//

document.getElementById('untertitel').ontouchstart = function () {
    document.getElementById('protokoll-beispiel').style.display = 'flex';
}

