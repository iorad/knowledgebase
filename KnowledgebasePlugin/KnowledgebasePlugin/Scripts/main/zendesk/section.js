var ZendeskSection = function() {
  // name must not be empty
  this.id = 0;
  this.name = '';
  this.description = '';
  this.locale = 'en-us';
  this.source_locale = '';
  this.url = '';
  this.html_url = '';
  this.category_id = 0;
  this.outdated = false;
  this.position = 0;
  this.created_at = '';
  this.updated_at = '';
};

knowledgebasePlugin.zendesk.section = ( function ( module, util, undefined )
{
  var SECTIONS_API_URL = '/api/v2/help_center/categories/{id}/sections.json';

  module.listSections = function(categoryId) {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += SECTIONS_API_URL.replace( '{id}', categoryId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  module.createSection = function(categoryId, section) {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += SECTIONS_API_URL.replace('{id}', categoryId.toString());
    ajaxOptions.method = 'POST';
    ajaxOptions.data = section;
  };

  return module;
}(knowledgebasePlugin.zendesk.section || {}, knowledgebasePlugin.util));