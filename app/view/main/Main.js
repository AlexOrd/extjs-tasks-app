/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TasksApp.view.main.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TasksApp.view.main.MainController',
        'TasksApp.view.main.MainModel',
        'TasksApp.view.main.List',
        'TasksApp.view.main.FieldSet',
        'TasksApp.model.Task'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'column',

    items: [
        {
        xtype: 'mainlist',
    },
    {
        xtype: 'tasksfieldset',
        bind: {
            disabled: '{isButtonDisabled}'
        }
    }
]
});
