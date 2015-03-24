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

  return module;
}( knowledgebasePlugin || {} ) );
