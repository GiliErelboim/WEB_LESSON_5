for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100
}

function f1(){
    let name1 = document.querySelector("#name").value; 
    const catalog1 = catalog.filter(x => x.title.includes(name1));
    for(let i=0;i<catalog1.length;i++)
    {
        document.querySelector("#byname").innerHTML+=i+1+". "+catalog1[i].title+"<br>";
    }
}