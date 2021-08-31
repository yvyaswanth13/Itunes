// Ext.define('ModrenTunes.view.main.MainView', {
//   extend: 'Ext.Container',
//   xtype: 'mainview',
//   controller: 'mainviewcontroller',
//   viewModel: {
//     type: 'mainviewmodel'
//   },
//   items: [
//     {
//       xtype: 'component',
//       html: '<a style="font-size:24px" target="_blank" href="https://docs-devel.sencha.com/extjs/7.0.0-CE/guides/quick_start/What_You_Will_Be_Coding.html">Quick Start Tutorial Here</a><p>'
//     },
//     {
//       xtype: 'displayfield',
//       reference: 'df',
//       bind: {
//         value: '{clickTime}'
//       }
//     },
//     {
//       xtype: 'button',
//       text: 'Click Me!',
//       handler: 'onButtonClick'
//     }
//   ]
// })
// Ext.define('ModrenTunes.view.main.MainView', {
//   extend: 'Ext.tab.Panel',
//   xtype: 'mainview',
//   controller: 'mainviewcontroller',
//   viewModel: {
//       type: 'mainviewmodel'
//   },
//   tabBarPosition: 'bottom',
//   items: [{
//       title: "Thumbnails",
//       html: '<h1>tunes view</h1'
//   }, {
//       title: "Grid",
//       html: '<h1>tunes grid</h1>'
//   }]
// })
Ext.define("ModrenTunes.view.main.MainView", {
  extend: "Ext.tab.Panel",
  xtype: 'mainview',
  requires: [
      'ModrenTunes.view.main.MainViewController',
      'ModrenTunes.view.main.MainViewModel',
      'ModrenTunes.view.TunesView'
  ],
  controller: "mainviewcontroller",
  viewModel: {
      type: "mainviewmodel"
  },

  tabBarPosition: 'bottom',

  items: [{
      title: "Thumbnails",
      xtype: 'tunesview',
      listeners: {
        select: 'onThumbSelect'//video
    },
      bind: {
          store: '{tunes}'
      }
  }, {
      title: "Grid",
      xtype: 'tunesgrid',
      listeners: {
        select: 'onGridSelect'//video
    },
      bind: {
        store: '{tunes}'
    }
  },
  {
    title: "FavList",
    xtype: 'favsongs',
    listeners: {
      select: 'onGridSelect'//video
  },
    bind: {
      store: '{favs}'
  }
  
}]
});
