let xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v2/all");

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
       let data=JSON.parse(this.response);
    

       for(let i=0;i<data.length;i++){
        let user=data[i];
        console.log(`
        Country Name: ${user.name}        
        Region      : ${user.region}      
        Sub-region  : ${user.subregion}   
        populations : ${user.population}  
        `);
    }
}
}
xhr.send();