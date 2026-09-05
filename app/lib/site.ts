// サイト共通定数 — ドメイン確定時はここ1箇所を変更すれば全ページに反映される
export const SITE_URL = "https://sports-sell.com"; // 本番ドメイン(2026-09-05紐づけ)
export const SITE_NAME = "スポーツ買取フィールド";
export const SITE_TAGLINE = "エアガン・釣具・バイクウェアの買取比較";
export const OPERATOR = "株式会社MediaX";

// felmat案件（未提携・計測リンク受領後に url を差し替える。受領までCTA非表示）
// affiliateUrl が null の間はCTAを描画しない＝生URL掲載を防ぐ（gakki 597箇所成果0の教訓）
export type Partner = {
  slug: string;
  name: string;
  company: string | null; // 公式確認が取れるまで null
  category: "airsoft" | "fishing" | "bikewear" | "cross";
  affiliateUrl: string | null;
};

export const PARTNERS: Partner[] = [
  { slug: "gun-collect", name: "ガンコレクト", company: null, category: "airsoft", affiliateUrl: null },
  { slug: "stst", name: "ストスト", company: null, category: "bikewear", affiliateUrl: null },
  { slug: "fishing-collect", name: "フィッシングコレクト", company: null, category: "fishing", affiliateUrl: null },
];
