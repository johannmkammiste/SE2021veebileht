window.onload = function() {
    const d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var dateeur = day+'.'+month+'.'+year;
    document.getElementById('heading').innerHTML =  'Top 5 Memes of Reddit on ' + dateeur;
}