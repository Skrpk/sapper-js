var play = document.querySelector('#playButton');
var level = document.querySelectorAll('.level');
var fieldHTML = document.querySelector('.field');
var smile = document.querySelector('#restart');
var backToMain = document.querySelector('#backToMain');
var result = document.getElementById('result');
var win = false;
var images = ['img/empty.bmp', 'img/number1.bmp', 'img/number2.bmp', 'img/number3.bmp', 
				'img/number4.bmp', 'img/number5.bmp', 'img/number6.bmp', 'img/number7.bmp',
				'img/number8.bmp', 'img/bomb.bmp', 'img/bombExplode.bmp'];

var field = new Field();
play.onclick = function() {
	this.style.display = 'none';
	backToMain.style.display = 'inline-block';
	for (var i = 0; i < level.length; i++) {
		level[i].style.display = 'block';
	}
}

level[0].onclick = function() {
	for (var i = 0; i < level.length; i++) {
		level[i].style.display = 'none';
	}
	smile.style.display = 'inline';

	field = new Field(10, 10);
	field.startGame();
	fieldHTML.style.width = 10 * field.getCellSize();
	fieldHTML.style.heigth = 10 * field.getCellSize();
	var cellImg, rectField, rectCell = {}, number = 0;
	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {
			
			cellImg = document.createElement('img');
			cellImg.src = 'img/button.bmp';

			fieldHTML.style.top = 20 + '%';
			fieldHTML.style.left = 37 + '%';

			cellImg.style.position = 'absolute';
			cellImg.style.top = i * field.getCellSize() + field.getCellSize() + 'px';
			
			cellImg.style.left = j * field.getCellSize() + field.getCellSize() + 'px';
			rectField = fieldHTML.getBoundingClientRect();
			rectCell.left = rectField.left + j * field.getCellSize() + field.getCellSize();
			rectCell.top = rectField.top + i * field.getCellSize() + field.getCellSize();
			rectCell.right = rectField.right + j * field.getCellSize() + 2 * field.getCellSize();
			
			rectCell.bottom = rectField.bottom + i * field.getCellSize() + 2 * field.getCellSize();
			field.getField()[i][j].initCell(rectCell.left, rectCell.top, rectCell.right, rectCell.bottom);
			
			field.getField()[i][j].setNumber(number++);
			fieldHTML.appendChild(cellImg);
		}
	}
}

level[1].onclick = function() {
	for (var i = 0; i < level.length; i++) {
		level[i].style.display = 'none';
	}
	smile.style.display = 'inline';

	field = new Field(15, 15);
	field.startGame();
	fieldHTML.style.width = 15 * field.getCellSize();
	fieldHTML.style.heigth = 15 * field.getCellSize();
	var cellImg, rectField, rectCell = {}, number = 0;
	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {

			cellImg = document.createElement('img');
			cellImg.src = 'img/button.bmp';

			fieldHTML.style.top = 15 + '%';
			fieldHTML.style.left = 35 + '%';

			cellImg.style.position = 'absolute';
			cellImg.style.top = i * field.getCellSize() + field.getCellSize() + 'px';
			cellImg.style.left = j * field.getCellSize() + field.getCellSize() + 'px';
			
			rectField = fieldHTML.getBoundingClientRect();
			rectCell.left = rectField.left + j * field.getCellSize() + field.getCellSize();
			rectCell.top = rectField.top + i * field.getCellSize() + field.getCellSize();
			rectCell.right = rectField.right + j * field.getCellSize() + 2 * field.getCellSize();
			rectCell.bottom = rectField.bottom + i * field.getCellSize() + 2 * field.getCellSize();
			
			field.getField()[i][j].initCell(rectCell.left, rectCell.top, rectCell.right, rectCell.bottom);
			
			field.getField()[i][j].setNumber(number++);
			fieldHTML.appendChild(cellImg);
		}
	}
}

level[2].onclick = function() {
	for (var i = 0; i < level.length; i++) {
		level[i].style.display = 'none';
	}
	smile.style.display = 'inline';
	
	field = new Field(20, 20);
	field.startGame();

	fieldHTML.style.width = 20 * field.getCellSize();
	fieldHTML.style.heigth = 20 * field.getCellSize();

	var cellImg, rectField, rectCell = {}, number = 0;
	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {
			cellImg = document.createElement('img');
			
			cellImg.src = 'img/button.bmp';
			fieldHTML.style.top = 10 + '%';
			fieldHTML.style.left = 30 + '%';
			
			cellImg.style.position = 'absolute';
			cellImg.style.top = i * field.getCellSize() + field.getCellSize() + 'px';
			cellImg.style.left = j * field.getCellSize() + field.getCellSize() + 'px';
			
			rectField = fieldHTML.getBoundingClientRect();
			rectCell.left = rectField.left + j * field.getCellSize() + field.getCellSize();
			rectCell.top = rectField.top + i * field.getCellSize() + field.getCellSize();
			rectCell.right = rectField.right + j * field.getCellSize() + 2 * field.getCellSize();
			rectCell.bottom = rectField.bottom + i * field.getCellSize() + 2 * field.getCellSize();
			
			field.getField()[i][j].initCell(rectCell.left, rectCell.top, rectCell.right, rectCell.bottom);
			
			field.getField()[i][j].setNumber(number++);
			fieldHTML.appendChild(cellImg);
		}
	}
}

