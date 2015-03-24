knowledgebasePlugin.zendesk.category = ( function(module, util, undefined) {
  module.CreateCategory = function ( category ) {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += '/api/v2/help_center/categories.json';
    ajaxOptions.type = 'POST';
    ajaxOptions.data = category;

    return util.ajax(ajaxOptions);
  }

  return module;
}( knowledgebasePlugin.zendesk.category || {}, knowledgebasePlugin.util ) );
