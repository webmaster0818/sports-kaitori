import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import { SOUBA, SILO_LABEL } from "../lib/souba";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "実売相場データ一覧 — エアガン・釣具・バイクウェアの売買成立価格",
  description:
    "エアガン・釣具・バイクウェアの主要ブランドについて、オークションで実際に売買が成立した価格を集計して公開。業者の「参考買取価格」ではなく実売データを、出典と取得日つきで確認できます。",
  alternates: { canonical: `${SITE_URL}/souba/` },
};

const SILOS = ["airsoft", "fishing", "bikewear"] as const;

export default function SoubaHubPage() {
  return (
    <main>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "実売相場データ" }]} />
          <p className="eyebrow mt-8 mb-4">MARKET DATA</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">実売相場データ一覧</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しています。全データに出典と取得日を明記。査定に出す前の「相場の物差し」としてお使いください。
          </p>
        </div>
      </section>

      {SILOS.map((silo) => {
        const brands = SOUBA.filter((b) => b.silo === silo);
        if (brands.length === 0) return null;
        return (
          <section key={silo} className="mx-auto max-w-6xl px-5 py-10 md:py-12">
            <h2 className="head rule-safety text-2xl text-ink mb-6">{SILO_LABEL[silo]}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {brands.map((b) => (
                <a key={b.slug} href={`/souba/${b.slug}/`} className="card-field p-6 block">
                  <p className="eyebrow mb-2">{b.rows.length} CATEGORIES</p>
                  <h3 className="head text-lg text-ink">{b.name}</h3>
                  <p className="mt-2 text-xs text-muted">実売データ取得日: {b.fetchedAt}</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">相場の使い方</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft mb-6">
            実売価格は買取査定額とは異なります(査定額は業者の利益・販売コストが差し引かれるため実売より低くなるのが一般的)。相場観を持ってから、売り先のタイプを決めて相見積もりを取るのが失敗しない順序です。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/hikaku/" className="btn-safety text-sm">買取業者の選び方</a>
            <a href="/guide/" className="btn-outline text-sm">はじめての方へ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
