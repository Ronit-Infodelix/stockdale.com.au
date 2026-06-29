import BITTabBar from "./BITTabBar";
import BITKeyFacts from "./BITKeyFacts";
import BITCourseOverview from "./BITCourseOverview";
import BITCourseStructure from "./BITCourseStructure";
import BITCoreUnits from "./BITCoreUnits";
import BITEntryRequirements from "./BITEntryRequirements";
import BITFees from "./BITFees";

export default function BITContent() {
  return (
    <>
      <BITTabBar />
      <BITKeyFacts />
      <BITCourseOverview />
      <BITCourseStructure />
      <BITCoreUnits />
      <BITEntryRequirements />
      <BITFees />
    </>
  );
}
