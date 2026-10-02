import { Card, Vector, world } from "@tabletop-playground/api";
import { homebrew } from "./homebrew";
import { NSID_TO_TEMPLATE_ID } from "./nsid-to-template-id"; // generated
import { CardUtil, DeletedItemsContainer, NSID } from "ttpg-darrell";
import { RecycleCardPromissory } from "ti4-ttpg-ts";

homebrew.nsidToTemplateId = NSID_TO_TEMPLATE_ID;

TI4.homebrewRegistry.load(homebrew);

// Inject removed old political secret cards.  Deal out new ones.
function injectPoliticalSecretCards(): void {
  console.log("Absols Agendas: spawning promissory deck");
  const cardUtil: CardUtil = new CardUtil();
  const pos: Vector = new Vector(0, 0, world.getTableHeight() + 10);
  const promissoryDeck: Card = TI4.spawn.spawnMergeDecksWithNsidPrefixOrThrow(
    "card.promissory",
    pos,
  );

  console.log("Absols Agendas: extracting political secret cards");
  const politicalSecretDeck: Card | undefined = cardUtil.filterCards(
    promissoryDeck,
    (nsid: string): boolean => {
      return (
        nsid.startsWith("card.promissory") &&
        nsid.includes(`:${homebrew.sourceAndPackageId.source}/`)
      );
    },
  );
  if (!politicalSecretDeck) {
    throw new Error("No political secret cards found in the promissory deck.");
  }
  DeletedItemsContainer.destroyWithoutCopying(promissoryDeck);

  console.log("Absols Agendas: recycling political secret cards");
  const recycle: RecycleCardPromissory = new RecycleCardPromissory();
  const politicalSecretCards: Card[] =
    cardUtil.separateDeck(politicalSecretDeck);
  politicalSecretCards.forEach((card: Card): void => {
    if (!recycle.canRecycle(card)) {
      throw new Error(`Cannot recycle card: ${card.getId()}`);
    }
    if (!recycle.recycle(card)) {
      DeletedItemsContainer.destroyWithoutCopying(card);
    }
  });
}

// Only add political secret cards if not already injected!
let found: boolean = false;
for (const obj of world.getAllObjects(true)) {
  const nsid: string = NSID.get(obj);
  if (
    nsid.startsWith("card.promissory") &&
    nsid.includes(`:${homebrew.sourceAndPackageId.source}/`)
  ) {
    found = true;
    break;
  }
}
if (!found) {
  injectPoliticalSecretCards();
}
