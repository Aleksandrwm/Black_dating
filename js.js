let b = document.querySelector('.push');
function f1() {
    if (b.checked) {
        alert('Nice!');
    }
    else {
        alert('Please make a choice!');
    }
}
document.querySelector('.join').onclick = f1;