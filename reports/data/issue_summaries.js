var WINDUP_ISSUE_SUMMARIES = [];
WINDUP_ISSUE_SUMMARIES['163952'] = {"information":[{"id":"2364171f-bd15-4b5e-a10a-7ef56dc91278","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":20640,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Information","priority":20000,"description":"Additional information found during the analysis.","categoryID":"information","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":20640,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"DiscoverMavenProjectsRuleProvider_1","issueName":"Maven POM (pom.xml)","numberFound":8,"effortPerIncident":0,"links":[],"descriptions":["Maven Project Object Model (POM) File"]},{"id":"0835cbf8-5850-41a8-a17b-892c00517cd0","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":20640,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Information","priority":20000,"description":"Additional information found during the analysis.","categoryID":"information","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":20640,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"DiscoverWebXmlRuleProvider_1","issueName":"Web XML","numberFound":1,"effortPerIncident":0,"links":[],"descriptions":[" Web Application Deployment Descriptors"]},{"id":"1fec8cf7-ca67-4672-8291-0380b6a4b2a7","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":20640,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Information","priority":20000,"description":"Additional information found during the analysis.","categoryID":"information","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":20640,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"DiscoverEjbConfigurationXmlRuleProvider_1","issueName":"EJB XML","numberFound":1,"effortPerIncident":0,"links":[],"descriptions":["Enterprise Java Bean XML Descriptor."]},{"id":"3dbfe021-d074-4f78-a188-ad47054c06c6","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":20640,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Information","priority":20000,"description":"Additional information found during the analysis.","categoryID":"information","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":20640,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"logging-usage-00010","issueName":"Embedded library - Apache Log4J","numberFound":1,"effortPerIncident":0,"links":[],"descriptions":["The application embeds an Apache Log4J library."]}],"potential":[{"id":"8a3a78c4-c7c8-4e74-98e4-9e71570e44b9","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4200,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Potential","priority":3000,"description":"Items in this category will need to be assessed manually to determine whether or not action is required.","categoryID":"potential","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4200,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-catchall-01000","issueName":"WebLogic proprietary type reference","numberFound":2,"effortPerIncident":0,"links":[],"descriptions":["This is a WebLogic proprietary type (`weblogic.i18n.logging.NonCatalogLogger`) and needs to be migrated to a compatible API. There is currently no detailed information about this type."]}],"mandatory":[{"id":"f89bc33f-47eb-4bd8-a361-44eb673551b2","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-eap7-11000","issueName":"WebLogic proprietary logger (NonCatalogLogger)","numberFound":5,"effortPerIncident":1,"links":[{"link":"https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html","title":"JDK Logging Documentation"},{"link":"https://developers.redhat.com/quickstarts/eap/logging/","title":"JBoss Logging Quickstart"}],"descriptions":["The WebLogic `NonCatalogLogger` is not supported on JBoss EAP, and should be migrated to a supported logging framework,\r\nsuch as the JDK Logger or JBoss Logging:\r\n\r\n```java\r\nimport java.util.logging.Logger;\r\nLogger LOG = Logger.getLogger(\"MyLogger\");\r\n```"]},{"id":"fc438f5b-f23a-404f-a8c4-eb733bd1eccc","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"environment-dependent-calls-02000","issueName":"Call of JNDI lookup","numberFound":4,"effortPerIncident":1,"links":[{"link":"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/development_guide/#chap-Remote_JNDI_Lookup","title":"JBoss EAP 6 - JNDI Reference"},{"link":"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/migration_guide/#sect-JNDI_Changes","title":"JNDI Changes"}],"descriptions":["This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change.\r\nEnsure that the JNDI Name does not need to change for JBoss EAP.\r\n\r\n*For Example:*\r\n\r\n```java\r\n(ConnectionFactory)initialContext.lookup(\"weblogic.jms.ConnectionFactory\");\r\n```\r\n\r\n*should become:*\r\n\r\n```java\r\n(ConnectionFactory)initialContext.lookup(\"/ConnectionFactory\");\r\n```"]},{"id":"b2dfe1f1-9810-4fd2-9378-4f7d51c3b413","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-xml-descriptor-eap7-04000","issueName":"WebLogic EJB XML (weblogic-ejb-jar.xml)","numberFound":1,"effortPerIncident":3,"links":[{"link":"https://access.redhat.com/articles/1326823","title":"Migrate the weblogic-ejb-jar.xml"}],"descriptions":["The elements of proprietary `weblogic-ejb-jar.xml` descriptor need to be mapped to the `jboss-ejb3.xml` one according to the attached knowledge article."]},{"id":"866b8e72-f892-4204-b647-28068a50474b","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-xml-descriptor-19000","issueName":"WebLogic EJB XML (weblogic-ejb-jar.xml) trans-timeout-seconds","numberFound":2,"effortPerIncident":3,"links":[{"link":"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/administration_and_configuration_guide/#Session_Bean_Transaction_Timeout","title":"JBoss EAP 6 - Session Bean Transaction Timeout"},{"link":"https://access.redhat.com/solutions/90553","title":"How to set EJB transaction timeout in JBoss EAP 6"},{"link":"https://docs.oracle.com/middleware/1221/wls/WLMDB/summary.htm#r35c1-t4","title":"WebLogic Server Deployment Elements"}],"descriptions":["The WebLogic `<trans-timeout-seconds>` configuration element sets the maximum duration for an EJB's container-initiated transactions, in seconds, after which the transaction is rolled back.  \r\n\r\nIn JBoss EAP 6+, you can achieve the same behavior by using the `TransactionTimeout` annotation."]},{"id":"a3a1ca6f-b38b-4bfd-83a0-e54e7a51b8b5","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"environment-dependent-calls-04000","issueName":"JMX MBean object name (javax.management.ObjectName)","numberFound":2,"effortPerIncident":1,"links":[],"descriptions":["After migration, some of the JMX beans provided by the previous server may not be present anymore.\r\nEnsure that the `javax.management.ObjectName` does not need to change for JBoss EAP."]},{"id":"8e6db4eb-ba63-4c18-85c8-0f9fda322b04","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-xml-descriptor-eap7-11000","issueName":"WebLogic JMS descriptor","numberFound":1,"effortPerIncident":3,"links":[{"link":"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/single/configuring_messaging/#intro_messaging_config","title":"EAP 7 Overview of the Messaging subsystem configuration"}],"descriptions":["This file is a proprietary WebLogic JMS configuration and needs to be migrated.\r\nWhile there is no direct mapping of these descriptor elements, many of these features may be configured in the application deployment or JBoss server configuration files.\r\n\r\nFor information on how to configure JBoss EAP JMS, please refer to the JBoss Enterprise Application Platform 7 messaging configuration documentation."]},{"id":"2ca8cf70-b0b6-4b74-909e-a41eb993bf3c","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-xml-descriptor-eap7-12000","issueName":"WebLogic web application descriptor (weblogic.xml)","numberFound":1,"effortPerIncident":3,"links":[{"link":"https://access.redhat.com/articles/1326803","title":"Migrate Oracle WebLogic configuration files to JBoss EAP"},{"link":"https://access.redhat.com/articles/1327803","title":"Map weblogic.xml configurations to JBoss EAP"},{"link":"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html-single/configuration_guide/","title":"Configuration Guide for JBoss EAP 7"}],"descriptions":["The Oracle WebLogic Server deployment descriptor file (`weblogic.xml`) provides functionality that is not included in the standard Java EE specification.\r\nWhile there is no direct mapping of these descriptor elements, many of these features may be configured in the application deployment or JBoss server configuration files.\r\n\r\nFor more information on how to configure JBoss EAP, please refer to the Configuration Guide for JBoss Enterprise Application Platform 7."]},{"id":"93ab05f4-24f0-4a62-a057-81b85c2b1468","issueCategoryModel":{"element":{"lifeCycle":2,"modified":false,"compareId":4224,"loaded":true,"removed":false,"new":false,"invisible":false},"reflectionCache":{"configuration":{"scanners":[{"configuration":null,"store":null,"resultFilter":{}},{"configuration":null,"store":null,"resultFilter":"ALWAYS_TRUE"}],"urls":[],"metadataAdapter":{},"serializer":{},"executorService":null,"classLoaders":null},"store":{"storeMap":{},"keysCount":0,"valuesCount":0}},"name":"Migration Mandatory","priority":1000,"description":"Items that will require changes in order for the migration to be successful.","categoryID":"mandatory","origin":"C:\\cia\\redhat\\rhamt-cli-4.2.0.Final\\rules\\migration-core\\core.windup.categories.xml","id":4224,"propertyKeys":["w:winduptype","origin","name","description","priority","categoryID"],"typeResolution":"net.bytebuddy.renamed.java.lang.Object$ByteBuddy$vpV5mFWS"},"ruleID":"weblogic-xml-descriptor-eap7-01000","issueName":"WebLogic EAR application descriptor (weblogic-application.xml)","numberFound":1,"effortPerIncident":1,"links":[{"link":"https://access.redhat.com/articles/1328043","title":"Migrate Oracle WebLogic server descriptors (weblogic-application.xml) to JBoss EAP 6 or 7"},{"link":"https://access.redhat.com/articles/1326803","title":"Migrate Oracle WebLogic configuration files to JBoss EAP 6 or 7"}],"descriptions":["The `weblogic-application.xml` deployment descriptor file is used to describe Oracle WebLogic Server EAR archives. Oracle WebLogic Server EAR configures some application settings through the `application-param` element.\r\nThese settings could be replaced with `context-param` elements in Java EE Servlet `web.xml` descriptor."]}]};
var effortToDescription = [];
effortToDescription[0] = "Info";
effortToDescription[1] = "Trivial";
effortToDescription[3] = "Complex";
effortToDescription[5] = "Redesign";
effortToDescription[7] = "Architectural";
effortToDescription[13] = "Unknown";
var effortOrder = ["Info", "Trivial", "Complex", "Redesign", "Architectural", "Unknown"];
var severityOrder = ['mandatory', 'optional', 'potential', 'cloud-mandatory', 'cloud-optional', 'information', ];