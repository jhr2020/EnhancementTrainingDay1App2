/***
@controller Name:sap.suite.ui.generic.template.ListReport.view.ListReport,
*@viewId:mdm.cmd.supplier.ops1::sap.suite.ui.generic.template.ListReport.view.ListReport::C_SupplierFs
*/
sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension'
		// ,'sap/ui/core/mvc/OverrideExecution'
	],
	function (
		ControllerExtension
		// ,OverrideExecution
	) {
		"use strict";
		return ControllerExtension.extend("customer.ztrai.jhr.adaptation.template.training1.CustomExtension", {
			onPress: function(oEvent){
				sap.m.URLHelper.triggerEmail("", "someSubject", "someBody");
			}
		});
	});