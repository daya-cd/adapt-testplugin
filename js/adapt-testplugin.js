define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

	var Testplugin = ComponentView.extend({


		preRender: function() {
		
            alert("test");
        }



    });
    Adapt.register('testplugin', Testplugin);

    return Testplugin;

});