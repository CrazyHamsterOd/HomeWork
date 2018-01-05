//-----Squad
function Squad(name, defaultSqad) {
    this.squad = [];
    this.name = name;
    if (defaultSqad) {
        this.addUnitsToSquad(defaultSqad);
    }
}

Squad.prototype.moveSquad = function (distance) {
    Squad.forEach(function (unit) {
        unit.moveUnit(distance);
    });
}

Squad.prototype.restoreSquad = function () {
    this.squad.forEach(function (unit) {
        unit.healUnit();
        unit.recoveryUnit();
    });
}

Squad.prototype.getUnitsWhitEnoughStamina = function (dictance) {
    return this.squad.filter(unit => unit.stamina >= distance);
}

Squad.prototype.getUnitsWhitEnoughHealPoints = function (damage) {
    this.squad = this.squad.filter(unit => unit.healPoints > damage)
}

Squad.prototype.addUnitsToSquad = function (arrayOfUnits) {
    this.squad = this.squad.concat(arrayOfUnits);
}

Squad.prototype.deleteUnitFromSquad = function (index) {
    this.squad.splice(index, 1);
}

Squad.prototype.readyToBattle = function (damage) {
    return squad.every(function (unit) {
        return unit.healPoints > damage;
    });
}

Squad.prototype.changePositionUnits = function (firstUnit, secondUnit) {
    let temp = array[firstUnit];
    array[firstUnit] = array[secondUnit];
    array[secondUnit] = temp;
}

Squad.prototype.getAliveUnits = function () {
    this.squad = this.squad.filter(unit => unit.healPoints > 0);
}

Squad.prototype.getRandomUnit = function () {
    if (this.squad.length > 0) {
        return this.squad[Math.ceil(Math.random() * (this.squad.length - 1))];
    } else {
        throw new Error("No units exist from " + this.name);
    }
}

Squad.prototype.drawSquad = function(parentElemId, enemy){
    this.squad.forEach(function (unit) {
        unit.drawUnit(parentElemId, enemy);
    });
}