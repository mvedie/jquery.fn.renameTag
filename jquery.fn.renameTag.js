if (jQuery) {
	jQuery.fn.renameTag=function(renameTag) {
		this.each(function() {
			// Get current object
			var $this=$(this);

			// Create reg-expressions
			var startTagRegExp=new RegExp("^<"+$this[0].tagName, "i");
			var endTagRegExp=new RegExp($this[0].tagName+">$", "i");

			// Create new named tag
			var $newElement=$($this.get(0).outerHTML.replace(startTagRegExp, "<"+renameTag).replace(endTagRegExp, "</+"+renameTag+">")).html($this.html());

			// Replace origin tag with new created/renamed tag
			$this.replaceWith($newElement);
		});

		return this;
	}
}
