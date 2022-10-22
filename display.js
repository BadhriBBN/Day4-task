let restcoutries=new XMLHttpRequest();

restcoutries.open("GET","https://restcountries.com/v2/all");

restcoutries.onload=function(){

    if(restcoutries.status>=200 && restcoutries.status<300){

        let data=JSON.parse(this.response);

        for(let i=0; i<data.length; i++){
            let user=data[i];
            console.log(`
                ${user.flags.png}
                ${user.flags.svg}
            `);
        }
    }
}
restcoutries.send();