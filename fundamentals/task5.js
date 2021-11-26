// Array:
// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change
// if he initially has no money and sells the tickets strictly in the order people queue?
// ==================================
// Line.Tickets([25, 25, 50])
// => YES
// Line.Tickets([25, 100])
// => NO. Vasya will not have enough money to give change to 100 dollars
// Line.Tickets([25, 25, 50, 50, 100])
// => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
// ==================================

function tickets(peopleInLine) {
  if (peopleInLine[0] != 25) {
    return "NO";
  }
  let cashRegister = [1, 0];
  for (let i = 1; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      cashRegister[0] += 1;
    }
    if (peopleInLine[i] == 50) {
      if (cashRegister[0] > 0) {
        cashRegister[0] -= 1;
        cashRegister[1] += 1;
      } else {
        return "NO";
      }
    }
    if (peopleInLine[i] == 100) {
      if (cashRegister[1] > 0 && cashRegister[0] > 0) {
        cashRegister[0] -= 1;
        cashRegister[1] -= 1;
      } else if (cashRegister[0] > 2) {
        cashRegister[0] -= 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
