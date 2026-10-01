import { AbstractGen, GenExtDeck, generate } from "ti4-hb-helper";
import { homebrew } from "./homebrew";

it("generate", async () => {
  let abstractGen: AbstractGen;
  const errors: Array<string> = [];

  const colorNames: Array<string> = [
    "white",
    "blue",
    "purple",
    "green",
    "red",
    "yellow",
    "pink",
    "orange",
  ];

  const promissoryGen: GenExtDeck = new GenExtDeck(homebrew) // need type for addSubtype
    .setDeckType("promissory")
    .setIsLandscape(false)
    .setIsSharedBack(true)
    .setTag("card-promissory");
  colorNames.forEach((colorName) => {
    promissoryGen.addSubtype(`political-secret-${colorName}`, colorName);
  });
  await promissoryGen.generate(errors);
  await promissoryGen.writeOutputFiles();

  await generate(homebrew);

  if (errors.length > 0) {
    throw new Error("ext gen:\n" + errors.join("\n"));
  }
}, 300000);
