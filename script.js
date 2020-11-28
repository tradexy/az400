$(document).ready(function() {
  
  // set the background to a random color
  var hue = 350;
  
  // cache the jquery elements to prevent dom queries during the animation events
  var $body = $("body");
  var $svg = $("svg");
  var $word = $(".word");

  // when the animation iterates
  $("h1").on('webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration ', function() {

    // replace the header with a random word
    var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);

    // update the background color
    hue += 47;
    $body.css("background-color", "hsl(" + hue + ", 100%, 50%)");
  });
});

// the 10,000 most comment words, taken from https://goo.gl/hfjFkz
words = [
"open source libraries * WhiteSource Bolt",
"open source libraries * BlackDuck",
"scan open source library what create in build pipeline * build task",
"check source code * SonarCloud",
"set up SonarQube for code quality * Prep analysis config of SQ, VSBuild, VSTest, Run Code Analysis",
"app..insights features by which users * User Flows",
"app..insights which user actions day by day * User Flows",
"app..insights App Perf from feature usage * Impact",
"access security of webapps & functions * Compute & apps in Azure Security Center",
"JIRA DevOps alternative * Boards",
"Jenkins DevOps alternative * Build Pipelines",
"Octopus DevOps alternative * Release Pipelines",
"git branching: independent tasks, check-in code releasable * Single running branch & many short lived branches",
"version control, preconfigured YAML to mng pipeline config changes * Git in Azure Repos",
"version control, on-prem server * GitHub Enterprise",
"version control, centralised version * Assembla subersion",
"automate UI testing of web app * Selenium",
"provide access only to devices connected to on-prem network * In AAD cofigure conditional access",
"project, use kanban board, break into tasks * Scrum",
"project, use kanban for user stories and bugs and tasks * Agile",
"project, track change requests, risks and reviews * CMMI",
"when to check code quality * at earliest, Build",
"agile software, communicate, integrate with DevOps * Microsoft Teams",
"Git, Azure Repos to merge into a single commit * squash merge",
"source control, restrict access/security of files * Team Foundation Version Control",
"source control, config branch policies ie. review by someone * Azure Repos - Git",
"source control, can use different IDEs * Azure Repos - Git",
"source control, branch viewable and editable by project leads * Azure Repos - Git",
"time from creation of work items to completion * Lead Time",
"time from begin work to completion * Cycle Time",
"to see the remaining work * Burndown",
"increase security during pull requests * Static code analysis tools",
"increase security during continuous integration * Static code analysis tools",
"increase security during continuous delivery * Penetration testing",
"code coverage for java applications * Cobertura",
"How, deploy most recent build (of many) in pipeline * Deployment queue settings",
"Deploying web app, need to daily auto-send exceptions * Application Insights, queried by Azure Logic App",
"Deploying web app with data in Azure SQL, ad-hoc queries, trigger and store * Azure Log analytics",
"Service Now (connect to SNOW) * ITSM - IT Service Management Connector",
"out of many build release packages, limit some for release * promote packages to Views",
"Authentication for GitHub checks API * GitHub App",
"ARM to deploy VMs, prevent deploying user from seeing acc credentials * Azure Key Vault",
"Integrate on-prem bitbucket (firewall) with DevOps * External Git service connection, on on-prem self-hosted agent",
"SNOW CR before components deployed * Pre-deployment gate, and interact with SNOW - REST API",
"early image scanning docker project * CI task to scan the images",
"offline copy of all code and history * Git",
"Authenticate Azure pipelines with GitHub * GitHub App",
"Gitflow strategy, branch type, production * Master",
"Gitflow strategy, branch type, pre-production * Develop",
"auto-warns of perf issues in web app, min admin effort. * Smart detection feature in Application Insights",
"run automated test case to devops test * Create test project, checkin onto devops, add auto test to pipeline",
"authentication to register self-hosted agent * Personal Access token (PAT)",
"deploy app into VMs through pipelines * Create agent pool & deploymt group, add & config pipeline & run",
"Teams to receive devops msg when work updated * create service hook subscription",
"strategy, release to some users according to tolerance * Progressive exposure",
"strategy, enable functionality in later releases * Feature flags",
"strategy, existing release stays active (swap), min recovery time * Blue / Green",
"Node.js package artifacts for feed registry info * .npmrc file in the project",
"Node.js package artifacts configure file for credentials * .npmrc file in the user's home folder",
"App Insights to get data on ASP.Net core app * on code, disable adaptive sampling & add App Insights telemetry",
"AtmtnSttCnfg, AWS VMs. PS DSC & run register.py * DSC metaconfig, on VM, run setdsclocalconfigurationmanager.py file",
"template - secrets in keyvault, dynamically generated resource ID * `type`: `Microsoft.Resources/deployment`",
"template - secrets in keyvault, dynamically generated resource ID * `template`",
"release cycle, distribute to testers, get user feedback and collect crash reports * Visual Studio App Center",
"Azure Kubernetes cluster, config Helm charts in App * kubectl create, helm init, helm install",
"devops App Center, mobile, distribution group via email * Private group",
"devops App Center, mobile, distribution group via unauthenticated public links * Public group",
"devops App Center, mobile, distribution group test all of the apps of the co * Shared Group",
"app to be distributed to provisioned and un-provisioned devices * Register devices & sign the application",
"Use Terraform to deploy resources * Install Node.js & then install Yeoman",
"Azure Pipelines with Java apps, detect code quality issues * Maven build task, select Run PMD",
"build Pipeline, notifications to Slack staging or any tenant * create a Service Hook subscription",
"Configure Azure Boards and GitHub, to display GitHub status on Board * Add Azure Boards to the repository",
"pipeline project named staging * @azure pipelines subscribe https://dev.azure.com/staging/_build",
"monitor app health and perf using App Insights of app in Azure Web App * Smart Detection  ",
"prevent file named config.json from being commited * add config.json to .gitignore, run git add -gitignore, commit",
"Add permissions to query report * Reader level permission",
"edit git repo project history * Rebase",
"repo merges via pull request and can via reviewers * Branch policies of master branch",
"Visualize the flow of work items * Kanban Boards",
"ideal branch for constant addition functionality to app, timeline * Short-lived",
"ideal branch for constant addition functionality to app, branch type * Feature branches",
"measure team's technical debt * the % of time spent on work"
 ];