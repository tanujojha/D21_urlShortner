let gotinyurl = "https://gotiny.cc/api";

// function to hit gotiny api
let gotiny = async (gotinyurl, urltoshort)=>{
    let res = await fetch(gotinyurl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({input: urltoshort})
    })
    
    return res.json()
    
}

let input = document.getElementById("urlinp");
let btn = document.getElementById("gotinybtn");
let codehtml = document.getElementById("codehtml");
let codeurl = document.getElementById("codeurl");
let codelink = document.getElementById("codelink")
let codespan = document.getElementById("codespan");

// click event listner on gotiny button 
btn.addEventListener("click", ()=>{
    let urltoshort = input.value
    
    gotiny(gotinyurl, urltoshort).then((data)=>{
        // console.log(data[0].code);
        let code = data[0].code
        codehtml.innerHTML = code;
        codespan.innerHTML = code;
        codelink.href = `https://gotiny.cc/${code}`

        //hover effect on code
        codehtml.addEventListener("mouseover", ()=>{
            codehtml.style.color = "#4abfd6"
            codespan.style.color = "#4abfd6";
        });

        codehtml.addEventListener("mouseout", ()=>{
            codehtml.style.color = "white"
            codespan.style.color = "white";
        });

        // hover effect on codeurl
        codeurl.addEventListener("mouseover", ()=>{
            console.log("okn");
            codelink.style.color = "#c5b760";
            codehtml.style.color = "#4abfd6"
            codespan.style.color = "#4abfd6";
            
        });

        codeurl.addEventListener("mouseout", ()=>{
            console.log("ok out ");
            codelink.style.color = "white";
            codehtml.style.color = "white"
            codespan.style.color = "white";
        });
     
    })
    .catch((er)=>{
        console.log(er);
    })
})

