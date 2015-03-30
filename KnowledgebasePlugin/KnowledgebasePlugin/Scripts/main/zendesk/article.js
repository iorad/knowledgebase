var ZendeskArticle = function ()
{
  // title must not be empty
  this.id = 0;
  this.url = '';
  this.html_url = '';
  this.title = '';
  this.body = '';
  this.locale = 'en-us';
  this.source_locale = '';
  this.author_id = 0;
  this.comments_disabled = false;
  this.outdated = false;
  this.label_names = '';
  this.draft = true;
  this.promoted = false;
  this.position = 0;
  this.vote_sum = 0;
  this.vote_count = 0;
  this.section_id = 0;
  this.created_at = '';
  this.updated_at = '';
};

knowledgebasePlugin.zendesk.article = ( function ( module, util, undefined )
{
  var ARTICLES_API_URL = '/api/v2/help_center/articles.json';
  var ARTICLE_API_URL = '/api/v2/help_center/articles/{id}.json';
  var SECTION_ARTICLES_API_URL = '/api/v2/help_center/sections/{id}/articles.json';
  var CATEGORY_ARTICLES_API_URL = '/api/v2/help_center/categories/{id}/articles.json';
  var USER_ARTICLES_API_URL = '/api/v2/help_center/users/{id}/articles.json';
  var BULK_ATTACHMENTS_API_URL = '/api/v2/help_center/articles/{id}/bulk_attachments.json';

  module.listArticles = function ()
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += ARTICLES_API_URL;
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  module.listArticlesUnderSection = function ( sectionId )
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += SECTION_ARTICLES_API_URL.replace( '{id}', sectionId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  module.listArticlesUnderCategory = function ( categoryId )
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += CATEGORY_ARTICLES_API_URL.replace( '{id}', categoryId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  module.listArticlesUnderUser = function ( userId )
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += USER_ARTICLES_API_URL.replace( '{id}', userId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  module.showArticle = function (articleId)
  {
    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += ARTICLE_API_URL.replace( '{id}', articleId.toString() );
    ajaxOptions.method = 'GET';

    return util.ajax( ajaxOptions );
  };

  // expect a ZendeskArticle object JSON stringified.
  module.createArticle = function(sectionId, article) {
    var ajaxOptions = util.zendeskOAuthOption();
    var articleData = { article: article };

    ajaxOptions.url += SECTION_ARTICLES_API_URL.replace( '{id}', sectionId.toString() );
    ajaxOptions.method = 'POST';
    ajaxOptions.data = JSON.stringify(articleData);

    return util.ajax( ajaxOptions );
  };

  // expect an article object.
  //The endpoints do not update translation properties such as the article's title or body
  module.updateArticle = function(article) {
    var ajaxOptions = util.zendeskOAuthOption();
    var articleData = { article: article };

    ajaxOptions.url += ARTICLE_API_URL.replace('{id}', article.id.toString());
    ajaxOptions.method = 'PUT';
    
    ajaxOptions.data = JSON.stringify( articleData );
    
    return util.ajax( ajaxOptions );
  }

  // sample attachmentIds format: '{"attachment_ids": [10002, ...]}'
  module.associateBulkAttachments = function(articleId, attachmentIds) {

    var ajaxOptions = util.zendeskOAuthOption();
    ajaxOptions.url += BULK_ATTACHMENTS_API_URL.replace( '{id}', articleId );
    ajaxOptions.method = 'PUT';
    ajaxOptions.data = attachmentIds;

    return util.ajax( ajaxOptions );
  };

  return module;
}( knowledgebasePlugin.zendesk.article || {}, knowledgebasePlugin.util ) );
