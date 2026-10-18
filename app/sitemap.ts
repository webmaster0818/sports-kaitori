import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
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
  "/souba/cyma/",
  "/souba/s-and-t/",
  "/souba/ares/",
  "/souba/lct/",
  "/souba/e-and-l/",
  "/souba/jackall/",
  "/souba/evergreen/",
  "/souba/deps/",
  "/souba/zenaq/",
  "/souba/olympic/",
  "/souba/ogk-kabuto/",
  "/souba/rs-taichi/",
  "/souba/hyod/",
  "/souba/komine/",
  "/souba/bell/",
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

// lastmod は「そのページの中身を作るファイル」の最終コミット日（ビルド時刻にしない）。
// 未コミットの変更があるときだけ今日の日付にする。
// 前方一致で足すデータファイル（長い接頭辞を先に書く）
const DATA: [string, string[]][] = [
  ["/souba/", ["app/lib/souba.ts"]],
  ["/souba/*", ["app/lib/souba.ts"]],
  ["/reviews/", ["app/lib/reviews.ts"]],
  ["/reviews/*", ["app/lib/reviews.ts"]],
  ["/airsoft/junk/", ["app/lib/auctionData.ts"]],
  ["/airsoft/model-gun/", ["app/lib/auctionData.ts"]],
  ["/fishing/junk/", ["app/lib/auctionData.ts"]],
  ["/bikewear/helmet/", ["app/lib/auctionData.ts"]],
];

function sourcesFor(p: string): string[] {
  const files: string[] = [];
  const dir = `app${p}`.replace(/\/$/, "") || "app";
  const parent = dir.slice(0, dir.lastIndexOf("/"));
  if (p === "/") files.push("app/page.tsx");
  else if (existsSync(dir)) {
    const hasChild = readdirSync(dir, { withFileTypes: true }).some((d) => d.isDirectory());
    files.push(hasChild ? `${dir}/page.tsx` : dir);
  } else if (existsSync(`${parent}/[slug]`)) files.push(`${parent}/[slug]`);
  const hit = DATA.find(([prefix]) => p === prefix || (prefix.endsWith("*") && p.startsWith(prefix.slice(0, -1)) && p !== prefix.slice(0, -1)));
  if (hit) files.push(...hit[1]);
  return files;
}

function lastModifiedFor(p: string): Date | undefined {
  const files = sourcesFor(p);
  if (!files.length) return undefined;
  try {
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" }).trim();
    if (dirty) return new Date();
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: lastModifiedFor(p),
  }));
}
