export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("saint-paul-de-vence");

export default function TaxiSaintPaulDeVencePage() {
  return <SectorLandingTemplate sectorId="saint-paul-de-vence" />;
}
