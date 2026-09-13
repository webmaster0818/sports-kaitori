import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

// 全ルート（ページ追加・削除時は必ずここも同一コミットで更新すること）
const paths = [
  "/",
  "/airsoft/",
  "/airsoft/law/",
  "/airsoft/disposal/",
  "/airsoft/junk/",
  "/airsoft/model-gun/",
  "/fishing/junk/",
  "/bikewear/helmet/",
  "/bikewear/suit/",
  "/reviews/",
  "/reviews/hardoff/",
  "/reviews/hobbyoff/",
  "/reviews/2ndstreet/",
  "/reviews/surugaya/",
  "/reviews/tackleberry/",
  "/reviews/wave/",
  "/reviews/upgarage/",
  "/reviews/bookoff/",
  "/souba/",
  "/souba/tokyo-marui/",
  "/souba/vfc/",
  "/souba/g-and-g/",
  "/souba/ksc/",
  "/souba/we-tech/",
  "/souba/shimano/",
  "/souba/daiwa/",
  "/souba/gamakatsu/",
  "/souba/abu-garcia/",
  "/souba/megabass/",
  "/souba/kushitani/",
  "/souba/alpinestars/",
  "/souba/dainese/",
  "/souba/shoei/",
  "/souba/arai/",
  "/hikaku/",
  "/fishing/",
  "/bikewear/",
  "/guide/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/verification-policy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified,
  }));
}
