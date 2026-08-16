import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "エアガン・トイガン買取ガイド",
  description:
    "エアガン・電動ガン・モデルガンを売る前に知っておきたい基礎ガイド。売れるものの種類、付属品や箱など売る前の準備、査定で見られるポイント、準空気銃など法規制の注意点をまとめました。",
  alternates: { canonical: `${SITE_URL}/airsoft/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "エアガン・トイガン買取", item: `${SITE_URL}/airsoft/` },
  ],
};

const sellables = [
  {
    tag: "AEG / GBB",
    name: "電動ガン・ガスガン",
    body: "エアソフトガンの中心ジャンルです。動作するかどうか、外装の状態、付属品の有無が査定の基本になります。バッテリーやマガジンなどの純正付属品が揃っていると評価されやすい傾向があります。",
  },
  {
    tag: "COCKING",
    name: "エアコッキングガン",
    body: "手動でコッキングするタイプのエアソフトガンです。比較的手頃な品が多いジャンルですが、状態の良い品や生産終了モデルは査定対象になります。",
  },
  {
    tag: "MODEL GUN",
    name: "モデルガン",
    body: "弾を発射しない観賞・操作用のトイガンです。金属モデルガンには法令上の規格があるため、素性のはっきりした市販品であることが前提になります。箱・説明書の有無も見られます。",
  },
  {
    tag: "PARTS",
    name: "パーツ・カスタム品",
    body: "外装パーツ、マガジン、ストックなどの単品パーツも買取対象になることがあります。取り外した純正パーツを揃えて出すか、カスタム状態のまま出すかは事前に整理しておきましょう。",
  },
  {
    tag: "OPTICS",
    name: "光学機器・装備品",
    body: "ドットサイト・スコープなどの光学機器や、ホルスター・スリングなどの装備品も対象になり得ます。レンズの状態やマウントの付属が確認されます。",
  },
];

const prepSteps = [
  {
    step: "01",
    title: "付属品と箱を揃える",
    body: "外箱・説明書・マガジン・付属レンチ類など、購入時に付いていたものをできる範囲で揃えます。付属品の有無は多くの買取店が査定項目として挙げる基本要素です。",
  },
  {
    step: "02",
    title: "カスタムパーツを整理する",
    body: "カスタムしている場合は、取り外した純正パーツが残っているかを確認します。純正状態に戻せるか、カスタム内容を説明できるかを整理しておくと査定時のやり取りがスムーズです。",
  },
  {
    step: "03",
    title: "動作と外観を確認する",
    body: "動作するか、破損や欠品がないかを自分でも確認しておきます。不具合がある場合は隠さず申告するのが基本です。あわせて、威力にかかわる改造の有無は必ず確認してください。",
  },
];

const checkpoints = [
  {
    label: "メーカー",
    body: "東京マルイ・KSC・ウエスタンアームズ・マルゼン・タナカワークスなどの国内メーカーのほか、海外メーカー製も買取対象になり得ます。メーカーが特定できることが査定の出発点です。",
  },
  {
    label: "型番・モデル名",
    body: "同じメーカーでもモデルや世代で扱いが変わります。本体やパッケージの表記からモデル名を控えておくと、査定依頼時の説明が正確になります。",
  },
  {
    label: "状態・付属品",
    body: "動作の可否、外装の傷、付属品と箱の有無が総合的に見られます。評価基準の詳細は業者ごとに異なるため、複数社で査定を受けて比べるのが基本です。",
  },
];

export default function AirsoftPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "エアガン・トイガン買取" }]} />
          <p className="eyebrow mt-8 mb-4">AIRSOFT &amp; TOY GUN</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            エアガン・トイガン買取ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            使わなくなったエアガンやモデルガンは、状態と付属品を整えれば買取に出せます。ただしこのジャンルには法規制があり、
            威力が法定の基準値以上となる「準空気銃」にあたるおそれのある個体は、そもそも所持が禁止されており買取に出せません。
            このページでは、売れるものの種類・売る前の準備・査定で見られるポイントを、{SITE_NAME}が一般論として整理します。
          </p>
        </div>
      </section>

      {/* 法規制注意（最上部に配置） */}
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <div className="notice-law p-6 md:p-8">
          <span className="gear-tag gear-tag--safety mb-4">LAW CHECK</span>
          <p className="head text-lg text-ink">
            売る前に必ず確認: 「準空気銃」は所持自体が禁止されています
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            威力を高める改造などにより弾丸の運動エネルギーが法定の基準値以上となったエアガンは、銃砲刀剣類所持等取締法上の「準空気銃」にあたりうるものです。
            準空気銃は原則として所持自体が禁止されているため、買取に出すことはできません。改造の有無や購入経緯に不安がある場合は、先に法規制ページを確認してください。
          </p>
          <a href="/airsoft/law/" className="btn-safety mt-5 text-sm">
            エアガンの法規制と買取可否を確認する
          </a>
        </div>
      </section>

      {/* 売れるもの */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="head rule-safety text-2xl text-ink">買取に出せるものの種類</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
          法令の範囲内で製造・販売されている市販品であることが大前提です。そのうえで、一般に次のようなジャンルが買取対象になります。
          取り扱い範囲は業者ごとに異なるため、依頼前に各社の公式情報で確認してください。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sellables.map((s) => (
            <div key={s.name} className="card-field p-6">
              <span className="gear-tag mb-4">{s.tag}</span>
              <h3 className="head text-lg text-ink">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="head rule-safety text-2xl text-ink">売る前の準備 — 3ステップ</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {prepSteps.map((p) => (
              <div key={p.step} className="card-field p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="head text-2xl text-safety leading-none">{p.step}</span>
                  <h3 className="head text-base text-ink">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="notice-info mt-8 max-w-3xl p-5">
            <p className="text-sm leading-relaxed text-ink-soft">
              <span className="font-bold text-ink">補足: </span>
              威力にかかわる改造が施された個体や、改造の有無が不明な個体は、準備以前に売却の可否そのものを確認する必要があります。
              <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否のページ</a>で判断の考え方をまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* 査定で見られるポイント */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="head rule-safety text-2xl text-ink">査定で見られるポイント</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
          具体的な査定額は業者・時期・個体の状態によって変わるため、当サイトでは金額の目安は掲載しません。
          ここでは、多くの買取店に共通する一般的な評価の観点だけを整理します。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {checkpoints.map((c) => (
            <div key={c.label} className="card-field p-6">
              <h3 className="head text-base text-ink">{c.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 次に読む */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="card-field p-6 md:p-8">
          <h2 className="head text-xl text-ink">次に読む</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            売り先は「ジャンル専門業者」「一括査定」「実店舗リユースチェーン」の3タイプに分かれます。1社に決め打ちせず、タイプの違いを知ってから相見積もりを取るのが失敗しないコツです。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/hikaku/" className="btn-safety text-sm">買取業者の選び方を見る</a>
            <a href="/guide/" className="btn-outline text-sm">はじめての方へ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
