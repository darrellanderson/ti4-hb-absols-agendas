import { AbstractGen, GenExtDeck, generate } from "ti4-hb-helper";
import { homebrew } from "./homebrew";

it("generate", async () => {
  let abstractGen: AbstractGen;
  const errors: Array<string> = [];

  abstractGen = new GenExtDeck(homebrew)
    .setDeckType("promissory")
    .setIsLandscape(false)
    .setIsSharedBack(true)
    .setTag("card-promissory");
  await abstractGen.generate(errors);
  await abstractGen.writeOutputFiles();

  await generate(homebrew);

  if (errors.length > 0) {
    throw new Error("ext gen:\n" + errors.join("\n"));
  }
}, 300000);
