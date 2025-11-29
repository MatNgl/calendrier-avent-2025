// script.js

// On considère que le calendrier est utilisé en décembre.
// todayDay = jour du mois (1–31)
const today = new Date();
const todayDay = today.getDate();

// Si tu veux forcer une date (pour tester avant décembre) :
// const todayDay = 5; // par exemple

document.querySelectorAll(".case[data-jour]").forEach(caseElem => {
  const jour = parseInt(caseElem.dataset.jour, 10);

  // Crée le badge qui affichera J-X / Disponible
  const badge = document.createElement("span");
  badge.className = "badge";
  caseElem.appendChild(badge);

  if (isNaN(jour)) return;

  if (jour > todayDay) {
    // Jour futur : on bloque la case, on enlève le lien
    caseElem.classList.add("bloque");
    caseElem.removeAttribute("href");

    const diff = jour - todayDay;

    if (diff === 1) {
      badge.textContent = "J-1";
    } else {
      badge.textContent = "J-" + diff;
    }
  } else {
    // Jour dispo (aujourd’hui ou passé)
    badge.textContent = "Disponible";
  }
});
