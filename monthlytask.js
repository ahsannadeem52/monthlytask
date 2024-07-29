function submitData(e){
    e.preventDefault(e)
    let name = document.getElementById('fname').value;
    let secondName = document.getElementById('sname').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('no').value;
    let text = document.getElementById('textarea').value;
    // let data = {
    //     firstname :name,
    //     secondname: secondName,
    //     Email : email,
    //     NO : Number,
    //     Text: text
    // }
    let displayData = `First Name:${name}<br>Second Name:${secondName}<br>Email:${email}<br>Number:${number}<br>Message:${text}`;
    // console.log(displayData);
    let userdata = document.querySelector('.userData');
    userdata.innerHTML = displayData;
}