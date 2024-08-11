let url = "https://ulvis.net/API/write/get";
let user = document.getElementById("url");
let result = document.getElementById("result");
let resultbox = document.getElementById("user-result");
let userbtn = document.getElementById("gen");
let type = "json";
// Sending Request
async function getlink() {
    let user_url = user.value;
    if (user_url === "") {
        alert("Please Enter Valid URL !");
        
    } else {
        userbtn.disabled = true;
        userbtn.style.opacity = .8;
        userbtn.textContent = "Please Wait..";
        let value = `${url}?url=${user_url}&type=${type}`;
        let req = await fetch(value);
        let res = await req.json();
        console.log(res);
        let resdata = res.data.url;
        result.value = resdata;
        setTimeout(() => {
            resultbox.style.display = "block";
            userbtn.textContent = "Generate URL";
        }, 3000);
    }
};

// Clear Inputs

let clear = document.getElementById("clear").addEventListener("click", () => {
    window.location.reload();
});

let n = document.getElementById("new").addEventListener("click", () => {
    window.location.reload();
});

// Copy 

let copy = document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard.writeText(result.value);
    alert("URL Copied");
});
