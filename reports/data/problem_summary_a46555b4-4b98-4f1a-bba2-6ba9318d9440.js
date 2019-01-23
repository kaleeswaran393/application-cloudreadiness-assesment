MIGRATION_ISSUES_DETAILS["a46555b4-4b98-4f1a-bba2-6ba9318d9440"] = [
{description: "<p>The WebLogic <code>NonCatalogLogger<\/code> is not supported on JBoss EAP, and should be migrated to a supported logging framework, such as the JDK Logger or JBoss Logging:<\/p>\n<pre><code class=\"java\">import java.util.logging.Logger;\r\nLogger LOG = Logger.getLogger(&quot;MyLogger&quot;);\n<\/code><\/pre>", ruleID: "weblogic-eap7-11000", issueName: "WebLogic proprietary logger (NonCatalogLogger)",
problemSummaryID: "a46555b4-4b98-4f1a-bba2-6ba9318d9440", files: [
{l:"<a class='' href='ProductCatalogBean_java.html?project=163952'>com.acme.anvil.service.ProductCatalogBean<\/a>", oc:"5"},
], resourceLinks: [
{h:"https://docs.oracle.com/javase/7/docs/technotes/guides/logging/overview.html", t:"JDK Logging Documentation"},
{h:"https://developers.redhat.com/quickstarts/eap/logging/", t:"JBoss Logging Quickstart"},
]},
];
onProblemSummaryLoaded("a46555b4-4b98-4f1a-bba2-6ba9318d9440");