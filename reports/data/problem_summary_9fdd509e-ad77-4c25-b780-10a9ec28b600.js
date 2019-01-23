MIGRATION_ISSUES_DETAILS["9fdd509e-ad77-4c25-b780-10a9ec28b600"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss EAP.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "9fdd509e-ad77-4c25-b780-10a9ec28b600", files: [
{l:"<a class='' href='LogEventPublisher_java.html?project=163952'>com.acme.anvil.service.jms.LogEventPublisher<\/a>", oc:"2"},
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=163952'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"1"},
{l:"<a class='' href='AnvilWebServlet_java.html?project=163952'>com.acme.anvil.AnvilWebServlet<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/development_guide/#chap-Remote_JNDI_Lookup", t:"JBoss EAP 6 - JNDI Reference"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/migration_guide/#sect-JNDI_Changes", t:"JNDI Changes"},
]},
];
onProblemSummaryLoaded("9fdd509e-ad77-4c25-b780-10a9ec28b600");