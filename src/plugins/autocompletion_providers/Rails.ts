import {styles, Suggestion} from "../autocompletion_utils/Common";
import {PluginManager} from "../../PluginManager";

const railsCommandConfig = [
    {
        name: "runner",
        description: "Run a piece of code in the application environment",
    },
    {
        name: "console",
        description: "Start the Rails console",
    },
    {
        name: "server",
        description: "Start the Rails server",
    },
    {
        name: "generate",
        description: "Generate new code'g')",
    },
    {
        name: "destroy",
        description: "generate",
    },
    {
        name: "dbconsole",
        description: "Start a console for the Rails database",
    },
    {
        name: "new",
        description: "Create a new Rails application",
    },
    {
        name: "plugin new",
        description: "Generates skeleton for developing a Rails plugin",
    },
];

const railsCommand = railsCommandConfig.map(config => new Suggestion({value: config.name, description: config.description, style: styles.command}));

PluginManager.registerAutocompletionProvider("rails", async() => railsCommand);
