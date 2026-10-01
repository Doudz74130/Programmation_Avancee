import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Curseur from "./components/Curseur";

// Jest (jsdom) ne fournit pas PointerEvent : on en fabrique un minimal
// qui porte bien clientX, comme le ferait un vrai navigateur.
function evenementPointeur(type, clientX) {
  const e = new Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(e, "clientX", { value: clientX });
  Object.defineProperty(e, "clientY", { value: 100 });
  return e;
}

function preparer() {
  const journal = [];
  const { container } = render(
    <Curseur
      min={0}
      max={8000000}
      pas={100000}
      valeurMin={0}
      valeurMax={8000000}
      onChanger={(intervalle) => journal.push(intervalle)}
      formater={(v) => v.toLocaleString("fr-CA") + " $"}
    />
  );

  const piste = container.querySelector("div[class*='piste']");
  const poignees = container.querySelectorAll("div[class*='poignee']");

  // jsdom ne calcule aucune mise en page : on fixe la geometrie de la piste.
  piste.getBoundingClientRect = () => ({
    left: 0,
    top: 0,
    width: 1000,
    height: 26,
    right: 1000,
    bottom: 26,
  });

  return { journal, piste, poignees, container };
}

test("le curseur affiche bien les valeurs recues", () => {
  const { container } = preparer();
  const valeurs = [...container.querySelectorAll("div[class*='valeurs'] span")];

  // En francais, toLocaleString separe les milliers par un espace insecable.
  const espaceInsecable = String.fromCharCode(0x00a0);
  expect(valeurs.map((s) => s.textContent)).toEqual([
    "0 $",
    "à",
    "8" + espaceInsecable + "000" + espaceInsecable + "000 $",
  ]);
});

test("glisser la poignee du haut met a jour la valeur haute", () => {
  const { journal, piste, poignees } = preparer();

  fireEvent(poignees[1], evenementPointeur("pointerdown", 1000));
  fireEvent(window, evenementPointeur("pointermove", 400));
  fireEvent(window, evenementPointeur("pointerup", 400));

  expect(journal.length).toBeGreaterThan(0);
  const [bas, haut] = journal[journal.length - 1];
  expect(bas).toBe(0);
  expect(haut).toBe(3200000);
});

test("glisser la poignee du bas met a jour la valeur basse", () => {
  const { journal, poignees } = preparer();

  fireEvent(poignees[0], evenementPointeur("pointerdown", 0));
  fireEvent(window, evenementPointeur("pointermove", 200));
  fireEvent(window, evenementPointeur("pointerup", 200));

  const [bas, haut] = journal[journal.length - 1];
  expect(bas).toBe(1600000);
  expect(haut).toBe(8000000);
});

test("les poignees ne peuvent pas se croiser", () => {
  const journal2 = [];
  const { container } = render(
    <Curseur
      min={0}
      max={8000000}
      pas={100000}
      valeurMin={3000000}
      valeurMax={5000000}
      onChanger={(intervalle) => journal2.push(intervalle)}
      formater={(v) => String(v)}
    />
  );
  const piste = container.querySelector("div[class*='piste']");
  piste.getBoundingClientRect = () => ({
    left: 0,
    top: 0,
    width: 1000,
    height: 26,
    right: 1000,
    bottom: 26,
  });
  const poignees = container.querySelectorAll("div[class*='poignee']");

  // On pousse la poignee du bas tres a droite, au-dela de la haute
  fireEvent(poignees[0], evenementPointeur("pointerdown", 375));
  fireEvent(window, evenementPointeur("pointermove", 900));
  fireEvent(window, evenementPointeur("pointerup", 900));

  const [bas, haut] = journal2[journal2.length - 1];
  // La valeur basse est bloquee a la valeur haute (5 000 000)
  expect(bas).toBe(5000000);
  expect(haut).toBe(5000000);
});

test("un evenement sans clientX ne casse rien", () => {
  const { journal, poignees } = preparer();

  const sansCoord = new Event("pointerdown", { bubbles: true });
  fireEvent(poignees[1], sansCoord);
  fireEvent(window, new Event("pointermove", { bubbles: true }));
  fireEvent(window, new Event("pointerup", { bubbles: true }));

  // Aucun appel : le composant a ignore l'evenement sans coordonnees
  expect(journal.length).toBe(0);
});

test("une valeur invalide ne fait pas planter l'affichage", () => {
  const { container } = render(
    <Curseur
      min={0}
      max={8000000}
      pas={100000}
      valeurMin={undefined}
      valeurMax={NaN}
      onChanger={() => {}}
      formater={(v) => v.toLocaleString("fr-CA") + " $"}
    />
  );
  const valeurs = [...container.querySelectorAll("div[class*='valeurs'] span")];
  expect(valeurs.map((s) => s.textContent)).toEqual(["0 $", "à", "0 $"]);
});
