import { ApplicationFunctionOptions, Probot } from "probot";



export = (app: Probot, { getRouter }: ApplicationFunctionOptions) => {
  const jiraRouter = getRouter("/jira");

  app.on("pull_request", async (context) => {
    console.log(context.pullRequest())
  });


};



