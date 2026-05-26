export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("villeneuve-loubet");

export default function TaxiVilleneuveLoubetPage() {
  return <SectorLandingTemplate sectorId="villeneuve-loubet" />;
}
