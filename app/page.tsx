import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "エアガン・釣具・バイクウェアの買取業者を公式確認情報で正直に比較。準空気銃など法規制の注意点、ジャンル別の売り方、高く売る準備までまとめた専門買取ガイドです。",
  alternates: { canonical: `${SITE_URL}/` },
};

const silos = [
  {
    href: "/airsoft/",
    tag: "AIRSOFT",
    title: "エアガン・トイガン買取",
    body: "東京マルイなど国内外メーカーのエアガン・電動ガン・モデルガン。威力が法定値を超える個体（準空気銃）は所持自体が禁止されており買取対象になりません。売る前に必ず法規制の確認を。",
    sub: { href: "/airsoft/law/", label: "エアガンの法規制と買取可否" },
  },
  {
    href: "/fishing/",
    tag: "FISHING",
    title: "釣具・フィッシング用品買取",
    body: "ロッド・リール・ルアーなどの釣具。型番と状態で査定が決まりやすいジャンルです。付属品の有無が価格を左右するため、売る前の準備が重要です。",
    sub: null,
  },
  {
    href: "/bikewear/",
    tag: "BIKE WEAR",
    title: "バイクウェア・ヘルメット買取",
    body: "レザージャケット・レーシングスーツ・ヘルメットなど。サイズ・年式・規格表示が査定のポイント。ヘルメットは製造年による扱いの違いに注意が必要です。",
    sub: null,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow mb-4">SPORTS &amp; OUTDOOR GEAR</p>
          <h1 className="head text-3xl md:text-5xl leading-tight text-ink max-w-3xl">
            使わなくなったギアを、
            <br />
            正直な情報で、正しく売る。
          </h1>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
            {SITE_NAME}は、エアガン・釣具・バイクウェアの買取を専門に扱う比較ガイドです。
            掲載する業者情報は公式サイトで確認した内容のみを確認日つきで掲載し、広告報酬の有無は評価に影響させません。
            法規制があるジャンル（エアガン）は、売れないものを売れないと明記します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/hikaku/" className="btn-safety">業者の選び方を見る</a>
            <a href="/guide/" className="btn-outline">はじめての方へ</a>
          </div>
        </div>
      </section>

      {/* 3サイロ */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">ジャンル別 買取ガイド</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {silos.map((s) => (
            <div key={s.href} className="card-field p-6 flex flex-col">
              <span className="gear-tag mb-4">{s.tag}</span>
              <h3 className="head text-lg text-ink">
                <a href={s.href} className="hover:text-safety transition-colors">{s.title}</a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft flex-1">{s.body}</p>
              <div className="mt-5 flex flex-col gap-2">
                <a href={s.href} className="text-sm font-bold text-safety">
                  {s.title}のガイドへ →
                </a>
                {s.sub && (
                  <a href={s.sub.href} className="text-xs text-muted underline">
                    {s.sub.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 法規制注意喚起 */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="notice-law p-6 md:p-8">
          <p className="head text-lg text-ink">
            エアガンを売る前に: 「準空気銃」は買取以前に所持が禁止されています
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft max-w-3xl">
            威力を高める改造などで弾丸の運動エネルギーが法定の基準値以上となったエアガンは、銃砲刀剣類所持等取締法上の「準空気銃」にあたり、原則として所持自体が禁止されています。
            該当するおそれのある個体は買取に出すことができません。判断に迷う場合の考え方と対処を専用ページでまとめています。
          </p>
          <a href="/airsoft/law/" className="mt-4 inline-block text-sm font-bold text-safety">
            エアガンの法規制と買取可否を確認する →
          </a>
        </div>
      </section>

      {/* 3つの売り先 */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="head rule-safety text-2xl text-ink">売り先は大きく3つ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          スポーツ・アウトドア用品の売却先は「ジャンル専門の買取業者」「複数社への一括査定」「実店舗のリユースチェーン」の3タイプに分かれます。
          それぞれ得意な品物と手間が異なるため、1社に決め打ちせず、タイプの違いを知ってから選ぶのが失敗しないコツです。
        </p>
        <div className="mt-6">
          <a href="/hikaku/" className="btn-outline text-sm">3タイプの違いを詳しく見る</a>
        </div>
      </section>

      {/* 検証ポリシー */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="notice-info p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">当サイトの方針: </span>
            掲載する業者・相場の情報は、公式サイトなどの一次情報で確認できた内容のみを確認日つきで掲載します。広告（PR）を含みますが、報酬の有無は評価・掲載順に影響しません。
            詳しくは<a href="/verification-policy/" className="font-bold text-safety underline">情報の調査・検証ポリシー</a>をご覧ください。
          </p>
        </div>
      </section>
    </main>
  );
}
