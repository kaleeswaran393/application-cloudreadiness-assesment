MIGRATION_ISSUES_DETAILS["8f7cbb56-4eff-4c9c-9677-fe5528becb39"] = [
{description: "<p>After migration, some of the JMX beans provided by the previous server may not be present anymore. Ensure that the <code>javax.management.ObjectName<\/code> does not need to change for JBoss EAP.<\/p>", ruleID: "environment-dependent-calls-04000", issueName: "JMX MBean object name (javax.management.ObjectName)",
problemSummaryID: "8f7cbb56-4eff-4c9c-9677-fe5528becb39", files: [
{l:"<a class='' href='AnvilWebLifecycleListener_java.html?project=163952'>com.acme.anvil.listener.AnvilWebLifecycleListener<\/a>", oc:"2"},
], resourceLinks: [
]},
];
onProblemSummaryLoaded("8f7cbb56-4eff-4c9c-9677-fe5528becb39");