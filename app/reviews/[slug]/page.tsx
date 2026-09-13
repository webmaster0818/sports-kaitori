import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import { REVIEWS, SILO_LABELS, type SiloKey } from "../../lib/reviews";
import Breadcrumbs from "../../components/Breadcrumbs";

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) return {};
  const ym = r.confirmedAt.replace(/(\d+年\d+月).*/, "$1");
  return {
    title: `${r.name}でエアガン・釣具・バイク用品は売れる？公式情報で検証【${ym}確認】`,
    description: `${r.name}(${r.company})がエアガン・釣具・バイクウェアを買取対象としているか、買取方法・費用・古物商許可を公式サイトで一次確認して整理。確認できなかった項目も正直に記載します。架空の口コミは掲載しません。`,
    alternates: { canonical: `${SITE_URL}/reviews/${r.slug}/` },
  };
}

const METHOD_LABELS = ["店頭", "宅配", "出張"] as const;
const SILO_KEYS: SiloKey[] = ["airsoft", "fishing", "bikewear"];

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "総合リユース店の検証", item: `${SITE_URL}/reviews/` },
      { "@type": "ListItem", position: 3, name: r.name, item: `${SITE_URL}/reviews/${r.slug}/` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "総合リユース店の検証", href: "/reviews/" }, { label: r.name }]} />
          <p className="eyebrow mt-8 mb-4">REVIEW — VERIFIED FACTS</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            {r.name}でエアガン・釣具・バイク用品は売れる？
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            このページの情報は、{r.name}の公式サイトを当サイトが直接確認して整理したものです（確認日: {r.confirmedAt}）。伝聞や口コミサイトからの引用はしていません。「買取対象と公式に明記されているか」をジャンル別に切り分け、確認できなかった項目は正直に記載します。
          </p>
        </div>
      </section>

      {/* ジャンル別の取扱 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">ジャンル別 — 公式サイトでの買取対象の明記</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {SILO_KEYS.map((k) => {
            const v = r.silos[k];
            return (
              <div key={k} className={v ? "card-field p-6" : "card-field p-6 opacity-80"}>
                <span className={v ? "gear-tag mb-4" : "gear-tag gear-tag--safety mb-4"}>
                  {v ? "公式に明記あり" : "明記を確認できず"}
                </span>
                <h3 className="head text-lg text-ink">{SILO_LABELS[k]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {v ?? "確認日時点で、公式サイト上にこのジャンルを買取対象とする記載を見つけられませんでした。持ち込み前に店舗へ直接確認してください。"}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[0.8rem] text-muted">
          「明記を確認できず」は「買取不可」の意味ではありません。総合リユース店は店舗ごとに取扱いが異なることが公式に案内されている場合があります。
        </p>
      </section>

      {/* 基本情報 */}
      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">公式サイトで確認できた基本情報</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[640px] max-w-4xl">
              <tbody>
                <tr>
                  <th className="w-44 text-left">サービス名</th>
                  <td className="font-bold text-ink">{r.name}</td>
                </tr>
                <tr>
                  <th className="text-left">運営会社</th>
                  <td>{r.company}</td>
                </tr>
                <tr>
                  <th className="text-left">古物商許可</th>
                  <td>{r.license ?? "公式サイト上で確認できませんでした"}</td>
                </tr>
                <tr>
                  <th className="text-left">買取方法</th>
                  <td>
                    <span className="inline-flex flex-wrap gap-2">
                      {METHOD_LABELS.map((m) => (
                        <span
                          key={m}
                          className={
                            r.methods.includes(m)
                              ? "inline-block border border-safety px-3 py-1 text-[0.82rem] text-ink"
                              : "inline-block border border-line px-3 py-1 text-[0.82rem] text-muted line-through"
                          }
                        >
                          {m}
                        </span>
                      ))}
                    </span>
                    <span className="mt-2 block text-[0.78rem] text-muted">公式サイトに明記があった方法のみ表示しています</span>
                  </td>
                </tr>
                <tr>
                  <th className="text-left">店舗</th>
                  <td>{r.storesNote ?? "公式サイト上で確認できませんでした"}</td>
                </tr>
                <tr>
                  <th className="text-left">費用の公式記載</th>
                  <td>{r.fees ?? "査定料・送料などの条件は公式サイト上で明確な記載を確認できませんでした"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.8rem] text-muted">
            出典: {r.name}公式サイト（当サイト確認日 {r.confirmedAt}）。内容は変更される場合があります。持ち込み・申込み前に必ず公式サイトで最新情報をご確認ください。
          </p>
        </div>
      </section>

      {/* ジャンル固有の条件 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="max-w-3xl">
          <h2 className="head rule-safety text-2xl text-ink">ジャンク・改造品・ヘルメットなどの条件</h2>
          {r.policy ? (
            <p className="mt-6 text-[0.95rem] leading-loose text-ink-soft">{r.policy}</p>
          ) : (
            <p className="mt-6 text-[0.95rem] leading-loose text-ink-soft">
              動作不良品・改造品・ヘルメットの製造年などに関する条件は、公式サイト上で明確な記載を確認できませんでした。該当する品物を持ち込む場合は事前に店舗へ確認してください。
            </p>
          )}
          <div className="notice-law mt-8 p-6">
            <p className="font-bold text-ink mb-1">威力を高める改造をしたエアガンは、どの業者でも売れません</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              法定の基準値以上の威力を持つ個体は「準空気銃」にあたりうるもので、所持自体が原則禁止されています。業者の方針以前の問題として、買取・譲渡には出せません。詳しくは
              <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否の解説</a>
              へ。
            </p>
          </div>
        </div>
      </section>

      {/* 特徴・確認できなかったこと */}
      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="head rule-safety text-2xl text-ink">公式サイトで確認できた特徴</h2>
              <ul className="mt-6 space-y-4">
                {r.facts.map((f) => (
                  <li key={f} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
                    <span className="text-safety shrink-0">■</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {r.unconfirmed.length > 0 && (
              <div>
                <h2 className="head rule-safety text-2xl text-ink">確認できなかったこと</h2>
                <p className="mt-6 text-[0.9rem] leading-relaxed text-ink-soft mb-4">
                  以下の項目は、確認日時点で公式サイト上に記載を見つけられませんでした。該当する条件が気になる場合は、持ち込み前に直接お問い合わせください。
                </p>
                <ul className="space-y-2">
                  {r.unconfirmed.map((u) => (
                    <li key={u} className="flex items-baseline gap-3 text-[0.92rem] text-ink-soft">
                      <span className="text-muted shrink-0">—</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 向き・事前チェック */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-field p-7">
            <p className="eyebrow mb-3">FIT</p>
            <h2 className="head text-lg text-ink mb-3">確認できた事実から言える「向いているケース」</h2>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.fitFor}</p>
          </div>
          <div className="card-field p-7">
            <p className="eyebrow mb-3">CHECK</p>
            <h2 className="head text-lg text-ink mb-3">持ち込む前に確認しておきたい点</h2>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.checkBefore}</p>
          </div>
        </div>
        <div className="notice-info mt-8 max-w-3xl p-6">
          <p className="font-bold text-ink mb-1">総合店1店舗での即決は避けてください</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            総合リユース店は「まとめて・すぐに」に強い一方、型番で価値が決まる専門性の高い品物はジャンル専門業者と評価の観点が異なります。実売相場で物差しを持ち、専門業者との相見積もりで比べてから売り先を決めるのが基本です。
          </p>
        </div>
        {r.affiliateUrl && (
          <div className="mt-8">
            <a href={r.affiliateUrl} rel="sponsored nofollow noopener" target="_blank" className="btn-safety text-sm">
              {r.name}の公式サイトで最新条件を確認する（PR）
            </a>
          </div>
        )}
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">あわせて読みたい</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/reviews/" className="btn-safety text-sm">総合リユース店の検証一覧</a>
            <a href="/hikaku/" className="btn-outline text-sm">3つの売り先の違い</a>
            <a href="/souba/" className="btn-outline text-sm">実売相場データ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
