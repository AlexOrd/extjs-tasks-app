/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TasksApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddNewTask: function() {
        const newTaskForm = this.getView().getForm();

        if (newTaskForm.isValid()) {
            const store = this.getView().lookupReference('tasksGrid').store;
            const taskName = newTaskForm.getValues().name;
            store.add({
                name: taskName,
                status: 'STOPPED'
            });
            Ext.toast(`Created new task. [${taskName}]`);
        } else {
            Ext.Msg.alert('Warning', 'Length for text 1-255.');
        }
    },

    onRemoveTask() {
        const tasksGrid = this.getView().lookupReference('tasksGrid');
        const selectedTasks = tasksGrid.getSelection();
        Ext.Msg.show({
            title:'Delete tasks?',
            message: `Would you like to delete ${selectedTasks.length} task(s)?`,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    tasksGrid.store.remove(selectedTasks);
                    Ext.toast(`Tasks removed.`);
                } else {
                    tasksGrid.setSelection();
                }
            }
        });
    },

    onStartTasks() {
        const tasksGrid = this.getView().lookupReference('tasksGrid');
        const updatedTasks = tasksGrid.getSelection().map((task) => {
            task.status = 'RUNNING';
            return task;
        });
        tasksGrid.store.load(updatedTasks);
    },

    onItemSelected: function (sender, record) {
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    checkDateInterval: function(sender, date) {
        const endDatePicker = this.getView().lookupReference('endDate');
        endDatePicker.setMinValue(date);

        if (date.getTime() > endDatePicker.getValue().getTime()) {
            endDatePicker.setValue(null);
        }
    },

    onSubmit() {
        const store = this.getView().lookupReference('tasksGrid').store;
        const modefiedRecords = store.getModifiedRecords();
        if (modefiedRecords.length > 0) {
            Ext.Msg.show({
                title:'Save Changes?',
                message: 'Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function(btn) {
                    if (btn === 'yes') {
                        store.commitChanges();
                        Ext.toast(`Data saved. Updated ${modefiedRecords.length} record(s).`);
                    } else {
                        Ext.toast('Data is not saved.');
                    }
                }
            });
        } else {
            Ext.Msg.alert('Warning', 'Data is not changed.');
        }
    },

    onCancel() {
        const store = this.getView().lookupReference('tasksGrid').store;
        Ext.Msg.show({
            title:'Save Changes?',
            message: 'Would you like to rejected your changes?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    store.rejectChanges();
                    Ext.toast(`Changes rejected.`);
                } else {
                    Ext.toast('Data is not rejected.');
                }
            }
        });
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
