import { refPackageId } from "@tabletop-playground/api";
import { HomebrewModuleType } from "ti4-ttpg-ts";

const packageId: string = refPackageId;

export const homebrew: HomebrewModuleType = {
  sourceAndPackageId: {
    source: "ti4-hb-absols-agendas",
    packageId,
  },
  remove: ["card.agenda:pok/*", "card.agenda:base/*"],
};
