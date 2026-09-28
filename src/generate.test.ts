import {
  AbstractGen,
  GenExtDeck,
  GenExtPngToken,
  GenExtTokenSameFaceAndBack,
  generate,
} from "ti4-hb-helper";
import { homebrew } from "./homebrew";

it("generate", async () => {
  let abstractGen: AbstractGen;
  const errors: Array<string> = [];

  await generate(homebrew);

  if (errors.length > 0) {
    throw new Error("ext gen:\n" + errors.join("\n"));
  }
}, 300000);