fieldHTML.onclick = function() {

	if (win) {
		result.innerHTML = 'You won, congratulations!';
		return;
	}

	if (field.getExplodeInfo()) {
		return;
	}

	var childImages  = fieldHTML.getElementsByTagName('IMG'), siblings;
	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {
			if (event.clientX > field.getField()[i][j].getCoordLeft() && 
				event.clientX < field.getField()[i][j].getCoordRight() &&
				event.clientY > field.getField()[i][j].getCoordTop() && 
				event.clientY < field.getField()[i][j].getCoordBottom()) {

				field.openCell(i, j);

				for (var i = 0; i < field.getSizeX(); i++) {
					for (var j = 0; j < field.getSizeY(); j++) {
						if (field.getField()[i][j].isOpened()) {
							if (field.getField()[i][j].isBomb()) {
								childImages[field.getField()[i][j].getNumber()].src = images[10];
								result.innerHTML = 'You loose, ha-ha!';
							} else {
								siblings = field.checkSiblings(i, j);
								childImages[field.getField()[i][j].getNumber()].src = images[siblings];
							}
						}

						if (field.getField()[i][j].isBomb() && field.getExplodeInfo()) {
							childImages[field.getField()[i][j].getNumber()].src = images[9];
						}

					}
				}
				
				break;
			}

		}
	}
}

fieldHTML.oncontextmenu = function() {

	event.preventDefault();

	var childImages  = fieldHTML.getElementsByTagName('IMG'), siblings;

	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {
			if (event.clientX > field.getField()[i][j].getCoordLeft() && 
				event.clientX < field.getField()[i][j].getCoordRight() &&
				event.clientY > field.getField()[i][j].getCoordTop() && 
				event.clientY < field.getField()[i][j].getCoordBottom()) {

				if(field.getField()[i][j].isOpened() || win || field.getExplodeInfo()){
					return;
				}

				if (field.getField()[i][j].isMarked()) {
					childImages[field.getField()[i][j].getNumber()].src = 'img/button.bmp';
					field.getField()[i][j].setUnmarked();
				} else {
					childImages[field.getField()[i][j].getNumber()].src = 'img/flag.bmp';
					field.getField()[i][j].setMarked();
				}

				if (field.checkGameOver()) {
					win = true;
				}
			}
		}
	}
}


backToMain.onclick = function() {

	while(fieldHTML.childNodes[0]){
 		 fieldHTML.removeChild(fieldHTML.childNodes[0]);
	}


	play.style.display = 'block';
	this.style.display = 'none';
	smile.style.display = 'none';
	result.innerHTML = '';
}

smile.onclick = function() {

	while(fieldHTML.childNodes[0]){
 		 fieldHTML.removeChild(fieldHTML.childNodes[0]);
	}

	result.innerHTML = '';

	field = new Field(field.getSizeX(), field.getSizeY());
	field.startGame();

	var cellImg, 
		rectField, 
		rectCell = {}, 
		number = 0,
		marginLeft,
		marginTop;

	rectField = fieldHTML.getBoundingClientRect();

	if (field.getSizeX() === 10) {
		marginTop = 20;
		marginLeft = 37;
	} else if (field.getSizeX() === 15) {
		marginTop = 15;
		marginLeft = 35;
	} else if (field.getSizeX() === 20) {
		marginTop = 10;
		marginLeft = 30;
	}

	for (var i = 0; i < field.getSizeX(); i++) {
		for (var j = 0; j < field.getSizeY(); j++) {
			cellImg = document.createElement('img');
			
			cellImg.src = 'img/button.bmp';
			fieldHTML.style.top = marginTop + '%';
			fieldHTML.style.left = marginLeft + '%';
			
			cellImg.style.position = 'absolute';
			cellImg.style.top = i * field.getCellSize() + field.getCellSize() + 'px';
			cellImg.style.left = j * field.getCellSize() + field.getCellSize() + 'px';
			
			rectCell.left = rectField.left + j * field.getCellSize() + field.getCellSize();
			rectCell.top = rectField.top + i * field.getCellSize() + field.getCellSize();
			rectCell.right = rectField.right + j * field.getCellSize() + 2 * field.getCellSize();
			rectCell.bottom = rectField.bottom + i * field.getCellSize() + 2 * field.getCellSize();
			
			field.getField()[i][j].initCell(rectCell.left, rectCell.top, rectCell.right, rectCell.bottom);
			
			field.getField()[i][j].setNumber(number++);
			fieldHTML.appendChild(cellImg);
		}
	}
}