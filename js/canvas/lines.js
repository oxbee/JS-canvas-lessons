function lines(ctx, x, y, delta, step) {
	ctx.beginPath();
	for (var iter = 0; iter <= delta; iter += step/5) {

		ctx.moveTo(x+iter, y);
		ctx.lineTo(x, y + delta - iter);

		ctx.moveTo(x-iter, y);
		ctx.lineTo(x, y + delta - iter);

		ctx.moveTo(x+iter, y);
		ctx.lineTo(x, y - delta + iter);

		ctx.moveTo(x-iter, y);
		ctx.lineTo(x, y - delta + iter);
	}
	ctx.stroke(); 
}
