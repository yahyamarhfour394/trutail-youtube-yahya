let btn = document.getElementById('btn')
let message = document.getElementById('message')

btn.onclick = function on_message(){
    message.innerHTML = `
    <h2>hello world</h2>
    `
}