/*
 * File: app/view/CBI.js
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

Ext.define('MyApp.view.CBI', {
    extend: 'Ext.form.Panel',
    alias: 'widget.cbi',

    config: {
        ui: 'light',
        iconCls: 'insurance',
        title: 'CBI',
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
                        html: 'CBI',
                        padding: 5,
                        width: 113
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 92,
                        icon: 'images/cancel.png',
                        iconCls: 'cancel',
                        text: 'Cancel',
                        action: 'CancelAction'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 92,
                        icon: 'images/save.png',
                        iconCls: 'save',
                        text: 'Save'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 91,
                        icon: 'images/print.png',
                        iconCls: 'print',
                        text: 'Print'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        width: 86,
                        icon: 'images/next1.png'
                    }
                ]
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'container',
                height: 45,
                items: [
                    {
                        xtype: 'selectfield',
                        cls: [
                            'normalRoundCorner'
                        ],
                        docked: 'left',
                        height: 45,
                        width: 230,
                        inputCls: 'textBlack',
                        label: 'Badge:',
                        labelCls: 'normalLabelText',
                        labelWidth: '50%',
                        options: [
                            {
                                value: 'A',
                                text: 'A'
                            },
                            {
                                value: 'M',
                                text: 'M'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 10
                    },
                    {
                        xtype: 'numberfield',
                        cls: [
                            'normalRoundCorner'
                        ],
                        docked: 'left',
                        height: 45,
                        width: 230,
                        inputCls: 'textBlack',
                        label: 'Premium: $',
                        labelCls: 'normalLabelText',
                        labelWidth: '45%'
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 8
                    },
                    {
                        xtype: 'label',
                        docked: 'left',
                        height: 45,
                        html: ' Total Payable Premium:'
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 10
                    },
                    {
                        xtype: 'label',
                        docked: 'left',
                        html: '0.0 ',
                        width: 42
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 5
                    },
                    {
                        xtype: 'image',
                        docked: 'left',
                        height: 25,
                        html: '',
                        width: 74,
                        src: 'images/statusfalse.png'
                    }
                ]
            },
            {
                xtype: 'container',
                height: 5
            },
            {
                xtype: 'container',
                height: 45,
                items: [
                    {
                        xtype: 'numberfield',
                        cls: [
                            'normalRoundCorner'
                        ],
                        docked: 'left',
                        height: 45,
                        width: 230,
                        inputCls: 'textBlack',
                        label: 'Loan Contract No:',
                        labelCls: 'normalLabelText',
                        labelWidth: '65%'
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 10
                    },
                    {
                        xtype: 'numberfield',
                        cls: [
                            'normalRoundCorner'
                        ],
                        docked: 'left',
                        height: 45,
                        width: 230,
                        inputCls: 'textBlack',
                        label: 'Insure Term(mnths)',
                        labelCls: 'normalLabelText',
                        labelWidth: '70%'
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 10
                    },
                    {
                        xtype: 'label',
                        docked: 'left',
                        html: 'Standard Cover:'
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 15
                    },
                    {
                        xtype: 'label',
                        docked: 'left',
                        html: '0.0 ',
                        width: 70
                    }
                ]
            },
            {
                xtype: 'container',
                height: 10
            },
            {
                xtype: 'container',
                height: 45,
                items: [
                    {
                        xtype: 'toolbar',
                        cls: [
                            'topRoundCorners',
                            'whiteBorder'
                        ],
                        docked: 'top',
                        height: 45,
                        ui: 'light',
                        width: '100%',
                        items: [
                            {
                                xtype: 'label',
                                height: 45,
                                html: 'CBI',
                                padding: 5,
                                width: 53
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: [
                    'contentBG',
                    'bottomRound'
                ],
                height: 300,
                padding: '',
                items: [
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        width: 20
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'contentBG'
                        ],
                        docked: 'left',
                        height: 282,
                        width: 250,
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'toolbar',
                                cls: [
                                    'topRoundCorners'
                                ],
                                docked: 'top',
                                ui: 'light',
                                items: [
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'OPTION'
                                    }
                                ]
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: 1,
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'cbiOptions',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: 2,
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'cbiOptions'
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: 3,
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'cbiOptions'
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: 4,
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'cbiOptions'
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: 'None',
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'cbiOptions'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        docked: 'left',
                        height: 10,
                        width: 30
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'contentBG'
                        ],
                        docked: 'left',
                        height: 196,
                        padding: '',
                        width: 250,
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'toolbar',
                                cls: [
                                    'topRoundCorners'
                                ],
                                docked: 'top',
                                ui: 'light',
                                items: [
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Cover Term',
                                        width: 176
                                    }
                                ]
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: '3 yrs',
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'coverterm',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: '4 yrs',
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'coverterm'
                            },
                            {
                                xtype: 'radiofield',
                                cls: [
                                    'textBlack'
                                ],
                                label: '5 yrs',
                                labelAlign: 'right',
                                labelWidth: '75%',
                                name: 'coverterm'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});