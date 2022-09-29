function gladiatorExpenses(fights, helmet, sword, shield, armor) {
  let helmetPrice = helmet;
  let swordPrice = sword;
  let shieldPrice = shield;
  let armorPrice = armor;

  let totalPrice = 0;
  let shieldBreaks = 0;

  for (let currentFight = 1; currentFight <= fights; currentFight++) {
    if (currentFight % 2 === 0) {
      totalPrice += helmetPrice;
    }
    if (currentFight % 3 === 0) {
      totalPrice += swordPrice;
    }
    if (currentFight % 2 === 0 && currentFight % 3 === 0) {
      totalPrice += shieldPrice;
      shieldBreaks++;
      if (shieldBreaks % 2 === 0) {
        totalPrice += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
