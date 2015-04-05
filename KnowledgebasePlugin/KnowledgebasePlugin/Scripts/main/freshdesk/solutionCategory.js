knowledgebasePlugin.freshdesk.solutionCategory = ( function(module, util, undefined) {
  var SOLUTION_CATEGORIES_API_URL = '/solution/categories.json';
  var SOLUTION_CATEGORY_API_URL = '/solution/categories/{id}.json';

  /**
   * view all categories
   */
  module.listCategories = function () {
    var ajaxOptions = util.freshdeskAjaxOption();
    ajaxOptions.type = 'GET';
    ajaxOptions.url += SOLUTION_CATEGORIES_API_URL;
    ajaxOptions.complete = function(data) { console.log(data);
      debugger;
    };
    return util.ajax( ajaxOptions );
  };

  module.listCategoriesCallback = function ( data ) {
    debugger;
    console.log('I got here.');
  };

  /**
   * view category
   * expect a category id in string or integer format.
   */
  module.showCategory = function ( categoryId ) {
    var ajaxOptions = util.freshdeskAjaxOption();
    ajaxOptions.method = 'GET';
    ajaxOptions.url += SOLUTION_CATEGORY_API_URL.replace( '{id}', categoryId.toString() );

    return util.ajax( ajaxOptions );
  };

  /**
   * create solution category.
   * expect a solution category object.
   */
  module.createCategory = function ( category ) {
    var ajaxOptions = util.freshdeskAjaxOption();
    var data = { "category": category };

    ajaxOptions.method = 'POST';
    ajaxOptions.url += SOLUTION_CATEGORIES_API_URL;
    ajaxOptions.data = JSON.stringify(data);

    return util.ajax( ajaxOptions );
  };

  return module;
}( knowledgebasePlugin.freshdesk.solutionCategory || {}, knowledgebasePlugin.util ) );
