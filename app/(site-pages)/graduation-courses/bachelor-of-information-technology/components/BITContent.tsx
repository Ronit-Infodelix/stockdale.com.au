import BITTabBar from "./BITTabBar";
import BITKeyFacts from "./BITKeyFacts";
import BITCourseOverview from "./BITCourseOverview";
import BITCourseStructure from "./BITCourseStructure";
import BITCoreUnits from "./BITCoreUnits";
import BITEntryRequirements from "./BITEntryRequirements";
import BITFees from "./BITFees";

/**
 * `variant` tailors the audience-specific bits (Key Features fee cell, Entry
 * Requirements default tab, Fees table) for the Domestic and International
 * pages. With no variant, everything shows both audiences (the course page).
 */
export default function BITContent({
  variant,
}: {
  variant?: "domestic" | "international";
}) {
  return (
    <>
      <BITTabBar />
      <BITKeyFacts variant={variant} />
      <BITCourseOverview />
      <BITCourseStructure />
      <BITCoreUnits />
      <BITEntryRequirements defaultTab={variant} />
      <BITFees variant={variant} />
    </>
  );
}
