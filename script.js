const getcolor=()=>{
    const randomnum=Math.floor(Math.random()*16777215);
    const randomCode="#"+randomnum.toString(16); 
    console.log(randomnum);
    console.log("random code :"+randomCode);
    document.body.style.backgroundColor= randomCode;
    document.getElementById("h2").innerText= randomCode;
    // document.getElementById("rao").style.backgroundColor= randomCode;
    // document.getElementById("rao").style.color= randomCode;
    document.getElementById("rao").innerText= randomCode;
    // const colors=['red','green','blue','yellow','purple','orange'];
    // const randomColor=colors[Math.floor(Math.random()*colors.length)];
    // return randomColor;

}
document.getElementById("btn").addEventListener("click",getcolor);