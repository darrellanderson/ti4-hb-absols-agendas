import { refPackageId } from "@tabletop-playground/api";
import { HomebrewModuleType } from "ti4-ttpg-ts";

const packageId: string = refPackageId;

export const homebrew: HomebrewModuleType = {
  sourceAndPackageId: {
    source: "hb.absol.agendas",
    packageId,
  },
  remove: [
    "card.agenda:pok/*",
    "card.agenda:base/*",
    "card.promissory.blue:base/political-secret",
    "card.promissory.green:base/political-secret",
    "card.promissory.orange:base/political-secret",
    "card.promissory.pink:base/political-secret",
    "card.promissory.purple:base/political-secret",
    "card.promissory.red:base/political-secret",
    "card.promissory.white:base/political-secret",
    "card.promissory.yellow:base/political-secret",
  ],
};
