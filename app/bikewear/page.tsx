import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "バイクウェア・ヘルメット買取ガイド",
  description:
    "レザージャケット・レーシングスーツ・ヘルメットなどバイク用品の買取ガイド。サイズ表記・年式・規格表示・使用感といった査定ポイント、ヘルメット特有の注意点、売る前の準備を一般論で整理します。",
  alternates: { canonical: `${SITE_URL}/bikewear/` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "バイクウェア・ヘルメット買取",
      item: `${SITE_URL}/bikewear/`,
    },
  ],
};

const sellables = [
  {
    tag: "JACKET",
    title: "レザージャケット・テキスタイルジャケット",
    body: "ライディングジャケットは季節を問わず取引される中心的な品目です。革の状態やプロテクターの有無、サイズ表記が確認されるのが一般的で、有名メーカー品は査定対象として扱われやすい傾向があります。",
  },
  {
    tag: "SUIT",
    title: "レーシングスーツ（革ツナギ）",
    body: "サーキット走行用のレーシングスーツも買取対象になることがあります。サイズと年式、革やファスナーの状態、転倒による擦過痕の有無が見られやすい品目です。",
  },
  {
    tag: "HELMET",
    title: "ヘルメット",
    body: "フルフェイス・ジェットなどのヘルメットは、モデル名・製造年・内装の状態が確認されるのが一般的です。製造からの経過年数によって扱いが変わることがあるため、後述の注意点を確認してください。",
  },
  {
    tag: "GLOVES / BOOTS",
    title: "グローブ・ブーツ",
    body: "レーシンググローブやライディングブーツも、状態しだいで買取対象になることがあります。単品では扱われにくい場合もあるため、ジャケットなどとまとめて査定に出すのが現実的です。",
  },
];

const checkpoints = [
  {
    title: "サイズ表記",
    body: "ウェア類は着られる人が決まるため、サイズが確認できることが前提になります。タグのサイズ表記が読める状態か、事前に確認しておきましょう。",
  },
  {
    title: "モデル・年式",
    body: "モデル名や発売時期が特定できると、査定側が仕様を確認しやすくなります。品名タグ・型番・購入時の記録などが手がかりになります。",
  },
  {
    title: "規格表示",
    body: "ヘルメットには安全規格の表示（ステッカーや刻印）が付されているのが一般的です。表示が確認できる状態で残っているかどうかも見られるポイントです。",
  },
  {
    title: "使用感",
    body: "革の擦れ・破れ、内装のへたり・においなど、使用にともなう状態が評価に反映されます。状態は正直に伝えたうえで、査定額の根拠を確認するのが基本です。",
  },
];

const preps = [
  {
    step: "01",
    title: "汚れを落とし、陰干しする",
    body: "常識の範囲の手入れで構いません。表面の汚れを拭き取り、におい対策として風通しのよい場所で陰干ししてから出すと、状態が正しく評価されやすくなります。",
  },
  {
    step: "02",
    title: "付属品を揃える",
    body: "ヘルメットの外箱・袋・交換用シールド、ジャケットの脱着式プロテクターやインナーなど、購入時の付属品をできるだけ揃えておきます。",
  },
  {
    step: "03",
    title: "サイズ・製造年を確認しておく",
    body: "ウェアはタグのサイズ表記、ヘルメットは内装のタグ等で製造時期が確認できることが一般的です。事前に控えておくと査定のやり取りがスムーズです。",
  },
  {
    step: "04",
    title: "まとめて出す",
    body: "ジャケット・ヘルメット・グローブ・ブーツを一式まとめて査定に出すほうが手間が少なく、単品では扱われにくい小物も一緒に確認してもらえます。",
  },
];

export default function BikewearPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs items={[{ label: "バイクウェア・ヘルメット買取" }]} />
          <p className="eyebrow mt-8 mb-4">BIKE WEAR</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            バイクウェア・ヘルメットの買取ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            レザージャケットやレーシングスーツ、ヘルメットは、サイズ・年式・状態で査定が決まりやすいジャンルです。このページでは、売れるものの種類、査定で見られるポイント、ヘルメット特有の注意点、売る前の準備を一般論として整理します。
          </p>
        </div>
      </section>

      {/* 売れるもの */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">バイクウェアで売れるもの</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sellables.map((s) => (
            <div key={s.tag} className="card-field p-6">
              <span className="gear-tag mb-4">{s.tag}</span>
              <h3 className="head mt-3 text-lg text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="notice-info mt-8 p-6 max-w-3xl">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">主要メーカーの例：</span>
            ウェアではクシタニ、アルパインスターズ、ダイネーゼ、ヘルメットではアライ（Arai）、ショウエイ（SHOEI）、OGKカブトなどの大手・有名メーカー製品が査定対象として扱われるのが一般的です。取り扱いメーカーの範囲は業者ごとに異なります。
          </p>
        </div>
      </section>

      {/* 査定ポイント */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">査定で見られるポイント</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {checkpoints.map((c) => (
              <div key={c.title} className="card-field p-6">
                <h3 className="head text-lg text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ヘルメットの注意 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="notice-law p-6 md:p-8">
          <p className="head text-lg text-ink">
            ヘルメットを売る前に: 製造年と転倒歴を確認しましょう
          </p>
          <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-soft">
            <p>
              ヘルメットは安全用品のため、製造からの経過年数が査定や買取可否の判断材料になることがあります。製造時期は内装のタグ等で確認できるのが一般的です。事前に確認し、査定時にそのまま伝えましょう。
            </p>
            <p>
              また、転倒や落下の衝撃を受けたヘルメットは、外見に大きな傷がなくても内部の衝撃吸収材が損傷している可能性があり、安全上の価値が下がるとされるのが一般的です。転倒歴・落下歴は隠さずに申告するのが基本です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">売る前の準備 — 4ステップ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {preps.map((p) => (
              <div key={p.step} className="card-field p-6">
                <div className="flex items-baseline gap-4">
                  <span className="head text-2xl text-safety leading-none">{p.step}</span>
                  <h3 className="head text-lg text-ink">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 買取方法 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">買取方法は3タイプ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          バイクウェアの売却方法も、品物を送る「宅配買取」、査定員が自宅に来る「出張買取」、店舗に持ち込む「店頭買取」の3つに大別されます。革ツナギやヘルメットはかさばるため、量に応じて方法を選ぶのが一般的です。各方式の違いと売却の流れは共通ガイドで整理しています。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/guide/" className="btn-safety">はじめての買取ガイドを見る</a>
          <a href="/hikaku/" className="btn-outline">業者の選び方を見る</a>
            <a href="/bikewear/helmet/" className="btn-outline text-sm">中古ヘルメットの買取可否</a>
            <a href="/bikewear/suit/" className="btn-outline text-sm">革ツナギの売却</a>
            <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="notice-info p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">{SITE_NAME}の方針：</span>
            掲載する情報は一般的な内容と、公式サイトなどの一次情報で確認できた内容のみです。詳しくは
            <a href="/verification-policy/" className="font-bold text-safety underline">情報の調査・検証ポリシー</a>
            をご覧ください。他ジャンルは
            <a href="/airsoft/" className="font-bold text-safety underline">エアガン買取</a>
            ・
            <a href="/fishing/" className="font-bold text-safety underline">釣具買取</a>
            のガイドへ。クシタニ・SHOEIなど5ブランドの<a href="/souba/" className="font-bold text-safety underline">実売相場データ</a>も公開しています。
          </p>
        </div>
      </section>
    </main>
  );
}
