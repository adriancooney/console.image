/**
 * Dubiously created by Adrian Cooney
 * http://adriancooney.github.io
 */
(function(console) {
	"use strict";

	//Bootlegged of imgur.com/memegen
	var memes = {"10 Guy":"//i.imgur.com/LaENqOV.jpg","3rd World Success Kid":"//i.imgur.com/WA5duA1.jpg","90's Problems":"//i.imgur.com/tL47qtp.jpg","Aaand It's Gone":"//i.imgur.com/yf12saq.jpg","Actual Advice Mallard":"//i.imgur.com/WymFmVy.jpg","Advice Dog":"//i.imgur.com/Qk0VO6D.jpg","Advice God":"//i.imgur.com/xH2fSFg.jpg","Almost Politically Correct Redneck":"//i.imgur.com/YqLgINf.jpg","Am I The Only One":"//i.imgur.com/gS9YL5U.jpg","Ancient Aliens":"//i.imgur.com/NfCknz0.jpg","Annoyed Picard":"//i.imgur.com/s9GmfSS.jpg","Annoying Childhood Friend":"//i.imgur.com/27VCyQw.jpg","Annoying Facebook Girl":"//i.imgur.com/ccczyGt.jpg","Anti-Joke Chicken (Rooster)":"//i.imgur.com/KOsW0jh.jpg","Awkward Penguin":"//i.imgur.com/ez1tQrq.jpg","Back In My Day Grandpa":"//i.imgur.com/zuJSZp8.jpg","Bad Advice Mallard":"//i.imgur.com/QEPvL2B.jpg","Bad Luck Brian":"//i.imgur.com/sRW8BiO.jpg","Bear Grylls":"//i.imgur.com/6Spqy1D.jpg","Brace Yourself":"//i.imgur.com/NhIq0LY.jpg","Captain Obvious":"//i.imgur.com/DmUcxBu.jpg","Chemistry Cat":"//i.imgur.com/8agP4Xe.jpg","College Freshman":"//i.imgur.com/2Ynyv9t.jpg","College Liberal":"//i.imgur.com/OWfvSFE.jpg","Condescending Wonka":"//i.imgur.com/D0e5fgL.jpg","Confession Bear":"//i.imgur.com/kH1SKhp.jpg","Confession Kid":"//i.imgur.com/jhOxR12.jpg","Confused Gandalf":"//i.imgur.com/iIb5SEo.jpg","Conspiracy Keanu":"//i.imgur.com/pFyk3J7.jpg","Courage Wolf":"//i.imgur.com/H5qoXFb.jpg","Dating Site Murderer":"//i.imgur.com/jffNNql.jpg","Depression Dog":"//i.imgur.com/wgad6P8.jpg","Drunk Baby":"//i.imgur.com/QvZdbRE.jpg","English Motherfucker":"//i.imgur.com/sJThEC0.jpg","Evil Plotting Raccoon":"//i.imgur.com/xMslWFf.jpg","First Day On The Internet Kid":"//i.imgur.com/TWfdmVu.jpg","First World Cat Problems":"//i.imgur.com/0vR5Slq.jpg","First World Problem":"//i.imgur.com/ATcIl08.jpg","Forever Alone":"//i.imgur.com/pcfXSUU.jpg","Forever Resentful Mother":"//i.imgur.com/pIrdwo2.jpg","Foul Bachelor Frog":"//i.imgur.com/JUFmusm.jpg","Foul Bachelorette Frog":"//i.imgur.com/dYf971U.jpg","Friendzone Fiona":"//i.imgur.com/Qu1eedL.jpg","Frustrated Farnsworth":"//i.imgur.com/U3SElKP.jpg","Fuck Me, Right?":"//i.imgur.com/J9gfxsx.jpg","Gangster Baby":"//i.imgur.com/C3XhI56.jpg","Good Girl Gina":"//i.imgur.com/qK6lYr2.jpg","Good Guy Greg":"//i.imgur.com/UXMPoKN.jpg","Grandma Finds The Internet":"//i.imgur.com/xPfGYqu.jpg","Grinds My Gears":"//i.imgur.com/t4JqU1j.jpg","Grumpy Cat (Tard)":"//i.imgur.com/dU5CDxN.jpg","High Expectations Asian Father":"//i.imgur.com/7QeB9LI.jpg","Hipster Barista":"//i.imgur.com/AbWxdy2.jpg","Horrifying House Guest":"//i.imgur.com/DxmoFp1.jpg","I Dare You Samuel Jackson":"//i.imgur.com/UQtpdqj.jpg","I Should Buy A Boat":"//i.imgur.com/XqlqPxn.jpg","I Too Like To Live Dangerously":"//i.imgur.com/qF70EL9.jpg","Idiot Nerd Girl":"//i.imgur.com/8hYPYwd.jpg","Insanity Wolf":"//i.imgur.com/GOOdg3k.jpg","Joker Mind Loss":"//i.imgur.com/qQIRaOD.jpg","Joseph Ducreux":"//i.imgur.com/QL7TyR9.jpg","Lame Joke Eel":"//i.imgur.com/oQXw3jF.jpg","Lame Pun Raccoon":"//i.imgur.com/nvALRK3.jpg","Lazy College Senior":"//i.imgur.com/PpkVfzz.jpg","Mad Karma":"//i.imgur.com/G0QMPum.jpg","Masturbating Spidey":"//i.imgur.com/dZ7AB4c.jpg","Matrix Morpheus":"//i.imgur.com/8Yrw6cZ.jpg","Mayonnaise Patrick":"//i.imgur.com/5jE0Y7f.jpg","Musically Oblivious 8th Grader":"//i.imgur.com/l5YHN5D.jpg","Not Sure Fry":"//i.imgur.com/7rFgBB1.jpg","Oblivious Suburban Mom":"//i.imgur.com/Y7o7UJs.jpg","One Does Not Simply":"//i.imgur.com/7LrwR1Y.jpg","Overly Attached Girlfriend":"//i.imgur.com/5blLJLR.jpg","Overly Manly Man":"//i.imgur.com/dOSn9Na.jpg","Paranoid Parrot":"//i.imgur.com/KooYHdg.jpg","Pedobear":"//i.imgur.com/c6JZKRW.jpg","Pepperidge Farm Remembers":"//i.imgur.com/uFde4v5.jpg","Philosoraptor":"//i.imgur.com/eERhI5h.jpg","Priority Peter":"//i.imgur.com/BBEFk0e.jpg","Rasta Science Teacher":"//i.imgur.com/Js6Ai5T.jpg","Redditor's Wife":"//i.imgur.com/d1XfJeD.jpg","Revenge Band Kid":"//i.imgur.com/dlvmaRI.jpg","Schrute Facts":"//i.imgur.com/UxcvPwT.jpg","Scumbag Brain":"//i.imgur.com/OZhhZdS.jpg","Scumbag Stacy":"//i.imgur.com/Qqz1axp.jpg","Scumbag Steve":"//i.imgur.com/Rfvoc0Y.jpg","Sexually Oblivious Rhino":"//i.imgur.com/RoaNuEC.jpg","Sheltering Suburban Mom":"//i.imgur.com/vMkSofv.jpg","Shut Up And Take My Money":"//i.imgur.com/uWe0rtQ.jpg","Skeptical Third World Kid":"//i.imgur.com/uwAusxV.jpg","Smug Spongebob":"//i.imgur.com/OTTRjrv.jpg","Socially Awesome Penguin":"//i.imgur.com/S6WgQW7.jpg","Success Kid":"//i.imgur.com/ZibijBz.jpg","Successful Black Man":"//i.imgur.com/ogIm0cy.jpg","Sudden Clarity Clarence":"//i.imgur.com/N3Xmfbe.jpg","Tech Impaired Duck":"//i.imgur.com/riz28ci.jpg","The Most Interesting Man In The World":"//i.imgur.com/MGv15MH.jpg","The Rent Is Too High":"//i.imgur.com/r5WLktQ.jpg","Tough Spongebob":"//i.imgur.com/2w0F1HX.jpg","Unhelpful Highschool Teacher":"//i.imgur.com/ohbGhuD.jpg","Vengeance Dad":"//i.imgur.com/0nUStsa.jpg","What Year Is It?":"//i.imgur.com/fj79hQS.jpg","X, X Everywhere":"//i.imgur.com/GGy94Gt.jpg","Yeah That'd Be Great":"//i.imgur.com/nz9M2pl.jpg","Yo Dawg Xzibit":"//i.imgur.com/XOyGqF2.jpg","You're Bad And You Should Feel Bad":"//i.imgur.com/YsabGnQ.jpg","You're Gonna Have A Bad Time":"//i.imgur.com/2tNR7P7.jpg"};

	/**
	 * Since the console.log doesn't respond to the `display` style,
	 * setting a width and height has no effect. In fact, the only styles
	 * I've found it responds to is font-size, background-image and color.
	 * To combat the image repeating, we have to get a create a font bounding
	 * box so to speak with the unicode box characters. EDIT: See Readme.md
	 *
	 * @param  {int} width  The height of the box
	 * @param  {int} height The width of the box
	 * @return {object}     {string, css}
	 */
	function getBox(width, height) {
		return {
			string: "+",
			style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
		}
	}

	/**
	 * Draw's meme text on a context.
	 *
	 * @param  {CanvasRenderingContext2D} ctx   The canvas context
	 * @param  {string} type  "upper"|"lower"
	 * @param  {string} text  The text to draw
	 * @param  {int} width The width of the image
	 * @param  {int} y     The y value to draw at
	 * @return {null}
	 */
	function drawMemeText(ctx, type, text, width, y) {
		text = text.toUpperCase();
		//Determine the font size
		if(text.length < 24) {
			var val = Math.max(0, text.length - 12),
				size = 70 + (val * - 3);

			drawText(ctx, size, text, width/2, y);
		} else if(text.length < 29) {
			drawText(ctx, 40, text, width/2, y);
		} else {
			var strs = wrap(text, 27);
			strs.forEach(function(str, i) {
				drawText(ctx, 40, str, width/2, (type == "lower") ? (y - ((strs.length - 1) * 40)) + (i * 40) : y + (i * 40));
			});
		}
	}

	/**
	 * Draws text in impact font with stroke on context
	 *
	 * @param  {CanvasRenderingContext2D} ctx  The canvas context
	 * @param  {int} size Font size
	 * @param  {string} text The string to write
	 * @param  {int} x    X Position
	 * @param  {int} y    Y position
	 * @return {null}
	 */
	function drawText(ctx, size, text, x, y) {
		//Set the text styles
		ctx.font = "bold " + size + "px Impact";
		ctx.fillStyle = "#fff";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.lineWidth = 7;
		ctx.strokeStyle = "#000";
		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	}

	/**
	 * Wrap a line of text at an index
	 *
	 * @param  {string} text The text
	 * @param  {int} num  The index to wrap at
	 * @return {array}      Array of text
	 */
	function wrap(text, num) {
		var output = [],
			split = text.split(" ");

		var str = [];
		for(var i = 0, cache = split.length; i < cache; i++) {
			if((str + split[i]).length < num) str.push(split[i])
			else {
				output.push(str.join(" "));
				str.length = 0;
				str.push(split[i]);
			}
		}

		//Push the final line
		output.push(str.join(" "));

		return output;
	}

	/**
	 * Add a meme to the console!
	 *
	 * @param  {string} upper  The upper text
	 * @param  {string} lower  The lower text
	 * @param  {string} image  The meme type (see `console.meme` for all supported) or image url (Make sure it's CORS enabled)
	 * @param  {int} width  The width of the meme
	 * @param  {int} height The height of the meme
	 * @return {null}
	 */
	console.meme = function(upper, lower, image, width, height) {
		if(!upper) console.error("Yo, you forgot the text for the upper part of the meme. The bit at the top. Yeah, that bit.");
		if(!lower) console.error("You forgot the text for the bottom of the meme, stupid.");
		if(!image) console.error("Dude, you forgot the meme type or url for the background image (CORS enabled, *hint* imgur *hint*). To see a list of supported memes, hit `console.meme()`");
		if(!upper && !lower && !image) return console.log("> " + Object.keys(memes).join("\n> "));

		var canvas = document.createElement("canvas"),
			ctx = canvas.getContext("2d"),
			width = width || 500,
			height = width || 500,
			//I tweaked it at these dimensions,
			//So everything scales from here
			_w = 500, _h = 500;

		var img = new Image();
    		img.setAttribute('crossOrigin','anonymous');
		img.onload = function() {
			canvas.width = width;
			canvas.height = height;

			var text = upper.toUpperCase();

			ctx.scale(width/500, height/500);

			//Draw the background
			ctx.drawImage(this, 0, 0, _w, _h);

			drawMemeText(ctx, "upper", upper, _w, 50); //upper
			drawMemeText(ctx, "lower", lower, _w, _h - 50); //upper

			console.image(canvas.toDataURL());
		};

		if(memes[image]) var url = memes[image];
		else var url = image;

		img.src = url; //"http://www.corsproxy.com/" + url.replace(/https?:\/\//, "");
	};

	/**
	 * Display an image in the console.
	 * @param  {string} url The url of the image.
	 * @param  {int} scale Scale factor on the image
	 * @return {null}
	 */
	console.image = function(url, scale) {
		scale = scale || 1;
		var img = new Image();

		img.onload = function() {
			var dim = getBox(this.width * scale, this.height * scale);
			console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
		};

		img.src = url;
	};
})(console);
