Ext.define('ModrenTunes.view.FavList', {
extend: "Ext.window.Window",
//alias:'view.favlist',
xtype:'favlist',
height :200,
width:400,
closable: true,
    closeAction: 'hide',
layout:'fit',
items:[{
    xtype:'panel',
    floating: true,
   // closable: true,
    //closeAction: 'hide',
    fullscreen:true,

//layout:'hbox',
defaultType:'textfield',
defaults:{
    flex:1
},	 items:[{
    html:'Add-Fav',
    style:'background-color:white'
},
   
{
           xtype: 'textfield',
           label: 'Artist Name',
           id: 'userid',
           allowBlank:false,
           labelAlign: 'left'
       },
       {
           xtype: 'textfield',
           label: 'Title',
           id: 'passid',
           allowBlank:false,
           labelAlign: 'left'
       },
       {
           xtype: 'button',
           text: 'Add',
           html: 'Add',
           handler: function(){
               Ext.Ajax.request({
                 var: artistname=Ext.getCmp('userid').getValue(),
                 var: titlename=Ext.getCmp('passid').getValue(),

                 url:' http://localhost:3000/favsongs',
               method: 'POST',
                jsonData:{
                  artist: artistname,
                   title: titlename
                   },
                success: function (response){
                    Ext.Msg.alert("Login Successful");
                },
                   failure: function (response){
                       Ext.Msg.alert("Login Failed");
                }
        })
           
       }
   } 
       
       
   ]
}]
});