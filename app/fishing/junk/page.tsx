import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "折れたロッド・箱なしリールは売れる？— 釣具の売却可否と減額要因",
  description:
    "折れた釣り竿(ロッド)、箱や保証書のないリール、古いルアーやタックルの売却可否を整理。値が付くケース・付きにくいケース、査定前の準備、パーツ取り需要の考え方を解説します。",
  alternates: { canonical: `${SITE_URL}/fishing/junk/` },
};

const cases = [
  {
    tag: "値が付きやすい",
    title: "箱なし・保証書なしの現行リール",
    body: "リールは本体の型番で価値が判断されるため、箱や保証書がなくても査定対象とする業者が一般的です。付属品ありの個体より評価は下がりますが、「箱がない＝売れない」ではありません。",
  },
  {
    tag: "値が付きやすい",
    title: "ティップ(穂先)折れの人気ロッド",
    body: "穂先のみの破損で、パーツ交換で復旧できるモデルは、修理前提またはパーツ取りとして査定されることがあります。生産終了モデルは部品需要が厚いこともあります。",
  },
  {
    tag: "値が付きにくい",
    title: "バット(根元)側で折れたロッド",
    body: "根元近くの破損はブランク全体の交換になるため、修理費が本体価値を上回りやすく、パーツ取り以外の評価は付きにくくなります。",
  },
  {
    tag: "値が付きにくい",
    title: "塩ガミ・固着で回らないリール",
    body: "内部の錆・固着は分解整備が必要で、症状が重いほど評価が下がります。ただし高級機種はオーバーホール前提で査定対象とする業者もあります。",
  },
];

const prep = [
  { title: "折れた部位と症状をメモする", body: "「穂先から○cm」「バット側」「ガイド脱落」など具体的に。リールなら「回転が重い」「ドラグが効かない」「異音」といった症状を書き出します。" },
  { title: "折れた破片・外したパーツも一緒に", body: "折れた穂先やガイド、交換前の純正ハンドル・スプールは、パーツ取り評価の足しになります。捨てずにまとめておきます。" },
  { title: "塩分と汚れを落として乾かす", body: "水洗い後にしっかり乾燥させる程度で十分です。自分で分解・注油をすると、かえって状態を悪化させることがあります。" },
  { title: "型番と製造年を控える", body: "リールはフットやボディの刻印、ロッドはブランクの表記から型番を控えます。実売相場データと照合するときに必要です。" },
];

const policies = [
  {
    name: "タックルベリー（店頭）",
    broken: "「ガイドが付いているロッドで簡易的に修理が可能な物に限り買取りできます」（店舗FAQ）",
    old: "「破損や必要部品の欠損がなければ、年式・キズは問いません」（店舗FAQ）。付属品がない場合は査定額ダウンと明記（WEB買取案内）",
  },
  {
    name: "タックルベリー（WEB宅配）",
    broken: "「買取および引取（処分）はできません」（WEB宅配買取FAQ）— 店頭とは逆の扱い",
    old: "同上（年式・キズは問わない）",
  },
  {
    name: "ハードオフグループ（オフハウス）",
    broken: "「買取いたします。ただし、複数か所の破損や年式が古いものは買取できない場合もあります」（キャンプ・アウトドアFAQ）",
    old: "古いロッド・リールも買取。「ラインローラーの破損やサビ等などの劣化により、買取できない場合もあります」。使用後の仕掛け・ラインは基本的に買取不可",
  },
  {
    name: "釣具買取専門店ウェイブ",
    broken: "明記なし（フローターの空気漏れ等のジャンク品は取扱不可と明記）",
    old: "「長年愛用された釣具も高価買取」。値段がつかない品は無料で引き取り（処分）とFAQに明記",
  },
];

