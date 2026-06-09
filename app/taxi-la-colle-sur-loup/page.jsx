export const dynamic = "force-static";
export const revalidate = 3600;

import SectorLandingTemplate from "../components/SectorLandingTemplate";
import { generateSectorMetadata } from "../lib/sectorPageMetadata";

export const metadata = generateSectorMetadata("la-colle-sur-loup");

export default function TaxiLaColleSurLoupPage() {
  return <SectorLandingTemplate sectorId="la-colle-sur-loup" />;
}
