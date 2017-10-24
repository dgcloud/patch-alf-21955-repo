<import resource="classpath:/alfresco/templates/webscripts/org/alfresco/slingshot/documentlibrary-v2/evaluator.lib.js">
<import resource="classpath:/alfresco/extension/templates/webscripts/org/alfresco/slingshot/documentlibrary-v2/filters.lib.js">
<import resource="classpath:/alfresco/templates/webscripts/org/alfresco/slingshot/documentlibrary-v2/parse-args.lib.js">
<import resource="classpath:/alfresco/templates/webscripts/org/alfresco/slingshot/documentlibrary-v2/doclist.lib.js">

/**
 * The only change inside this file is the import of the custom filters.lib.js file
 */

/**
 * Document List Component: doclist
 */
model.doclist = doclist_main();