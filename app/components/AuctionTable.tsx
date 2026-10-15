import { AUCTION_SETS } from "../lib/auctionData";

// ジャンク・可否ページ向けの落札実測セクション(D3・2026-10-15)。
// 数値はaucfan集計値+Yahoo!オークション落札一覧の単品最高値のみ。まとめ売り・ロット・他社製は除外。
export default function AuctionTable({ setKey }: { setKey: string }) {
  const set = AUCTION_SETS[setKey];
  if (!set) return null;

  return (
    <section className="border-y border-line bg-paper-deep" id="jissoku">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">{set.heading}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft mb-6">
          {set.intro}
          落札件数・平均落札価格はオークファン(aucfan.com)の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場を落札価格の高い順に確認した単品出品の最上位です(まとめ売り・ロット・他ブランドが主体の出品は除外)。取得日はいずれも{set.fetchedAt}です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-spec min-w-[760px]">
            <thead>
              <tr>
                <th>{set.colLabel}</th>
                <th>落札件数（集計期間）</th>
                <th>平均落札価格</th>
                <th>最高落札価格（単品）</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {set.rows.map((r) => (
                <tr key={r.category}>
                  <td className="font-bold text-ink">{r.category}</td>
                  <td>{r.count}</td>
                  <td>{r.avg}</td>
                  <td>
                    {r.max ?? "—"}
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
        {set.reading.length > 0 && (
          <ul className="mt-5 max-w-3xl space-y-2">
            {set.reading.map((t) => (
              <li key={t} className="flex items-baseline gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="text-safety text-[0.7rem] shrink-0">◆</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="notice-law mt-8 max-w-3xl p-6">
          <p className="head text-base text-ink mb-2">実売価格は買取査定額とは異なります</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            掲載しているのはオークションで売買が成立した価格です。買取店の査定額は、業者の利益や販売コストが差し引かれるため実売より低くなるのが一般的です。状態・付属品・改造の有無で大きく変わる幅の参考であり、査定額を保証するものではありません。
          </p>
        </div>
        {set.notes && <p className="mt-4 text-xs text-muted">補足: {set.notes}</p>}
      </div>
    </section>
  );
}
