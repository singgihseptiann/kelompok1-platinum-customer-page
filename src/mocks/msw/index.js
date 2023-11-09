import { setupServer } from "msw/node";

import { handlers } from "../msw/handler";

const mockServer = setupServer(...handlers);

export default mockServer;
