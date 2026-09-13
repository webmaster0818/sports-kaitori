import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "釣具・フィッシング用品買取ガイド",
  description:
    "ロッド・リール・ルアーなど釣具の買取ガイド。売れるものの種類、メーカー・型番・付属品といった査定ポイント、清掃やライン取り外しなど売る前の準備、宅配・出張・店頭の買取方法の違いを一般論で整理します。",
  alternates: { canonical: `${SITE_URL}/fishing/` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "釣具・フィッシング用品買取",
      item: `${SITE_URL}/fishing/`,
    },
  ],
};

const sellables = [
  {
    tag: "ROD",
    title: "ロッド（釣り竿）",
    body: "磯竿・シーバスロッド・エギングロッドなど各ジャンルのロッドは買取の中心的な品目です。継ぎ目やガイドの状態、曲がり・傷の有無が見られやすく、竿袋や保証書が残っていると評価されやすい傾向があります。",
  },
  {
    tag: "REEL",
    title: "リール",
    body: "スピニングリール・ベイトリールともに型番で仕様が特定しやすく、査定が型番と状態で決まりやすい品目です。回転の滑らかさやハンドルのガタつき、糸巻き部の傷などが確認されるのが一般的です。",
  },
  {
    tag: "LURE",
    title: "ルアー・仕掛け類",
    body: "ルアーは単品よりまとめ売りで扱われることが多い品目です。未使用・パッケージ入りのものと使用済みのものを分けて整理しておくと、査定側も確認しやすくなります。",
  },
  {
    tag: "OTHERS",
    title: "その他の小物・装備",
    body: "タックルボックス、クーラーボックス、ウェーダー、ライフジャケットなどの周辺装備も買取対象になることがあります。取り扱い範囲は業者によって異なるため、依頼前に対象品目を確認しておきましょう。",
  },
];

const checkpoints = [
  {
    title: "メーカー・型番",
    body: "釣具は型番で仕様が特定できるため、メーカー名と型番が査定の出発点になります。本体の刻印や銘、外箱・保証書で確認できるようにしておくとやり取りがスムーズです。",
  },
  {
    title: "使用感・状態",
    body: "傷・サビ・塩ガミ・ガイドの欠けなど、使用にともなう状態が評価に反映されます。実際より良く見せる必要はなく、状態を正直に伝えたうえで査定額の根拠を確認するのが基本です。",
  },
  {
    title: "付属品の有無",
    body: "外箱・竿袋・リール袋・保証書・替えスプールなどの付属品は、揃っているほうが評価されやすい一般的傾向があります。購入時の付属品を思い出して、家の中を一度探してみましょう。",
  },
];

const preps = [
  {
    step: "01",
    title: "汚れ・塩分を落とす",
    body: "常識の範囲で構いません。乾いた布で汚れを拭き取り、海で使った道具は塩分が残らないよう手入れしてから出すと、状態が正しく評価されやすくなります。",
  },
  {
    step: "02",
    title: "リールのラインを外す",
    body: "巻いたままのライン（釣り糸）は査定時に取り外されることが一般的です。あらかじめ外しておくと、糸巻き部の状態も確認しやすくなります。",
  },
  {
    step: "03",
    title: "付属品を揃える",
    body: "外箱・竿袋・保証書・替えスプールなど、購入時の付属品をできるだけ揃えます。バラバラに保管している場合は、品物ごとにまとめておきましょう。",
  },
  {
    step: "04",
    title: "まとめて出す",
    body: "ロッド・リール・ルアーを別々に売るより、一式まとめて査定に出すほうが手間が少なく、業者側も対応しやすいのが一般的です。使わない小物も一緒に確認してもらいましょう。",
  },
];

export default function FishingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs items={[{ label: "釣具・フィッシング用品買取" }]} />
          <p className="eyebrow mt-8 mb-4">FISHING GEAR</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            釣具・フィッシング用品の買取ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ロッド・リールは型番で仕様が特定できるため、状態と付属品しだいで査定が決まりやすいジャンルです。このページでは、売れるものの種類、査定で見られるポイント、売る前にやっておきたい準備、買取方法の選び方を一般論として整理します。
          </p>
        </div>
      </section>

      {/* 売れるもの */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">釣具で売れるもの</h2>
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
            シマノ、ダイワ、がまかつ、アブ・ガルシア、メガバスなどの大手・有名メーカー製品は、型番から仕様を特定しやすいため査定対象として扱われるのが一般的です。取り扱いメーカーの範囲は業者ごとに異なります。
          </p>
        </div>
      </section>

      {/* 査定ポイント */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">査定で見られるポイント</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {checkpoints.map((c) => (
              <div key={c.title} className="card-field p-6">
                <h3 className="head text-lg text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
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
        <div className="notice-info mt-8 p-6 max-w-3xl">
          <p className="text-sm leading-relaxed text-ink-soft">
            分解や本格的なメンテナンスまで行う必要はありません。無理な清掃でかえって傷をつけるより、できる範囲の手入れにとどめ、状態はそのまま正直に伝えるのが基本です。
          </p>
        </div>
      </section>

      {/* 買取方法 */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">買取方法は3タイプ</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            釣具の売却方法は、品物を送る「宅配買取」、査定員が自宅に来る「出張買取」、店舗に持ち込む「店頭買取」の3つに大別されます。ロッドのような長尺物は梱包や持ち運びに手間がかかるため、量やサイズに応じて方法を選ぶのが一般的です。各方式の違いは共通ガイドで整理しています。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/guide/" className="btn-safety">はじめての買取ガイドを見る</a>
            <a href="/hikaku/" className="btn-outline">業者の選び方を見る</a>
            <a href="/fishing/junk/" className="btn-outline text-sm">折れたロッド・箱なしリールの売却可否</a>
            <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="notice-info p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">{SITE_NAME}の方針：</span>
            掲載する情報は一般的な内容と、公式サイトなどの一次情報で確認できた内容のみです。詳しくは
            <a href="/verification-policy/" className="font-bold text-safety underline">情報の調査・検証ポリシー</a>
            をご覧ください。他ジャンルは
            <a href="/airsoft/" className="font-bold text-safety underline">エアガン買取</a>
            ・
            <a href="/bikewear/" className="font-bold text-safety underline">バイクウェア買取</a>
            のガイドへ。シマノ・ダイワなど5ブランドの<a href="/souba/" className="font-bold text-safety underline">実売相場データ</a>も公開しています。
          </p>
        </div>
      </section>
    </main>
  );
}
