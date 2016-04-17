function Cell() {
	this._isBomb = false;
	this._isOpened = false;
	this._isMarked = false;
	this._nLeftRect;
	this._nTopRect;
	this._nRightRect;
	this._nBottomRect;
	this._numer;
}

Cell.prototype.isBomb = function() {
	return this._isBomb;
}

Cell.prototype.setBomb = function() {
	this._isBomb = true;
}

Cell.prototype.setMarked = function() {
	this._isMarked = true;
}

Cell.prototype.setUnmarked = function() {
	this._isMarked = false;
}

Cell.prototype.isMarked = function() {
	return this._isMarked;
}

Cell.prototype.getCoordLeft = function() {
	return this._nLeftRect;
}

Cell.prototype.getCoordRight = function() {
	return this._nRightRect;
}

Cell.prototype.getCoordTop = function() {
	return this._nTopRect;
}

Cell.prototype.getCoordBottom = function() {
	return this._nBottomRect;
}

Cell.prototype.open = function() {
	this._isOpened = true;
}

Cell.prototype.close = function() {
	this._isOpened = false;
}

Cell.prototype.isOpened = function() {
	return this._isOpened;
}

Cell.prototype.setNumber = function(n) {
	this._number = n;
}

Cell.prototype.getNumber = function() {
	return this._number;
}

Cell.prototype.initCell = function(nLeftRect, nTopRect, nRightRect, nBottomRect) {
	this._nLeftRect = nLeftRect;
	this._nTopRect = nTopRect;
	this._nRightRect = nRightRect;
	this._nBottomRect = nBottomRect;
}