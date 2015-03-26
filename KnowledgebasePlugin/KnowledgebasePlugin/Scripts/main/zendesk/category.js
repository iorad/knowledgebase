var ZendeskCategory = function ()
{
  // name must not be empty.
  this.id = 0;
  this.name = '';
  this.description = '';
  this.locale = 'en-us';
  this.source_locale = '';
  this.url = '';
  this.html_url = '';
  this.outdated = false;
  this.position = 0;
  this.created_at = '';
  this.updated_at = '';
};

knowledgebasePlugin.zendesk.category = ( function ( module, util, undefined )
{
  var CATEGORIES_API_URL = '/api/v2/help_center/categories.json';
  var CATEGORY_API_URL = '/api/v2/help_center/categories/{id}.json';

  // Note that only help center manager can do so.
  module.createCategory = function ( category )
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORIES_API_URL;
    ajaxOptions.method = 'POST';
    ajaxOptions.data = category;

    return util.ajax( ajaxOptions );
  };

  module.listCategories = function ()
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORIES_API_URL;
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  //categoryId expect a string representation of a category id
  module.showCategory = function ( categoryId )
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORY_API_URL.replace( '{id}', categoryId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  }

  return module;
}( knowledgebasePlugin.zendesk.category || {}, knowledgebasePlugin.util ) );
