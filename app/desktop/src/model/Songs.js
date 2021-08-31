Ext.define('ModrenTunes.model.Songs', {
    extend: 'Ext.data.Model',
  //  extend: 'ModrenTunes.model.Base',

    fields: [
       {artist: 'artist',
       mapping: 'favsongs.artist'
    }, {
        title:'title',
    mapping: 'favsongs.title'
}
    ]

//mapping is optional here!
});
