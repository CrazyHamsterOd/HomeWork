let knight = new Unit("Knight", 50, 10, 5);
let paladin = new Unit("Paladin", 70, 12, 8);
let horseKnight = new Unit("Horse Knight", 150, 25, 25);
let wizard = new Unit("Wizard", 35, 8, 15);

let skeleton = new Unit("Skeleton", 50, 10, 5);
let necromancer = new Unit("Necromancer", 35, 8, 15);
let skeletonDragon = new Unit("Dragon", 500, 100, 75);

let squad = new Squad("firstSquad", [knight, paladin, horseKnight, wizard]);
let enemySquad = new Squad("secondSquad", [skeleton, necromancer, skeletonDragon]);


let battle = new Battle(squad, enemySquad);
//battle.fight();

// knight.drawUnit("myArea");
// knight.drawUnit("myArea");
// knight.drawUnit("myArea");
// knight.drawUnit("myArea");

squad.drawSquad("squadArea");
//emySquad.drawSquad("enemyArea", true);