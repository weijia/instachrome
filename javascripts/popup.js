$(function() {
    var show_popup = $.db('show_popup') === "1";
    if(!show_popup) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.extension.getBackgroundPage().readLater(tab);
        });
        window.close();
    } else {
        $('ul.links li > a.add').click(function() {
            chrome.tabs.getSelected(null, function(tab) {
                chrome.extension.getBackgroundPage().readLater(tab);
            });
        });
        
        $('ul.links li > a.text').click(function() {
            chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.update(tab.id, {
                    url: "http://www.instapaper.com/text?u=" + encodeURIComponent(tab.url)
                });
            });
        });
        
        $('ul.links li > a.unread').click(function() {
            chrome.tabs.create({
                url: "http://www.instapaper.com/u"
            });
        });
        
        $('ul.links li > a.starred').click(function() {
            chrome.tabs.create({
                url: "http://www.instapaper.com/starred"
            });
        });
        
        $('ul.links li > a.archive').click(function() {
            chrome.tabs.create({
                url: "http://www.instapaper.com/archive"
            });
        });
        
        $('ul.links li > a.options').click(function() {
            chrome.tabs.create({url: chrome.extension.getURL('options.html')});
        });

        $('ul.links li > a').click(function () {
            window.close();
            return false;
        });
    }
});
