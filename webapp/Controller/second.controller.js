sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/m/MessageToast"], function(Controller, History,
	MessageToast) {
	"use strict";
	return Controller.extend("fornecedores.mvcapp.controller.second", {
		onInit: function() {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("detail").attachPatternMatched(this._oRoutePatternMatched, this);
		},
		_oRoutePatternMatched: function(oEvent) {
			var sPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
			this.getView().bindElement(sPath);
		},
		onNavPress: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this._oRouter.navTo("master");
			}

		},
		
		onSavePress: function() {
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("Save");
			MessageToast.show(msg);
		},
		
		onCancelPress: function() {
			var msg = this.getView().getModel("i18n").getResourceBundle().getText("Cancel");
			MessageToast.show(msg);
		}
		
	});

});