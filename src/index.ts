import { ApplicationFunctionOptions, Probot } from "probot";



export = (app: Probot, { getRouter }: ApplicationFunctionOptions) => {
  const jiraRouter = getRouter("/jira");

  jiraRouter.get("/hook", async (req, res) => {
    res.send("successfully recieved event");
  });

  app.on("pull_request", async (context) => {
    console.log(context.pullRequest())
  });

};



