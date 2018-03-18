function stem(ctx, x1, y1, length, angle) {
	// Визначити координати кіня стовбура знаючи почткову точку стовбура, його довжину та кут нахилу. Так, це тригонометрія в дії :)
	var x2 = x1 + length * Math.sin(angle * (Math.PI /180));
	var y2 = y1 - length * Math.cos(angle * (Math.PI /180));
	
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineWidth=length/10; // тощина стовбура залежить від його довжини
	ctx.stroke();
	ctx.closePath();

	// Закоментуй цей IF. Що змінилось в картинці дерева? Чому стало гірше?
	if (length > 20) {
		x2 = x1 + (length * 0.95) * Math.sin(angle * (Math.PI /180));
		y2 = y1 - (length * 0.95) * Math.cos(angle * (Math.PI /180));
	}

    if (length > 1) {
		var rnd1 = Math.random() *20  -10;  // [-10.0 .. +10.0]
		var rnd2 = Math.random() *0.2 +0.6; // [  0.6 ..   0.8]

		// Малюємо розгалудження стовбура. За початок нового стовбура використовується кінець поточного стовбура
      	stem(ctx, x2, y2, length * rnd2, angle + 35 +rnd1);
      	stem(ctx, x2, y2, length * rnd2, angle - 25 +rnd1);
	}
}

function tree(ctx, x, y, height) {

	stem(ctx, x, y, height, 0);

}
