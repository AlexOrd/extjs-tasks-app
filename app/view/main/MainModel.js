/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TasksApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    formulas: {
        isButtonDisabled: {
            bind: {
                selection: '{tasksGrid.selection}',
                gridSelModel: '{tasksGrid.selModel}'
            },
            get: function (obj) {
                return obj.gridSelModel.getCount() !== 1;
            }
        },

        isSelectedFewTasks: {
            bind: {
                selection: '{tasksGrid.selection}',
                gridSelModel: '{tasksGrid.selModel}'
            },
            get: function (obj) {
                return obj.gridSelModel.getCount();
            }
        },

        isExistStoppedTasks: {
            bind: {
                selection: '{tasksGrid.selection}',
                gridSelModel: '{tasksGrid.selModel}'
            },
            get: function (obj) {
                const selectedStatuses = obj.gridSelModel.selected.items.map((item) => item.data && item.data.status);
                return obj.gridSelModel.getCount() && selectedStatuses.includes('STOPPED');
            }
        },

        isExistStartedTasks: {
            bind: {
                selection: '{tasksGrid.selection}',
                gridSelModel: '{tasksGrid.selModel}'
            },
            get: function (obj) {
                const selectedStatuses = obj.gridSelModel.selected.items.map((item) => item.data && item.data.status);
                return obj.gridSelModel.getCount() && selectedStatuses.includes('RUNNING');
            }
        }
    }
});
