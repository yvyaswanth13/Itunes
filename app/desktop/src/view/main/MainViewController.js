// Ext.define('ModrenTunes.view.main.MainViewController', {
//   extend: 'Ext.app.ViewController',
//   alias: 'controller.mainviewcontroller',
//   requires: [
//     'ModernTunes.view.Preview'
// ],

//   onThumbSelect: function(thumbs, record) {
//    console.log(record.data.artist);
//   this.onShowPreview(record);
// },

// onGridSelect: function(grid, records) {
//     console.log(records[0].data.artist);
//     this.onShowPreview(records[0]);
//   },
// onShowPreview: function (record) {
//   var vid = Ext.create({ 
//       xtype: 'preview'
//   });
//   vid.show();
// }
//});
Ext.define('ModrenTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  requires: [
      'ModrenTunes.view.Preview'
  ],

  onShowPreview: function(record) {

      if (this.getView().down('video')) {
          return;
      }
      var videoConfig = { // instance of the video
          xtype: 'video',
          url: record.data.preview,
          posterUrl: record.data.image
      };
      var linkConfig = { // instance of the anchor/link back to iTunes
          docked: 'bottom',
          xtype: 'component',
          tpl: [
              '<a href="{itunesstore}" target="itunes_store">',
              '<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Download_on_iTunes.svg" style="margin: 16px; display: block; margin-left: auto; margin-right: auto; width: 75px;">',
              '</a>'
          ],
          data: {
              itunesstore: record.data.itunesstore
          }
      };
      var containerConfig = { // parent container of the video and the anchor/link
          xtype: 'container',
          title: record.data.title + ' — ' + record.data.artist,
          style: '{background-color: black;}',
          layout: 'fit',
          items: [
              videoConfig,
              linkConfig
          ]
      };
      var vid = Ext.create({ // instance of the Preview Dialog class displaying the container
          xtype: 'preview',
          title: record.data.title,
          layout: 'fit',
          items: [containerConfig],
      });
      vid.show();
  },

  onThumbSelect: function(thumbs, record) {
      this.onShowPreview(record);
  },

  onGridSelect: function(grid, records) {
      this.onShowPreview(records[0]);
  }
});
