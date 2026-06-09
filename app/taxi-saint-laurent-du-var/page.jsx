export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("saint-laurent-du-var");

export default function TaxiSaintLaurentDuVarPage() {
  return <SectorLandingTemplate sectorId="saint-laurent-du-var" />;
}