const faqs = [
  {
    q: "箱・保証書がないリールは買取額がどのくらい下がりますか？",
    a: "一律の目安はありません。業者の査定基準・機種の人気・状態によって差は変わります。当サイトの実売相場データでは、ヤフオク落札一覧の出品タイトルに「箱なし」「本体のみ」と書かれた落札例を出典ページで探すと、付属品ありとの価格差を実際の取引で確認できます。",
  },
  {
    q: "折れたロッドは修理してから売ったほうがいいですか？",
    a: "修理費が査定額の上乗せを上回る場合が多いため、先に業者へ「折れたままの査定額」を確認してから判断するのが安全です。メーカー修理で穂先交換した記録がある場合は、修理明細を一緒に提示してください。",
  },
  {
    q: "古いルアーや仕掛けはまとめて売れますか？",
    a: "ルアーはブランド・廃盤品・状態で評価が分かれ、まとめ売りとして受け付ける業者もあります。ただし使用済みの針・ラインなど消耗品は対象外となるのが一般的です。事前に業者の対象品目を確認してください。",
  },
  {
    q: "総合リユース店と釣具専門店、どちらに持ち込むべきですか？",
    a: "折れたロッドや不具合のあるリールは、パーツ取り・修理の判断ができる釣具専門業者のほうが評価の観点を持っています。総合店はジャンル混在をまとめて処分したいときに向きます。1店舗で即決せず、両方の提示額を比べてください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "釣具・フィッシング用品買取", item: `${SITE_URL}/fishing/` },
    { "@type": "ListItem", position: 3, name: "折れたロッド・箱なしリールの売却可否", item: `${SITE_URL}/fishing/junk/` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FishingJunkPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "釣具・フィッシング用品買取", href: "/fishing/" }, { label: "折れたロッド・箱なしリールの売却可否" }]} />
          <p className="eyebrow mt-8 mb-4">FISHING — JUNK</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">折れたロッド・箱なしリールは売れる？</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            「穂先が折れた」「箱も保証書も捨てた」「リールが固着している」——釣具でよくある3つの状態について、値が付くケースと付きにくいケースを整理します。釣具は型番で価値が決まる品目なので、状態の悪い個体でも「捨てる前に査定」が基本です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">結論 — 「箱なし」「折れ」でもゼロ円とは限らない</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="card-field p-6">
              <span className={c.tag === "値が付きやすい" ? "gear-tag mb-4" : "gear-tag gear-tag--safety mb-4"}>{c.tag}</span>
              <h3 className="head text-lg text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="notice-info mt-8 max-w-3xl p-6">
          <p className="font-bold text-ink mb-1">上の分類は一般的な傾向です</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            動作不良品・破損品の受け入れ可否と評価は業者ごとに異なります。持ち込む前に、その業者がジャンク・パーツ取りを受け付けているかを公式情報で確認してください。
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">査定前の準備 — 4つ</h2>
          <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft list-decimal pl-5">
            {prep.map((p) => (
              <li key={p.title}>
                <span className="font-bold text-ink">{p.title}。</span>
                {p.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">業者が公式に書いている「折れ・箱なし」の扱い（確認日2026年9月13日）</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          同じ業者でも、店頭と宅配で条件が違うことがあります。当サイトが各社公式サイトで確認した記載の要旨です。詳細は各社の検証ページをご覧ください。
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="table-spec min-w-[680px]">
            <thead>
              <tr>
                <th className="text-left">業者</th>
                <th className="text-left">折れたロッド</th>
                <th className="text-left">古い・付属品なし</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((p) => (
                <tr key={p.name}>
                  <td className="font-bold text-ink whitespace-nowrap">{p.name}</td>
                  <td>{p.broken}</td>
                  <td>{p.old}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[0.8rem] text-muted">出典: 各社公式サイトのFAQ・買取案内ページ（当サイト確認日2026年9月13日）。内容は変更される場合があります。</p>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">相場の物差しを持ってから査定へ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          当サイトでは、シマノ・ダイワ・がまかつ・アブガルシア・メガバスの実売相場（オークション落札の件数・平均・最高値・出典つき）を公開しています。出典ページで「箱なし」「ジャンク」と書かれた落札例まで確認すると、状態別の価格差を実際の取引で把握できます。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/souba/shimano/" className="btn-outline text-sm">シマノの実売相場</a>
          <a href="/souba/daiwa/" className="btn-outline text-sm">ダイワの実売相場</a>
          <a href="/souba/" className="btn-safety text-sm">実売相場データ一覧</a>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div>
          <h2 className="head rule-safety text-2xl text-ink">よくある質問</h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-field p-5">
                <summary className="cursor-pointer head text-base text-ink">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">あわせて読みたい</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/fishing/" className="btn-safety text-sm">釣具買取ガイド</a>
          <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
          <a href="/hikaku/" className="btn-outline text-sm">3つの売り先の違い</a>
        </div>
      </section>
    </main>
  );
}
