var ZendeskAuthenticationForm = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿<form action=\" https://ioradtesting1.zendesk.com/oauth/authorizations/new\" id=\"authorize\" method=\"GET\">\r\n    <input type=\"hidden\" name=\"client_id\" value=\""
    + escapeExpression(((helper = (helper = helpers.client_id || (depth0 != null ? depth0.client_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"client_id","hash":{},"data":data}) : helper)))
    + "\" />\r\n    <input type=\"hidden\" name=\"response_type\" value=\"token\" />\r\n    <input type=\"hidden\" name=\"redirect_uri\" value=\""
    + escapeExpression(((helper = (helper = helpers.redirect_uri || (depth0 != null ? depth0.redirect_uri : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"redirect_uri","hash":{},"data":data}) : helper)))
    + "\" />\r\n    <!-- Space separated scope -->\r\n    <input type=\"text\" name=\"scope\" value=\"read write\" />\r\n\r\n    <input type=\"submit\" value=\"Authorize!\" />\r\n</form>\r\n";
},"useData":true});