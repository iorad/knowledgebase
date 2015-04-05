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
      beforeSend: function ( xhr ) {
        xhr.setRequestHeader( "Authorization", "Bearer " + config.zendesk.token );
      }
    };
  };

  module.freshdeskAjaxOption = function() {
    return {
      url: config.freshdesk.rootUri,
      dataType: 'jsonp',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Basic ' + btoa( config.freshdesk.apiKey + ':X' ),
      },
      crossDomain: true,
      username: config.freshdesk.apiKey,
      password: 'X',
      async: false
    };
  };

  return module;
}( knowledgebasePlugin.util || {}, jQuery, knowledgebasePlugin.config ) );
