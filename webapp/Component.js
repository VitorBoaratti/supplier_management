sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/core/UIComponent"], function(JSONModel, UIComponent) {
	"use strict";
	return UIComponent.extend("fornecedores.mvcapp.Component", {
		"metadata": {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});
});