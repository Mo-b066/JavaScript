let vorname = "Mo"; 
let nachname = "Barah Jekly";
let alter = 22;
let eingeschrieben = true;

//console.log(`Dein name ist ${vorname, nachname} und du bist ${alter} Jahre alt.`);

document.getElementById("p1").textContent = `Dein Vorname ist "${vorname}"`;
document.getElementById("p2").textContent = `Dein Nachname ist "${nachname}"`;
document.getElementById("p3").textContent = `Dein Alter ist "${alter}"`;
document.getElementById("p4").textContent = `Eingeschrieben "${eingeschrieben}"`;

console.log(typeof vorname);
console.log(typeof alter);
console.log(typeof eingeschrieben);