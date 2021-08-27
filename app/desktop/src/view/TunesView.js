Ext.define('ModrenTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    cls: 'tunes-view',

    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    //(apply the css foreach record)
    itemTpl: [
        //add the same formate to every record
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});
// Ext.define('ModrenTunes.view.TunesView', {
//     extend: 'Ext.dataview.DataView',
//     xtype: 'tunesview',
//     scrollable: true,
//     cls: 'tunes-view',
//     layout: {
//         type: 'box',
//         pack: 'space-around',
//         wrap: true
//     },
//     itemCls: 'video',
//     itemTpl: [
//         '<figure>',
//         '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
//         '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
//         '</figure>'
//     ]
// });