function Field(sizeX, sizeY) {
	this._sizeX = sizeX || 10;
	this._sizeY = sizeY || 10;
	this._area = [];
	for (var i = 0; i < this._sizeX; i++) {
		this._area[i] = [];
		for (var j = 0; j < this._sizeY; j++) {
			this._area[i][j] = 0;
		}
	}
	this._explode = false;
	this._CELL_SIZE_ = 25;
	this._gameStarted = false;
	this._bombsCount = (this._sizeX * this._sizeY - (this._sizeX + this._sizeY)) / 5;


	for (var i = 0; i < this._sizeX; i++) {
		for ( var j = 0; j < this._sizeY; j++) {
			this._area[i][j] = new Cell();
		}
	}

	var bombCoordX, 
		bombCoordY, 
		maxX = this._sizeX - 1,
		maxY = this._sizeY - 1,
		min = 0;
	for (var i = 0; i < this._bombsCount; i++) {
		bombCoordX = Math.floor(Math.random() * (maxX - min + 1)) + min;
		bomCoordY = Math.floor(Math.random() * (maxY - min + 1)) + min;

		while (this._area[bombCoordX][bomCoordY].isBomb()) {
			bombCoordX = Math.floor(Math.random() * (maxX - min + 1)) + min;
			bomCoordY = Math.floor(Math.random() * (maxY - min + 1)) + min;
		}

		this._area[bombCoordX][bomCoordY].setBomb();
	}
}

Field.prototype.startGame = function() {
	this._gameStarted = true;
}

Field.prototype.stopGame = function() {
	this._gameStarted = false;
}

Field.prototype.isGameStarted = function() {
	return this._gameStarted;
}

Field.prototype.getSizeX = function() {
	return this._sizeX;
}

Field.prototype.getSizeY = function() {
	return this._sizeY;
}

Field.prototype.getBombsCount = function() {
	return this._bombsCount;
}

Field.prototype.getExplodeInfo = function() {
	return this._explode;
}

Field.prototype.getCellSize = function() {
	return this._CELL_SIZE_;
}

Field.prototype.getField = function() {
	return this._area;
}

Field.prototype.checkSiblings = function(_coordX, _coordY) {
	var counter = 0;

	if (_coordX != 0 && _coordX < (this._sizeX - 1) && _coordY != 0 && _coordY < (this._sizeY - 1) ) {
		if (this._area[_coordX - 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY + 1].isBomb())
			counter++;

		return counter;
	}

	if (_coordX == 0 && _coordY == 0) {
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY + 1].isBomb())
			counter++;
	}

	if (_coordX == 0 && _coordY != 0 && _coordY < (this._sizeY - 1)) {
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY + 1].isBomb())
			counter++;
	}

	if (_coordX == 0 && _coordY == (this._sizeY - 1)) {
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY - 1].isBomb())
			counter++;
	}

	if (_coordY == (this._sizeY - 1) && _coordX != 0 && _coordX < (this._sizeX - 1)) {
		if (this._area[_coordX - 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY - 1].isBomb())   
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
	}

	if (_coordX == (this._sizeX - 1) && _coordY == (this._sizeY - 1)) {
		if (this._area[_coordX - 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
	}

	if (_coordX == (this._sizeX - 1) && _coordY > 0 && _coordY < (this._sizeY - 1)) {
		if (this._area[_coordX - 1][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY].isBomb())  
			counter++;
		if (this._area[_coordX - 1][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY - 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
	}

	if (_coordY == 0 && _coordX == (this._sizeX - 1)) {
		if (this._area[_coordX - 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
	}

	if (_coordY == 0 && _coordX > 0 && _coordX < (this._sizeX - 1)) {
		if (this._area[_coordX - 1][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX - 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX][_coordY + 1].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY].isBomb())
			counter++;
		if (this._area[_coordX + 1][_coordY + 1].isBomb())
			counter++;
	}

	return counter;
}

Field.prototype.markCell = function(coordX, coordY) {
	for(var i = 0; i < this._sizeX; i++) {
		for (var j = 0; j < this._sizeY; j++) {
			if (coordX > this.area[i][j].getCoordX() && coordX < this.area[i][j].getCoordRight() &&
				coordY < this.area[i][j].getCoordY() && coordY < this.area[i][j].getCoordBottom())
				this._area[i][j].setMarked();
		}
	}
}

Field.prototype.unmarkCell = function(coordX, coordY) {
	for(var i = 0; i < this._sizeX; i++) {
		for (var j = 0; j < this._sizeY; j++) {
			if (coordX > this.area[i][j].getCoordX() && coordX < this.area[i][j].getCoordRight() &&
				coordY < this.area[i][j].getCoordY() && coordY < this.area[i][j].getCoordBottom())
				this._area[i][j].setUnmarked();
		}
	}
}

Field.prototype.checkGameOver = function() {
	var markedCellsCount = 0;

	for (var i = 0; i < this._sizeX; i++) {
		for (var j = 0; j < this._sizeY; j++) {
			if (this._area[i][j].isMarked() && !this._area[i][j].isBomb()) {
				return false;
			}

			if (this._area[i][j].isMarked()) {
				markedCellsCount++;
			}
		}
	}

	return (markedCellsCount == this._bombsCount) ? true : false;
}

Field.prototype.openCell = function(x, y) {

	if (this._area[x][y].isOpened()) {
		return;
	}

	this._area[x][y].open();

	if (this._area[x][y].isBomb()) {
		this._explode = true;
		return;
	}

	var outPut = this.checkSiblings(x, y);

	if(!outPut) {
		if ((x - 1) >= 0 && (y - 1) >= 0 && !this._area[x - 1][y - 1].isBomb())
			this.openCell(x - 1, y - 1);

		if ((x - 1) >= 0 && !this._area[x - 1][y].isBomb())
			this.openCell(x - 1, y);

		if ((x - 1) >= 0 && (y + 1) < this._sizeY && !this._area[x - 1][y + 1].isBomb())
			this.openCell(x - 1, y + 1);

		if ((y - 1) >= 0 && !this._area[x][y - 1].isBomb())
			this.openCell(x, y - 1);

		if ((y + 1) < this._sizeY && !this._area[x][y + 1].isBomb())
			this.openCell(x, y + 1);

		if ((x + 1) < this._sizeX && (y - 1) >= 0 && !this._area[x + 1][y - 1].isBomb())
			this.openCell(x + 1, y - 1);

		if ((x + 1) < this._sizeX && !this._area[x + 1][y].isBomb())
			this.openCell(x + 1, y);

		if ((x + 1) < this._sizeX && (y + 1) < this._sizeY && !this._area[x + 1][y + 1].isBomb())
			this.openCell(x + 1, y + 1);
	}
}