let knight = new Unit("knight", 50, 10, 5);
let paladin = new Unit("paladin", 70, 12, 8);
let horseKnight = new Unit("horseKnight", 150, 25, 25);
let wizard = new Unit("wizard", 35, 8, 15);

let skeleton = new Unit("skeleton", 50, 10, 5);
let necromancer = new Unit("necromancer", 35, 8, 15);
let skeletonDragon = new Unit("skeletonDragon", 500, 100, 75);

let squad = new Squad("firstSquad", [knight, paladin, horseKnight, wizard]);
let enemySquad = new Squad("secondSquad", [skeleton, necromancer, skeletonDragon]);


let battle = new Battle(squad, enemySquad);
//battle.fight();

// knight.drawUnit("myArea");
// knight.drawUnit("myArea");
// knight.drawUnit("myArea");
// knight.drawUnit("myArea");

squad.drawSquad("myArea", false);
enemySquad.drawSquad("enemyArea", true);