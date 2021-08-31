Ext.define('ModrenTunes.view.FavSongs', {
    extend: 'Ext.grid.Grid',
    xtype: 'favsongs',
    store:{type:'songs'},
  
  
    //cls: '',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*',
        'ModrenTunes.store.Songs',
      // ' ModrenTunes.view.FavList'
    ],
  //  title: 'Person',


    defaults: {
        height: 54
    },

 
  
 items:[{
 xtype:'button',
    text: 'Add-Fav',
  handler:function(){ 
pop=Ext.create('ModrenTunes.view.FavList');
 pop.show()
console.warn('ok')
   // Ext.Msg.alert('message added');
           
         
  }
 }],
    columns: [{
        text: 'Artist',
        dataIndex: 'artist',
        flex: 1
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }]
});
// var myForm = new Ext.form.Panel({
//     width: 500,
//     height: 400,
//     title: 'Foo',
//     floating: true,
//     closable : true,
//     closeAction: 'hide'
// });
// //myForm.show();

// Ext.create('Ext.Button', {
// text: 'Click Me',
// renderTo: Ext.FavSongs(),
// listeners: {
//     click: function() {
//         alert
//        myForm.show();
//     }
// }
// });