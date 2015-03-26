knowledgebasePlugin.util = ( function ( module, jQuery, Q, config, undefined )
{
  /* Wrap jQuery.ajax with Q for .then() promises */
  module.ajax = function ( options )
  {
    return Q( jQuery.ajax( options ) );
  };

  module.zendeskOAuthOption = function () {
    return {
      url: config.zendesk.rootUri,
      dataType: 'json',
      beforeSend: function ( xhr )
      {
        xhr.setRequestHeader( "Authorization", "Bearer " + config.zendesk.token );
      }
    };
  };

  return module;
}( knowledgebasePlugin.util || {}, jQuery, Q, knowledgebasePlugin.config ) );
