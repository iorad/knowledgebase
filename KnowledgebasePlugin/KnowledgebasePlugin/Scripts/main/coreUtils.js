knowledgebasePlugin.util = ( function ( module, jQuery, config, undefined )
{
  /* Wrap jQuery.ajax with Q for .then() promises */
  module.ajax = function ( options )
  {
    return jQuery.ajax( options );
  };

  module.zendeskOAuthOption = function () {
    return {
      url: config.zendesk.rootUri,
      dataType: 'json',
      contentType: 'application/json',
      beforeSend: function ( xhr )
      {
        xhr.setRequestHeader( "Authorization", "Bearer " + config.zendesk.token );
      }
    };
  };

  module.knowledgebaseHandleSelectionChanged = function (selectionChangedEvent) {
    var option = $( selectionChangedEvent.originalEvent.srcElement ).val();

    if ( option === 'zendesk' ) {
      $( "#zendesk_authorize" ).submit();
    } else if ( option === 'freshdesk' ) {
      console.log( "Freshdesk not implemented." );
    } else {
      console.log( "Desk not implemented." );
    }
  };

  module.init = function () {
    $( "#endpoint_option" ).change( module.knowledgebaseHandleSelectionChanged );
  };

  return module;
}( knowledgebasePlugin.util || {}, jQuery, knowledgebasePlugin.config ) );
