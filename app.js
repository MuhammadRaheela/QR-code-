// const radio = document.getElementsByClassName("gender")
// console.log(radio);

// function submit() {
//     var check = false;
//     for (var item of radio) {

//         if (item.checked) {
//             check = true
//             break
//         }

//     }
//     if (check) {
//         console.log("yes selected the button");

//     }
//     else {
//         console.log("please selected the button");

//     }
// }

// function submit (){
//     try{
        
//       console.log("test");
//       console.log("test2");
//       console.log("test");
      
//     }
//     catch (e){
//         console.log(e);
//         // aler("noooooo")
//     }
//     finally{
//         console.log("complete")

//     }
    
// }





const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});


