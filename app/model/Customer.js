/*
 * File: app/model/Customer.js
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

Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',
    alias: 'model.Customer',
    uses: [
        'MyApp.model.ContactInformation'
    ],
    config: {
        fields: [
            {
                name: 'addressComplex',
                type: 'auto'
            },
            {
                name: 'customerID',
                type: 'string'
            },
            {
                dateFormat: '\'\'',
                name: 'customerIndicator',
                type: 'string'
            },
            {
                defaultValue: '',
                name: 'approvalNumber',
                type: 'string'
            },
            {
                defaultValue: 'N',
                name: 'approvalRejectionIndicator',
                type: 'string'
            },
            {
                name: 'approvalComments',
                type: 'string'
            },
            {
                defaultValue: '',
                name: 'customerType',
                type: 'string'
            },
            {
                defaultValue: '',
                name: 'guarantorIndicator',
                type: 'string'
            },
            {
                defaultValue: '',
                name: 'mainIndicator',
                type: 'string'
            }
        ],
        hasOne: {
            model: 'MyApp.model.ContactInformation',
            name: 'contactInformation'
        }
    },

    initCustomer: function(arr,obj,i) {

    }

});