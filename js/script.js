/* 
Per prima cosa suddividiamo il lavoro in più step: 
1 - CREIAMO UN ARRAY CHE CI PERMETTA DI INSERIRE DEI DATI SPECIFICI (Nome, Ruolo e Foto)
    - All'interno di questo array creiamo un oggetto che ci permetta di inserire delle proprietà con le rispettive chiavi e valori
2 - CREIAMO UNA FUNZIONE CHE CI PERMETTA DI STAMPARE I DATI DEI VARI MEMBRI DEL TEAM
    - A questo punto selezioniamo i vari componenti html del DOM che ci interessano
    - Stabiliamo se vogliamo usare un INNER HTML + template literal o il metodo CREATE ELEMENT
    - Aggiungiamo al form precedentemente selezionato un evento in cui al click ci permetta di generare i vari elementi HTML
*/


const teamContainer = document.querySelector(".team-container");
const addMember = document.getElementById("addMemberButton");
// const cardImage = document.querySelector("card-image");
// const cardText = document.querySelector("card-text");

let teamDatabase = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "img/angela-caroll-chief-editor.jpg"
    },

    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "img/walter-gordon-office-manager.jpg"
    },

    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "img/angela-lopez-social-media-manager.jpg"
    },

    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "img/scott-estrada-developer.jpg"
    },

    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "img/barbara-ramos-graphic-designer.jpg"
    }
]

console.log(teamDatabase[0].nome);

function createNewCard() {
    teamContainer.innerHTML = "";

    for (let i = 0; i < teamDatabase.length; i++) {
        const cardElement = teamDatabase[i];

        teamContainer.innerHTML += 
        `<div class="team-card">
        <div class="card-image">
          <img
            src="${cardElement.foto}"
          />
        </div>
        <div class="card-text">
          <h3>${cardElement.nome}</h3>
          <p>${cardElement.ruolo}</p>
        </div>
         </div>`;
        
    }

}


addMember.addEventListener("click", function () {
  const nameMember = document.getElementById("name");
  const role = document.getElementById("role");
  const image = document.getElementById("image");

    teamDatabase.push(
    {
      nome: nameMember.value,
      ruolo: role.value,
      foto: image.value
    })

    createNewCard()
})


