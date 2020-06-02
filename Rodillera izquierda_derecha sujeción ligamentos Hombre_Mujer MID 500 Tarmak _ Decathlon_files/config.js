



// Class loading
Cube = (typeof Cube === 'object') ? Cube : {};
Cube.Utils = {

	isMonoLanguage: function() {
		
			return false;
		
	},

	getCurrentLocale : function () {
		return document.querySelector('html').dataset.lang;
	},

	localizeUri: function(targetPath) {
		var path = targetPath;
		if (!this.isMonoLanguage()) {
			if (targetPath.charAt(0) != '/') {
				path += '/'
			}
			path = '/' + this.getCurrentLocale() + path;
		}
		return path;
	},

    ajaxCallLocalizeUri: function(targetPath) {
        var path = targetPath;

        if (targetPath.charAt(0) != '/') {
            path += '/'
        }

        return '/' + this.getCurrentLocale() + path;
    }

};

Cube.Features = {

	useBaiduAsMapProvider: function() {
		return false;
	},

	useGoogleAsMapProvider: function() {
		return true;
	},

	openMenuCategoriesInNewTab: function() {
		return false;
	}


};

Cube.priceConfig = JSON.parse('{"format":{"showSeparator":true,"decimalPattern":"0.00","pattern":{"default":"%3$s%1$s<sup>%2$s</sup>","light":"%3$s%1$s,%2$s"},"thousands":{"separator":"."},"decimal":{"separator":","},"separator":""},"currency":{"symbol":"€","beforePrice":true,"showSymbol":true},"reduction":{"showFrom":true}}');
