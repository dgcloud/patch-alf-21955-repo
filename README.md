
Alfresco Patch to Documents being edited using Google Docs integration are not returned by "Documents I am editing"
===================================================================================================================

Described at issue [ALF-21955](https://issues.alfresco.com/jira/browse/ALF-21955)

**Description**

When the Google Docs integration is deployed, the documents being edited by users are not returned by the searches executed by Share.

This patch changes the queries in 3 different places:
Dashlets My Documents and Site Acitivities
Document Library's treeview, filters I'm Editing and Others Are Editing.

**License**
The plugin is licensed under the [LGPL v3.0](http://www.gnu.org/licenses/lgpl-3.0.html).

**State**
Current patch release is 1.0

**Compatibility**
The current version has been developed using Alfresco 201704 and Alfresco SDK 3.0.1

***No original Alfresco resources have been overwritten***

Downloading the ready-to-deploy-plugin
--------------------------------------
The binary distribution is made of one amp file to be deployed in Alfresco as a repo module at releases tab.

You can install them by using standard Alfresco deployment tools in alfresco.war


Building the artifacts
----------------------
You can build the artifacts from source code using maven
```$ mvn clean package```