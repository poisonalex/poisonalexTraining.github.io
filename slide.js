
document.getElementById('kommentar').onclick = function () {
    document.getElementById('kommentar-feld').style.display = 'flex';
    document.getElementById('protokoll-feld').style.display = 'none';
    document.getElementById('kommentar').setAttribute('style', 'border-bottom: #0095C5 solid 0.3em;transition: all 1000ms ease;');
    document.getElementById('protokoll').setAttribute('style', 'border-bottom: #4d4d4d solid 0.3em;transition: all 1000ms ease;');
}

document.getElementById('protokoll').onclick = function () {
    document.getElementById('kommentar-feld').style.display = 'none';
    document.getElementById('protokoll-feld').style.display = 'flex';
    document.getElementById('protokoll').setAttribute('style', 'border-bottom: #0095C5 solid 0.3em;transition: all 1000ms ease;');
    document.getElementById('kommentar').setAttribute('style', 'border-bottom: #4d4d4d solid 0.3em;transition: all 1000ms ease;');
}
