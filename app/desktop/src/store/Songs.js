// Ext.define('ModrenTunes.store.Songs', {
//     extend: 'Ext.data.Store',

//    alias: 'store.Songs',

//     model: 'ModrenTunes.model.Songs',

//     data: { items: [
//         { artist:'Bobby', title: "samajavaragamana"},
//         //{ name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
//       //  { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
//         //{ name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
//     ]},

//     proxy: {
//         type: 'ajax',
//         reader: {
//             type: 'json',
//             rootProperty: 'favsongs',
//             url:'http://localhost:3000/favsongs'
//         }
//     }
// });
Ext.define('ModrenTunes.store.Songs', {
    extend: 'Ext.data.Store',
    
      alias: 'store.songs',
model: 'ModrenTunes.model.Songs',

proxy: {
  type:'ajax',
  url:'http://localhost:3000/favsongs',
  reader:{
  type: 'json',
      rootProperty: 'favsongs',
     
  }
  
},
autoLoad: true
});