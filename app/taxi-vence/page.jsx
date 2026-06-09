export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("vence");

export default function TaxiVencePage() {
  return <SectorLandingTemplate sectorId="vence" />;
}
