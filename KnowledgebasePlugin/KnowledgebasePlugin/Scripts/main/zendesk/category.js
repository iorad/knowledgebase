knowledgebasePlugin.zendesk.category = ( function ( module, util, undefined ) {
  var CATEGORY_API_URL = '/api/v2/help_center/categories.json';
  
  // Note that only help center manager can do so.
  module.CreateCategory = function(category) {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORY_API_URL;
    ajaxOptions.method = 'POST';
    ajaxOptions.data = category;

    return util.ajax(ajaxOptions);
  };

  module.ListCategories = function() {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORY_API_URL;
    ajaxOptions.method = 'GET';

    return util.ajax(ajaxOptions);
  };

  return module;
}( knowledgebasePlugin.zendesk.category || {}, knowledgebasePlugin.util ) );
