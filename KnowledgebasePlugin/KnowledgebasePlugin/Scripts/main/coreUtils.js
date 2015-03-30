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

  return module;
}( knowledgebasePlugin.util || {}, jQuery, knowledgebasePlugin.config ) );
