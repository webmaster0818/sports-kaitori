import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import { SOUBA, SILO_LABEL } from "../../lib/souba";
import Breadcrumbs from "../../components/Breadcrumbs";

export function generateStaticParams() {
  return SOUBA.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = SOUBA.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.name}の実売相場データ【2026年9月】買取前の物差しに`,
    description: `${b.name}の中古品がオークションで実際に売買された価格を集計。カテゴリ別の落札件数・平均落札価格・最高値を出典つきで公開します。査定に出す前の相場の物差しにどうぞ。`,
    alternates: { canonical: `${SITE_URL}/souba/${b.slug}/` },
  };
}

export default async function SoubaBrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = SOUBA.find((x) => x.slug === slug);
  if (!b) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "実売相場データ", item: `${SITE_URL}/souba/` },
      { "@type": "ListItem", position: 3, name: b.name, item: `${SITE_URL}/souba/${b.slug}/` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場データ", href: "/souba/" }, { label: b.name }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — {SILO_LABEL[b.silo]}</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            {b.name}の実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">{b.intro}</p>
          <div className="notice-law mt-8 max-w-3xl p-6">
            <p className="head text-base text-ink mb-2">実売価格は買取査定額とは異なります</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              掲載しているのはオークションで売買が成立した価格です。買取店の査定額は、業者の利益や販売コストが差し引かれるため実売より低くなるのが一般的です。状態・付属品・改造の有無で大きく変わる幅の参考であり、査定額を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">カテゴリ別の実売データ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft mb-6">
          落札件数・平均落札価格はオークファン(aucfan.com)の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場を落札価格の高い順に確認した単品出品の最上位です(まとめ売り・ロット・ジャンクは除外)。取得日はいずれも{b.fetchedAt}です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-spec min-w-[760px]">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>落札件数（集計期間）</th>
                <th>平均落札価格</th>
                <th>最高落札価格（単品）</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.category}>
                  <td className="font-bold text-ink">{r.category}</td>
                  <td>{r.count}</td>
                  <td>{r.avg}</td>
                  <td>
                    {r.max}
                    <span className="block text-xs text-muted mt-1">{r.maxNote}</span>
                  </td>
                  <td className="whitespace-nowrap text-xs">
                    <a href={r.aucfanUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-safety underline">aucfan</a>
                    {" / "}
                    <a href={r.yahooUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-safety underline">ヤフオク</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {b.notes && <p className="mt-4 text-xs text-muted">補足: {b.notes}</p>}
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">相場を物差しに、次の一歩へ</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft mb-6">
            相場観を持ったら、売り先のタイプ(専門業者・一括査定・実店舗)を決めて相見積もりへ。1社即決を避けるのが高く売る基本です。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`/${b.silo}/`} className="btn-safety text-sm">{SILO_LABEL[b.silo]}の買取ガイド</a>
            <a href="/hikaku/" className="btn-outline text-sm">買取業者の選び方</a>
            <a href="/souba/" className="btn-outline text-sm">相場データ一覧へ戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
