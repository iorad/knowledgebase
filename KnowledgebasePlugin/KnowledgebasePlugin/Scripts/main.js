/*
 * So basically the idea is that everything goes into the knowledgebasePlugin namespace.
 */
var knowledgebasePlugin = ( function ( module, undefined )
{
  module.desk = {};
  module.zendesk = {};
  module.freshdesk = {};
  module.config = {};
  module.util = {};
  module.templates = {};

  return module;
}( knowledgebasePlugin || {} ) );

knowledgebasePlugin.templates = {
  ZendeskAuthenticationForm: function() {
    var template = JST['templates/authentication/ZendeskAuthenticationForm.hbs'];
    var formInfo = {
      client_id    : knowledgebasePlugin.config.zendesk.clientId,
      redirect_uri : knowledgebasePlugin.config.zendesk.redirectUri
    };

    return template(formInfo);
  }
};