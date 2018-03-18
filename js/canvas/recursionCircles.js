function recursionCircles(ctx, x, y, r, step, isWhite) {
	if (r > 0) {
		// Малюємо коло якщо його радіус більше нуля
		ctx.beginPath();  

		ctx.arc(x, y, r, 0, 2 * Math.PI);

		if(isWhite)
            ctx.fillStyle = "white";
        else
            ctx.fillStyle = "black";

        ctx.fill();
		// Викликаємо самих себе, щоб СПРОБУВАТИ намалювати ще одне коло, але вже з меншим радіусом
		return recursionCircles(ctx, 
					x, 
					y /* -step*1.15 */ , // <<-- розкоментуй мене 
					r - step, 	// наступне коло малюємо з меншим радіусом 
					step,		// той самий крок 
					!isWhite 	// інвертуємо колір
				);
	
	} else {
		// Коло з відємним радіусом - не малюємо його :)
		return;
	}
}

