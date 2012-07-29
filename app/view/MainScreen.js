/*
 * File: app/view/MainScreen.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainScreen', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.MainScreen',

    config: {
        styleHtmlContent: true,
        ui: 'light',
        modal: false,
        tabBarPosition: 'bottom'
    },

    initialize: function() {
        this.callParent(arguments);

        this.add([
        {xtype: 'summary'},
        {xtype: 'finance'},
        {xtype: 'asset'},
        {xtype: 'customer'},
        {xtype: 'cci'},
        {xtype: 'cbi'},
        {xtype: 'wty'},
        {xtype: 'mvi'},
        {xtype: 'aftermarket'}
        ]);
    }

});