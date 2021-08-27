// Ext.define('ModrenTunes.view.main.MainViewModel', {
//   extend: 'Ext.app.ViewModel',
//   alias: 'viewmodel.mainviewmodel',
//   data: {
//     clickTime : Date.now()
//   },
//   stores: {
//   }
// })
// Ext.define('ModrenTunes.view.main.MainViewModel', {
//   extend: 'Ext.app.ViewModel',
//   alias: 'viewmodel.mainviewmodel',
//   requires: [
//       'ModrenTunes.model.Tune'
//       ],
//   stores: {
//       tunes: {
//           model: 'ModrenTunes.model.Tune',
//           autoLoad: true
//       }
//   }
// });
Ext.define('ModrenTunes.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
      'ModrenTunes.model.Tune'
      ],
      stores: {
        tunes: {
            model: 'ModrenTunes.model.Tune',
            autoLoad: true,
            sorters: ['artist', 'title']
        }
      }
});
