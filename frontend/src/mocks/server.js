import { setupServer } from "msw/node";
import { handlers } from "./handlers";

//this configures a request mocking server with the given handlers
export const server = setupServer(...handlers);
