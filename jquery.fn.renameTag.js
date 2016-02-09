(function(jQuery) {
    jQuery.fn.renameTag=function(renameTag) {
        this.each(function() {
            // Get current object
            var $this=jQuery(this);
            var element = $this[0];
            // Create new object
            var $newElement = jQuery('<'+renameTag+'></'+renameTag+'>');

            // Copy Attribute
            jQuery.each(element.attributes, function(i,attr) {
                $newElement.attr(attr.nodeName,attr.nodeValue);
            });

            // Set html of the new element
            $newElement.html($this.html());
            // Replace old element with new
            $this.replaceWith($newElement);

        });

        return this;
    }
})(jQuery);
