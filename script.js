// script.js — Blocage strict pour Décembre 2025 uniquement

const today = new Date();

const todayDay = today.getDate();      // Jour du mois
const todayMonth = today.getMonth();  // 0 = janvier, 11 = décembre
const todayYear = today.getFullYear();

document.querySelectorAll(".case[data-jour]").forEach(caseElem => {
  const jour = parseInt(caseElem.dataset.jour, 10);

  // Évite doublon de badge
  if (caseElem.querySelector(".badge")) return;

  const badge = document.createElement("span");
  badge.className = "badge";
  caseElem.appendChild(badge);

  if (isNaN(jour)) return;

  // 🔒 AVANT décembre 2025 → TOUT BLOQUÉ
  if (todayYear < 2025 || (todayYear === 2025 && todayMonth < 11)) {
    caseElem.classList.add("bloque");
    caseElem.removeAttribute("href");
    badge.textContent = "Déc. 2025";
    return;
  }

  // ✅ APRÈS décembre 2025 → TOUT DÉBLOQUÉ
  if (todayYear > 2025 || (todayYear === 2025 && todayMonth > 11)) {
    badge.textContent = "Disponible";
    return;
  }

  // 🎄 ON EST EN DÉCEMBRE 2025 → DÉBLOCAGE JOUR PAR JOUR
  if (jour > todayDay) {
    caseElem.classList.add("bloque");
    caseElem.removeAttribute("href");

    const diff = jour - todayDay;
    badge.textContent = diff === 1 ? "J-1" : "J-" + diff;
  } else {
    badge.textContent = "Disponible";
  }
});
