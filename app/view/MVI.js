/*
 * File: app/view/MVI.js
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

Ext.define('MyApp.view.MVI', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mvi',

    config: {
        ui: 'light',
        iconCls: 'insurance',
        title: 'MVI',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 80,
                ui: 'light',
                items: [
                    {
                        xtype: 'label',
                        height: 31,
                        html: 'MVI',
                        padding: 5,
                        width: 113
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 99,
                        icon: 'images/cancel.png',
                        iconCls: 'cancel',
                        text: 'Cancel',
                        action: 'CancelAction'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 94,
                        icon: 'images/save.png',
                        iconCls: 'save',
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 94,
                        icon: 'images/print.png',
                        iconCls: 'print',
                        text: 'Print'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 95,
                        icon: 'images/next1.png'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'contentBG'
                ],
                html: '',
                items: [
                    {
                        xtype: 'toolbar',
                        cls: [
                            'topRoundCorners'
                        ],
                        docked: 'top',
                        height: 30,
                        ui: 'light',
                        width: '100%',
                        items: [
                            {
                                xtype: 'label',
                                html: 'Comprehensive Insurer',
                                padding: 5
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 8
                    },
                    {
                        xtype: 'panel',
                        height: 46,
                        items: [
                            {
                                xtype: 'selectfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                width: 375,
                                inputCls: 'textBlack',
                                label: 'Insurer Name:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%',
                                options: [
                                    {
                                        value: 'null',
                                        text: 'Select'
                                    },
                                    {
                                        value: 'AAMI',
                                        text: 'AAMI'
                                    },
                                    {
                                        value: 'ABC',
                                        text: 'ABC Insurance'
                                    },
                                    {
                                        value: 'ALLIANZ',
                                        text: 'ALLIANZ AUSTRALIA Insurance Limited'
                                    }
                                ]
                            },
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 23,
                                width: 20
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 46,
                                width: 347,
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Insurance Policy Nuamber: ',
                                labelCls: 'normalLabelText',
                                labelWidth: '60%'
                            },
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 25,
                                width: 18
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 5
                    },
                    {
                        xtype: 'panel',
                        height: 46,
                        items: [
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 25,
                                width: 395
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 46,
                                width: 347,
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Premium:     $',
                                labelCls: 'normalLabelText',
                                labelWidth: '60%',
                                value: 0
                            },
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 25,
                                width: 18
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 5
                    },
                    {
                        xtype: 'panel',
                        height: 46,
                        items: [
                            {
                                xtype: 'datepickerfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                width: 375,
                                inputCls: 'textBlack',
                                label: 'Renewal Date:',
                                labelCls: 'normalLabelText',
                                labelWidth: '40%',
                                placeHolder: 'mm/dd/yyyy'
                            },
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 23,
                                width: 21
                            },
                            {
                                xtype: 'numberfield',
                                cls: [
                                    'normalRoundCorner'
                                ],
                                docked: 'left',
                                height: 46,
                                width: 347,
                                clearIcon: false,
                                inputCls: 'textBlack',
                                label: 'Commission: $',
                                labelCls: 'normalLabelText',
                                labelWidth: '60%',
                                value: 0
                            },
                            {
                                xtype: 'spacer',
                                docked: 'left',
                                height: 25,
                                width: 18
                            },
                            {
                                xtype: 'label',
                                docked: 'left',
                                html: '*excluding GST'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});