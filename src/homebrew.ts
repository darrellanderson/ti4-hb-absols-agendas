import { refPackageId } from "@tabletop-playground/api";
import { HomebrewModuleType } from "ti4-ttpg-ts";

const packageId: string = refPackageId;

export const homebrew: HomebrewModuleType = {
  sourceAndPackageId: {
    source: "ti4-hb-absols-agendas",
    packageId,
  },
  remove: [
    "card.agenda:pok/armed-forces-standardization",
    "card.agenda:pok/articles-of-war",
    "card.agenda:pok/checks-and-balances",
    "card.agenda:pok/clandestine-operations",
    "card.agenda:pok/covert-legislation",
    "card.agenda:pok/galactic-crisis-pact",
    "card.agenda:pok/minister-of-antiquities",
    "card.agenda:pok/nexus-sovereignty",
    "card.agenda:pok/political-censure", // |scorable-private
    "card.agenda:pok/rearmament-agreement",
    "card.agenda:pok/representative-government",
    "card.agenda:pok/research-grant-reallocation",
    "card.agenda:pok/search-warrant",
    "card.agenda:base/antiintellectual-revolution",
    "card.agenda:base/archived-secret",
    "card.agenda:base/arms-reduction",
    "card.agenda:base/classified-document-leaks",
    "card.agenda:base/colonial-redistribution",
    "card.agenda:base/committee-formation",
    "card.agenda:base/compensated-disarmament",
    "card.agenda:base/conventions-of-war",
    "card.agenda:base/core-mining",
    "card.agenda:base/demilitarized-zone",
    "card.agenda:base/economic-equality",
    "card.agenda:base/enforced-travel-ban",
    "card.agenda:base/executive-sanctions",
    "card.agenda:base/fleet-regulations",
    "card.agenda:base/holy-planet-of-ixth", // |scorable-private
    "card.agenda:base/homeland-defense-act",
    "card.agenda:base/imperial-arbiter",
    "card.agenda:base/incentive-program",
    "card.agenda:base/ixthian-artifact",
    "card.agenda:base/judicial-abolishment",
    "card.agenda:base/minister-of-commerce",
    "card.agenda:base/minister-of-exploration",
    "card.agenda:base/minister-of-industry",
    "card.agenda:base/minister-of-peace",
    "card.agenda:base/minister-of-policy",
    "card.agenda:base/minister-of-sciences",
    "card.agenda:base/minister-of-war",
    "card.agenda:base/miscount-disclosed",
    "card.agenda:base/mutiny", // |scorable-public
    "card.agenda:base/new-constitution",
    "card.agenda:base/prophecy-of-ixth",
    "card.agenda:base/public-execution",
    "card.agenda:base/publicize-weapon-schematics",
    "card.agenda:base/regulated-conscription",
    "card.agenda:base/representative-government",
    "card.agenda:base/research-team-biotic",
    "card.agenda:base/research-team-cybernetic",
    "card.agenda:base/research-team-propulsion",
    "card.agenda:base/research-team-warfare",
    "card.agenda:base/seed-of-an-empire", // |scorable-public
    "card.agenda:base/senate-sanctuary",
    "card.agenda:base/shard-of-the-throne", // |scorable-private
    "card.agenda:base/shared-research",
    "card.agenda:base/swords-to-plowshares",
    "card.agenda:base/terraforming-initiative",
    "card.agenda:base/the-crown-of-emphidia", // |scorable-private
    "card.agenda:base/the-crown-of-thalnos",
    "card.agenda:base/unconventional-measures",
    "card.agenda:base/wormhole-reconstruction",
    "card.agenda:base/wormhole-research",
  ],
};
