

function anc() {

    console.log("a, b, c, m, k")

    let a = parseInt(length.value);
    let b = parseInt(width.value);
    let c = parseInt(height.value);
    let m = parseInt(doorWidth.value);
    let k = parseInt(doorHeight.value);
    
    console.log(a, b, c, m, k)
    let message

    if ((c <= k && b <= m) || (c <= m && a <= k) || (a <= m && b <= k) || (a <= k && b <= m)) { 
        message="Коробка пройдет в дверь."
        document.getElementById("result").innerText = message;
    } 
    else {
        message="Коробка не пройдет в дверь"
        document.getElementById("result").innerText = message;
    }
}
const length = document.getElementById("length");
const width = document.getElementById("width");
const height = document.getElementById("height");
const doorWidth = document.getElementById("doorWidth");
const doorHeight = document.getElementById("doorHeight");
const onclick = document.getElementById("onclick");
onclick.addEventListener('click', anc);


