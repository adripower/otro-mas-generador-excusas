
window.onload = function() {
    document.querySelector("#excusas").innerHTML = excusas();
};
        
    function excusas(){

        let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
        let action = ['ate', 'peed', 'crushed', 'broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

        // estan con un let porque se quedaba indicando que no estan declaradas y marca con error pero se puede borra desde la linea 13 a la 18

        let indice1 = who;
        let indice2 = action;
        let indice3 = what;
        let indice4 = when;

        indice1 = Math.floor(Math.random()*who.length);
        indice2 = Math.floor(Math.random()*action.length);
        indice3 = Math.floor(Math.random()*what.length);
        indice4 = Math.floor(Math.random()*when.length);

       

        return( who[indice1] +" "+ action[indice2] +" "+ what[indice3]  +" "+ when[indice4] );
         }





