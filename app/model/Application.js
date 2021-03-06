/*
 * File: app/model/Application.js
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

Ext.define('MyApp.model.Application', {
    extend: 'Ext.data.Model',
    alias: 'model.Application',
    uses: [
        'MyApp.model.ApplicationStatusCode',
        'MyApp.model.CBIPremium',
        'MyApp.model.EPIPremium',
        'MyApp.model.EPIPremium',
        'MyApp.model.LTPPremium',
        'MyApp.model.LTPPremium',
        'MyApp.model.EWPremium',
        'MyApp.model.EWPremium',
        'MyApp.model.ApplicationFinanceCompany',
        'MyApp.model.AgentSalePerson',
        'MyApp.model.CCIPremium',
        'MyApp.model.ApplicationFinanceCompany',
        'MyApp.model.Fee',
        'MyApp.model.Finance',
        'MyApp.model.CustomerCorporate',
        'MyApp.model.CustomerIndividual',
        'MyApp.model.CustomerIndividual',
        'MyApp.model.CCIPremium',
        'MyApp.model.CCIPremium',
        'MyApp.model.CCIPremium',
        'MyApp.model.MVPremium',
        'MyApp.model.MEPIPremium',
        'MyApp.model.DealData',
        'MyApp.model.CBIPremium',
        'MyApp.model.MEPIPremium',
        'MyApp.model.OtherInsurance',
        'MyApp.model.VIPPremium',
        'MyApp.model.VIPPremium'
    ],
    config: {
        fields: [
            {
                name: 'agentID',
                type: 'string'
            },
            {
                name: 'fsgID',
                type: 'string'
            },
            {
                name: 'applicationID',
                type: 'string'
            },
            {
                defaultValue: 'Q',
                name: 'applicationIndicator',
                type: 'string'
            },
            {
                name: 'departmentID',
                type: 'string'
            },
            {
                name: 'policyNumber',
                type: 'string'
            },
            {
                name: 'version',
                type: 'int'
            },
            {
                name: 'businessManagerID',
                type: 'string'
            },
            {
                name: 'cciDiscountAmount',
                type: 'int'
            },
            {
                name: 'financeProductID',
                type: 'string'
            },
            {
                name: 'cciPremium',
                type: 'auto'
            },
            {
                name: 'loanContractNumber',
                type: 'string'
            },
            {
                name: 'loanStartDate',
                type: 'date'
            },
            {
                name: 'creationDate',
                type: 'date'
            },
            {
                name: 'externalApplicationNumber',
                type: 'string'
            },
            {
                name: 'versionNumber',
                type: 'int'
            },
            {
                defaultValue: 'F',
                name: 'insuranceOnlyIndicator',
                type: 'string'
            },
            {
                defaultValue: 0,
                name: 'epiDiscountAmount',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'mepiDiscountAmount',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'cbiDiscountAmount',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'ewDiscountAmount',
                type: 'int'
            },
            {
                name: 'commentText',
                type: 'string'
            },
            {
                name: 'conversionComment',
                type: 'string'
            },
            {
                defaultValue: false,
                name: 'cciPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'cbiPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'epiPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'mepiPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'wtyPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'wtyrPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'vipPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'tnwPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: false,
                name: 'ltpPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: 'U',
                name: 'cbiUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'cciUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'epiUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'mepiUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'wtyUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'vipUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'tnwUnderwrittenIndicator',
                type: 'string'
            },
            {
                defaultValue: 'U',
                name: 'ltpUnderwrittenIndicator',
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
                defaultValue: false,
                name: 'fastPrintIndicator',
                type: 'boolean'
            },
            {
                defaultValue: '',
                name: 'loanInNameOf',
                type: 'string'
            },
            {
                name: 'rateSetID',
                type: 'int'
            },
            {
                name: 'applicationIDFrom',
                type: 'string'
            },
            {
                name: 'archiveIndicator',
                type: 'string'
            },
            {
                name: 'compositeLiteIndicator',
                type: 'boolean'
            },
            {
                name: 'createdByWS',
                type: 'boolean'
            },
            {
                defaultValue: 0,
                name: 'referenceNumber',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'tpRetailPrice',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'tpCommissionAmount',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'totalCommissionAmount',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'insCommissionAmount',
                type: 'int'
            },
            {
                name: 'defaultBMStateCode',
                type: 'string'
            },
            {
                defaultValue: 0,
                name: 'cash',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'creditCard',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'cheque',
                type: 'int'
            },
            {
                defaultValue: '',
                name: 'forPurpose',
                type: 'string'
            },
            {
                name: 'customerProfileType',
                type: 'string'
            },
            {
                defaultValue: '',
                name: 'saleType',
                type: 'string'
            },
            {
                name: 'locumID',
                type: 'string'
            },
            {
                defaultValue: 0,
                name: 'marginRate',
                type: 'int'
            },
            {
                name: 'menuSellingProfile',
                type: 'auto'
            }
        ],
        hasOne: [
            {
                model: 'MyApp.model.ApplicationStatusCode',
                name: 'applicationStatusCode'
            },
            {
                model: 'MyApp.model.CBIPremium',
                name: 'cbiPremium'
            },
            {
                model: 'MyApp.model.EPIPremium',
                name: 'epiPremium'
            },
            {
                model: 'MyApp.model.EPIPremium',
                name: 'extraEPIPremiumTAS'
            },
            {
                model: 'MyApp.model.LTPPremium',
                name: 'extraLTPPremiumTAS'
            },
            {
                model: 'MyApp.model.LTPPremium',
                name: 'ltpPremium'
            },
            {
                model: 'MyApp.model.EWPremium',
                name: 'ewPremium'
            },
            {
                model: 'MyApp.model.EWPremium',
                name: 'tnwPremium'
            },
            {
                model: 'MyApp.model.ApplicationFinanceCompany',
                name: 'applicationFinanceCompany'
            },
            {
                model: 'MyApp.model.AgentSalePerson',
                name: 'salePerson'
            },
            {
                model: 'MyApp.model.CCIPremium',
                name: 'disabilityCCIPremium'
            },
            {
                model: 'MyApp.model.ApplicationFinanceCompany',
                name: 'applicationPremiumFinanceCompany'
            },
            {
                model: 'MyApp.model.Fee',
                name: 'fee'
            },
            {
                model: 'MyApp.model.Finance',
                name: 'finance'
            },
            {
                model: 'MyApp.model.CustomerCorporate',
                name: 'customerCorporate'
            },
            {
                model: 'MyApp.model.CustomerIndividual',
                name: 'customerIndividualOne'
            },
            {
                model: 'MyApp.model.CustomerIndividual',
                name: 'customerIndividualTwo'
            },
            {
                model: 'MyApp.model.CCIPremium',
                name: 'involUnEmploymentCCIPremium'
            },
            {
                model: 'MyApp.model.CCIPremium',
                name: 'lifeCCIPremium'
            },
            {
                model: 'MyApp.model.CCIPremium',
                name: 'traumaCCIPremium'
            },
            {
                model: 'MyApp.model.MVPremium',
                name: 'mvPremium'
            },
            {
                model: 'MyApp.model.MEPIPremium',
                name: 'mepiPremium'
            },
            {
                model: 'MyApp.model.DealData',
                name: 'dealData'
            },
            {
                model: 'MyApp.model.CBIPremium',
                name: 'extraCBIPremiumTAS'
            },
            {
                model: 'MyApp.model.MEPIPremium',
                name: 'extraMEPIPremiumTAS'
            },
            {
                model: 'MyApp.model.OtherInsurance',
                name: 'otherInsurance'
            },
            {
                model: 'MyApp.model.VIPPremium',
                name: 'vipPremium'
            },
            {
                model: 'MyApp.model.VIPPremium',
                name: 'extraVIPPremiumTAS'
            }
        ]
    }
});