import * as process from "process";

export const config = {
  lostPixelProjectId: "cleiive6c0gchi40em3uzx1xv",
  // Lost Pixel integration is optional. Provide an API key via
  // the LOST_PIXEL_API_KEY environment variable if available.
  apiKey: process.env.LOST_PIXEL_API_KEY || undefined,
};
