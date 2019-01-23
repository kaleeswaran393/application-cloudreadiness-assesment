MIGRATION_ISSUES_DETAILS["f4a3ca78-3204-458f-8eed-a31482050bf2"] = [
{description: "<p>The <code>weblogic-application.xml<\/code> deployment descriptor file is used to describe Oracle WebLogic Server EAR archives. Oracle WebLogic Server EAR configures some application settings through the <code>application-param<\/code> element. These settings could be replaced with <code>context-param<\/code> elements in Java EE Servlet <code>web.xml<\/code> descriptor.<\/p>", ruleID: "weblogic-xml-descriptor-eap7-01000", issueName: "WebLogic EAR application descriptor (weblogic-application.xml)",
problemSummaryID: "f4a3ca78-3204-458f-8eed-a31482050bf2", files: [
{l:"<a class='' href='weblogic_application_xml.html?project=163952'>META-INF/weblogic-application.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/1328043", t:"Migrate Oracle WebLogic server descriptors (weblogic-application.xml) to JBoss EAP 6 or 7"},
{h:"https://access.redhat.com/articles/1326803", t:"Migrate Oracle WebLogic configuration files to JBoss EAP 6 or 7"},
]},
];
onProblemSummaryLoaded("f4a3ca78-3204-458f-8eed-a31482050bf2");