export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("la-gaude");

export default function TaxiLaGaudePage() {
  return <SectorLandingTemplate sectorId="la-gaude" />;
}
