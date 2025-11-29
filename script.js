// script.js — Blocage strict pour Décembre 2025 + titres masqués

const today = new Date();

const todayDay = today.getDate();      // Jour du mois
const todayMonth = today.getMonth();  // 0 = janvier, 11 = décembre
const todayYear = today.getFullYear();

document.querySelectorAll(".case[data-jour]").forEach(caseElem => {
  const jour = parseInt(caseElem.dataset.jour, 10);

  // Récupère le titre de la case
  const titreElem = caseElem.querySelector(".titre-case");
  const vraiTitre = titreElem ? titreElem.textContent : "";

  // Crée le badge s’il n’existe pas encore
  if (!caseElem.querySelector(".badge")) {
    const badge = document.createElement("span");
    badge.className = "badge";
    caseElem.appendChild(badge);
  }

  const badge = caseElem.querySelector(".badge");

  if (isNaN(jour)) return;

  // 🔒 AVANT décembre 2025 → TOUT BLOQUÉ
  if (todayYear < 2025 || (todayYear === 2025 && todayMonth < 11)) {
    caseElem.classList.add("bloque");
    caseElem.removeAttribute("href");

    if (titreElem) titreElem.textContent = "****";
    badge.textContent = "Déc. 2025";
    return;
  }

  // ✅ APRÈS décembre 2025 → TOUT DÉBLOQUÉ
  if (todayYear > 2025 || (todayYear === 2025 && todayMonth > 11)) {
    if (titreElem) titreElem.textContent = vraiTitre;
    badge.textContent = "Disponible";
    return;
  }

  // 🎄 ON EST EN DÉCEMBRE 2025 → JOUR PAR JOUR
  if (jour > todayDay) {
    caseElem.classList.add("bloque");
    caseElem.removeAttribute("href");

    if (titreElem) titreElem.textContent = "****";

    const diff = jour - todayDay;
    badge.textContent = diff === 1 ? "J-1" : "J-" + diff;
  } else {
    if (titreElem) titreElem.textContent = vraiTitre;
    badge.textContent = "Disponible";
  }
});
