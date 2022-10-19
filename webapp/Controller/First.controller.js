sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"], function (Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("fornecedores.mvcapp.controller.First", {
		onListItemPress: function (oEvent) {
			
			var oSelectedItem = oEvent.getSource();
			var oCtxt = oSelectedItem.getBindingContext();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				ID: oCtxt.getProperty("ID")
			});
		},
			onFiltersuppliers : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ID", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("suppliers");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			}
	});
});