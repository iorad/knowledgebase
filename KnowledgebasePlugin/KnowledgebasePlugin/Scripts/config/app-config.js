/*
 * This file contains help center plugin's configurations. For example: zendesk oauth client id, freshdesk API token/username password and desk's oauth client id
 */
knowledgebasePlugin.config = ( function ( module, undefined )
{
  module.zendesk = {
    clientId: '{your client_id}',
    reponseType: 'token',
    redirectUri: '{your redirect uri}',
    scope: 'read write',
    rootUri: 'https://{your zendesk domain name}.zendesk.com',
    token: '{access_token}'
  };

  module.freshdesk = { };
  module.desk = { };

  return module;
}( knowledgebasePlugin.config || {} ) );
