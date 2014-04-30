# console.image
### The one thing Chrome Dev Tools didn't need.
The day has come when you have the ability to put images in the console. Checkout [here for a demo](http://adriancooney.github.io/console.image) and open up the dev tools. Also, check out the awesome [chrome extension](https://github.com/jffry/console.image-chrome-extension) by [@jffry](https://twitter.com/jffry). Console.image now has a little baby sister, __[console.snapshot](http://adriancooney.github.io/console.snapshot)__. It snapshots the canvas and outputs it to the console to make debugging the canvas a little less dramatic. Shoutout to [https://github.com/escusado/console.meme](https://github.com/escusado/console.meme) too, I would have forked it if I realized it existed.

![Images.. in the console?](http://i.imgur.com/hv6pwkb.png)

## How to use it
### `console.image(url)`
Basically, you `console.image(url)`.

Examples:

```js
console.image("http://i.imgur.com/hv6pwkb.png");
console.image("http://i.imgur.com/hv6pwkb.png");
console.image("http://i.imgur.com/hv6pwkb.png");
console.image("http://i.imgur.com/hv6pwkb.png");
```

### `console.meme(upper text, lower text, meme type|url, width, height)`
There is also support for dynamically creating on-the-fly real-time memes. Yes, memes.

Examples:

```js
console.meme("Not sure if memes in dev tools is stupid", "or disastrous.", "Not Sure Fry");
console.meme("Not sure if memes in dev tools is stupid", "or disastrous.", "Not Sure Fry", 400, 300);
console.meme("Not sure if memes in dev tools is stupid", "or disastrous.", "http://i.imgur.com/vu4zTYT.jpg", 400, 300);
```

![This meme is bad. I know. It's a demo.](http://i.imgur.com/OdoVMDS.png)

#### It even supports [gifs](http://i.imgur.com/CB8tU.gif).

## How it works
Console.image works by hooking into the ability to style console.log messages in the form of `console.log("%c[message]", [style rules])`. It sets the `background-image` and changes the `color` to transparent. It isn't all fairies and fucking ponies, however. When you set the image to the background, unless you have the dimensions on the font exactly correct you see an image repeating even with `no-repeat` set. This we can't have. After delving into the Web Inspector source, I found the problematic code:

```js
var currentStyle = null;
function styleFormatter(obj)
{
	currentStyle = {};
	var buffer = document.createElement("span");
	buffer.setAttribute("style", obj.description);
	for (var i = 0; i < buffer.style.length; i++) {
		var property = buffer.style[i];
		if (isWhitelistedProperty(property))
			currentStyle[property] = buffer.style[property];
		}
	}

	function isWhitelistedProperty(property)
	{
		var prefixes = ["background", "border", "color", "font", "line", "margin", "padding", "text", "-webkit-background", "-webkit-border", "-webkit-font", "-webkit-margin", "-webkit-padding", "-webkit-text"];
		for (var i = 0; i < prefixes.length; i++) {
			if (property.startsWith(prefixes[i]))
			return true;
		}
		return false;
	}
}
```

The code above formats the inputted style. We can see the the inspector takes the inputted style and tests it on a buffer element to validate them. It then takes the validated styles and checks to see if they're whitelisted, if they pass, they're put in the `currentStyle` object. As you can see, this shatters any dreams of setting widths, heights or animations. Bastards but entirely understandable. Unfortunately this method creates a problem with the `background-repeat` property which will be explained after you take a gawk at the code below.

```js
function append(a, b)
{
	if (b instanceof Node) a.appendChild(b);
	else if (typeof b !== "undefined") {
		var toAppend = WebInspector.linkifyStringAsFragment(String(b));
		if (currentStyle) {
			var wrapper = document.createElement('span');
			for (var key in currentStyle) wrapper.style[key] = currentStyle[key];
			
			wrapper.appendChild(toAppend);
			toAppend = wrapper;
		}
		a.appendChild(toAppend);
	}
	return a;
}
```

This snippet appends the styled message into the parent console message. As you can see, it loops over the `currentStyle` object and sets any style within it to the `wrapper`'s style. What's the problem? The browser for some reason returns `background-repeat-x` and `background-repeat-y` for the `background repeat` property. These properties have no effect when they are _set_ on the wrapper and thus the `background-repeat` style is lost in translation. So now, I had to find a solution where only the whitelisted properties are used but in the end it was fairly simple.

I used the `padding`, `line-height` and `font-size` properties. I set the padding on the left and right to half the width and the top and bottom to the half the height of the image. I then set the font-size to `1px` to ensure it doesn't distort the width. Since padding on an inline element has no effect on it's dimensions, I used the `line-height` to manually set the height and that displayed the images.

## Meme Types
* "10 Guy"
* "3rd World Success Kid"
* "90's Problems"
* "Aaand It's Gone"
* "Actual Advice Mallard"
* "Advice Dog"
* "Advice God"
* "Almost Politically Correct Redneck"
* "Am I The Only One"
* "Ancient Aliens"
* "Annoyed Picard"
* "Annoying Childhood Friend"
* "Annoying Facebook Girl"
* "Anti-Joke Chicken (Rooster)"
* "Awkward Penguin"
* "Back In My Day Grandpa"
* "Bad Advice Mallard"
* "Bad Luck Brian"
* "Bear Grylls"
* "Brace Yourself"
* "Captain Obvious"
* "Chemistry Cat"
* "College Freshman"
* "College Liberal"
* "Condescending Wonka"
* "Confession Bear"
* "Confession Kid"
* "Confused Gandalf"
* "Conspiracy Keanu"
* "Courage Wolf"
* "Dating Site Murderer"
* "Depression Dog"
* "Drunk Baby"
* "English Motherfucker"
* "Evil Plotting Raccoon"
* "First Day On The Internet Kid"
* "First World Cat Problems"
* "First World Problem"
* "Forever Alone"
* "Forever Resentful Mother"
* "Foul Bachelor Frog"
* "Foul Bachelorette Frog"
* "Friendzone Fiona"
* "Frustrated Farnsworth"
* "Fuck Me, Right?"
* "Gangster Baby"
* "Good Girl Gina"
* "Good Guy Greg"
* "Grandma Finds The Internet"
* "Grinds My Gears"
* "Grumpy Cat (Tard)"
* "High Expectations Asian Father"
* "Hipster Barista"
* "Horrifying House Guest"
* "I Dare You Samuel Jackson"
* "I Should Buy A Boat"
* "I Too Like To Live Dangerously"
* "Idiot Nerd Girl"
* "Insanity Wolf"
* "Joker Mind Loss"
* "Joseph Ducreux"
* "Lame Joke Eel"
* "Lame Pun Raccoon"
* "Lazy College Senior"
* "Mad Karma"
* "Masturbating Spidey"
* "Matrix Morpheus"
* "Mayonnaise Patrick"
* "Musically Oblivious 8th Grader"
* "Not Sure Fry"
* "Oblivious Suburban Mom"
* "One Does Not Simply"
* "Overly Attached Girlfriend"
* "Overly Manly Man"
* "Paranoid Parrot"
* "Pedobear"
* "Pepperidge Farm Remembers"
* "Philosoraptor"
* "Priority Peter"
* "Rasta Science Teacher"
* "Redditor's Wife"
* "Revenge Band Kid"
* "Schrute Facts"
* "Scumbag Brain"
* "Scumbag Stacy"
* "Scumbag Steve"
* "Sexually Oblivious Rhino"
* "Sheltering Suburban Mom"
* "Shut Up And Take My Money"
* "Skeptical Third World Kid"
* "Smug Spongebob"
* "Socially Awesome Penguin"
* "Success Kid"
* "Successful Black Man"
* "Sudden Clarity Clarence"
* "Tech Impaired Duck"
* "The Most Interesting Man In The World"
* "The Rent Is Too High"
* "Tough Spongebob"
* "Unhelpful Highschool Teacher"
* "Vengeance Dad"
* "What Year Is It?"
* "X, X Everywhere"
* "Yeah That'd Be Great"
* "Yo Dawg Xzibit"
* "You're Bad And You Should Feel Bad"
* "You're Gonna Have A Bad Time"

## Not for linux users

Linux does not come with the meme font of choice 'impact' out of the box. To use `console.meme` you are going to want to install the 'impact' font first:

     sudo apt-get install ttf-mscorefonts-installer
     
This package is also available in the ubuntu software center.

LICENSE: WTFPL
