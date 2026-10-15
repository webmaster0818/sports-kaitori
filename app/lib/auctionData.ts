// D3(2026-10-15): ジャンク・モデルガン・ヘルメット年式の落札実測データ。
// 落札件数・平均落札価格 = オークファン(aucfan.com)落札相場ページの表示集計値。
// 最高落札価格 = Yahoo!オークション落札相場(落札価格の高い順)で確認した単品出品の最上位。
// まとめ売り・ロット・他ブランドが主体の出品・フリマ出品・パーツ単体は除外。全行を生データと機械照合済み。

export type AuctionRow = {
  category: string;
  count: string;
  avg: string;
  max: string | null;
  maxNote: string;
  aucfanUrl: string;
  yahooUrl: string;
};

export type AuctionSet = {
  heading: string;
  colLabel: string;
  intro: string;
  rows: AuctionRow[];
  fetchedAt: string;
  reading: string[];
  notes?: string;
};

export const AUCTION_SETS: Record<string, AuctionSet> = {
  "airsoft-junk": {
    heading: "「ジャンク」表記のエアガンは実際いくらで落札されているか",
    colLabel: "検索区分",
    intro:
      "「ジャンク」と明記された出品が、オークションで実際にいくらで売買されているかを集計しました。",
    fetchedAt: "2026年10月15日",
    rows: [
      {
        category: "東京マルイ × ジャンク",
        count: "456件（直近30日）",
        avg: "8,054円",
        max: "71,000円",
        maxNote:
          "東京マルイ 電動ガン M14 ウッドタイプ（ジャンク表記・単品出品）。落札日2026年8月23日",
        aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a420a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
      {
        category: "電動ガン × ジャンク",
        count: "292件（直近30日）",
        avg: "8,157円",
        max: "182,000円",
        maxNote:
          "GBLS GDR-15 外装カスタム（ジャンク扱い表記・単品出品）。落札日2026年4月18日",
        aucfanUrl: "https://aucfan.com/intro/q-~c5c5c6b0a5aca5f320a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
      {
        category: "ガスガン × ジャンク",
        count: "431件（直近30日）",
        avg: "4,982円",
        max: "101,000円",
        maxNote:
          "ソーコムギア チェイタックM200 リアルカート式ガスガン（ジャンク・部品取り用・動作未確認の単品出品）。落札日2026年5月15日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5aca5b9a5aca5f320a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%AC%E3%82%B9%E3%82%AC%E3%83%B3%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
    ],
    reading: [
      "3区分とも平均落札価格は4,982〜8,157円。「ジャンク」と明記された出品でも、取引が成立する価格帯があることが実データに出ています。",
      "単品の最高値は7万〜18万円台。人気機種・カスタム品・部品取り需要のある機種は、動作不良でも高値で落札されています。",
      "平均値にはパーツ寄せ集めや低単価の小物も含まれるため、手元の1本の目安は「平均より上・最高値より下」の幅で考えるのが実態に近いです。",
    ],
    notes:
      "「エアガン 動作不良」はオークファン側に集計値の表示がなく、「エアガン ジャンク 部品取り」は集計期間が90日・11件で、かつ最高値がガスガン区分と同一出品のため掲載していません。威力を高める改造を明示した出品は選定対象から除外しています。",
  },

  "fishing-junk": {
    heading: "「折れ」「ジャンク」表記の釣具は実際いくらで落札されているか",
    colLabel: "検索区分",
    intro:
      "折れたロッド・不調のリールが、オークションで実際にいくらで売買されているかを集計しました。",
    fetchedAt: "2026年10月15日",
    rows: [
      {
        category: "ロッド × 折れ × ジャンク",
        count: "8件（直近30日）",
        avg: "4,675円",
        max: "25,850円",
        maxNote:
          "ダイワ エメラルダス ストイストRT 88ML AGS（折れ竿・ジャンク品の単品出品）。落札日2026年5月24日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5eda5c3a5c920c0dea4ec20a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%83%83%E3%83%89%20%E6%8A%98%E3%82%8C%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
      {
        category: "シマノ リール × ジャンク",
        count: "195件（直近30日）",
        avg: "8,916円",
        max: "75,044円",
        maxNote:
          "シマノ ステラ スピニングリール（ジャンク品表記・単品出品）。落札日2026年4月30日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5dea5ce20a5eaa1bca5eb20a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%83%AA%E3%83%BC%E3%83%AB%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
      {
        category: "ダイワ リール × ジャンク",
        count: "259件（直近30日）",
        avg: "7,328円",
        max: "194,074円",
        maxNote:
          "ダイワ マリンパワー3000 12V電動リール（巻上距離・使用時間表示つきのジャンク表記・単品出品）。落札日2026年8月31日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5c0a5a4a5ef20a5eaa1bca5eb20a5b8a5e3a5f3a5af/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%80%E3%82%A4%E3%83%AF%20%E3%83%AA%E3%83%BC%E3%83%AB%20%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AF/0/",
      },
    ],
    reading: [
      "リールはジャンク表記でも平均7,000〜9,000円台で成立し、落札件数も直近30日で195〜259件あります。買い手が一定数いる市場です。",
      "単品の最高値は、上位機種（シマノ ステラ）で75,044円、電動リール（ダイワ マリンパワー3000）で194,074円。元の価格帯が高い機種は不調でも評価が残っています。",
      "折れたロッドは直近30日の落札が8件・平均4,675円と件数自体が少なく、最高値も25,850円。リールに比べて市場は薄いのが実態です。",
    ],
    notes:
      "ブランド名を付けない「リール ジャンク」はオーディオ用オープンリールデッキが混在するため採用していません。「ロッド 穂先折れ」は落札2件で、単品出品の落札例が確認できなかったため掲載していません。",
  },

  "model-gun": {
    heading: "モデルガンは実際いくらで落札されているか",
    colLabel: "検索区分",
    intro:
      "規制に適合した市販モデルガンが、オークションで実際にいくらで売買されているかを集計しました。",
    fetchedAt: "2026年10月15日",
    rows: [
      {
        category: "金属製モデルガン",
        count: "125件（直近30日）",
        avg: "19,515円",
        max: "280,000円",
        maxNote:
          "ホビーフィックス S&W M19-3 ウッドグリップ・専用ケース付（新品状態の単品出品）。落札日2026年6月2日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5e2a5c7a5eba5aca5f320b6e2c2b0c0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%A2%E3%83%87%E3%83%AB%E3%82%AC%E3%83%B3%20%E9%87%91%E5%B1%9E%E8%A3%BD/0/",
      },
      {
        category: "マルシン製",
        count: "698件（直近30日）",
        avg: "11,765円",
        max: "73,300円",
        maxNote:
          "マルシン ウッズマン 金属モデルガン（未発火・単品出品）。落札日2026年5月24日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5dea5eba5b7a5f320a5e2a5c7a5eba5aca5f3/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9E%E3%83%AB%E3%82%B7%E3%83%B3%20%E3%83%A2%E3%83%87%E3%83%AB%E3%82%AC%E3%83%B3/0/",
      },
      {
        category: "タナカ（タナカワークス）製",
        count: "407件（直近30日）",
        avg: "15,631円",
        max: "250,000円",
        maxNote:
          "タナカワークス S&W M29 6.5インチ ブルーイング仕上げ（単品出品）。落札日2026年6月6日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5caa5ab20a5e2a5c7a5eba5aca5f3/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%83%8A%E3%82%AB%20%E3%83%A2%E3%83%87%E3%83%AB%E3%82%AC%E3%83%B3/0/",
      },
      {
        category: "コクサイ製",
        count: "354件（直近30日）",
        avg: "11,125円",
        max: "88,000円",
        maxNote:
          "コクサイ 金属モデルガン M10 2.5インチ（出品説明にSMG刻印あり・JASG検定合格品と記載／新品同様の単品出品）。落札日2026年7月30日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5b3a5afa5b5a5a420a5e2a5c7a5eba5aca5f3/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B3%E3%82%AF%E3%82%B5%E3%82%A4%20%E3%83%A2%E3%83%87%E3%83%AB%E3%82%AC%E3%83%B3/0/",
      },
      {
        category: "発火モデルガン",
        count: "666件（直近30日）",
        avg: "11,766円",
        max: "450,000円",
        maxNote:
          "エラン COLT ディフェンダー 2025年製（未発火・単品出品）。落札日2026年6月19日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5e2a5c7a5eba5aca5f320c8afb2d0/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%A2%E3%83%87%E3%83%AB%E3%82%AC%E3%83%B3%20%E7%99%BA%E7%81%AB/0/",
      },
    ],
    reading: [
      "メーカー別の平均落札価格は11,125〜19,515円。金属製で絞ると平均19,515円で、樹脂製を含む全体より高い水準です。",
      "単品の最高値は7万〜45万円。廃番メーカー（エラン）の末期製品や、ブルーイング仕上げ・専用ケース付きの個体が上位に並びます。",
      "最高値の出品説明には「SMG刻印あり」「JASG検定合格品」「未発火」といった表記が並びます。規制に対応した目印と使用状況の明示が、価格に反映されていることが読み取れます。",
    ],
    notes:
      "改造・無可動実銃・実銃パーツなど規制に触れる可能性のある出品、および複数丁のまとめ出品は選定対象から除外しています。掲載価格はオークションの落札実績であり、個体が規制に適合するかどうかの判断材料ではありません。",
  },

  "helmet-year": {
    heading: "製造年ごとに実際いくらで落札されているか",
    colLabel: "ブランド × 製造年",
    intro:
      "「2024年製」などの製造年が明記された出品に絞って、年式ごとの落札実績を集計しました。",
    fetchedAt: "2026年10月15日",
    rows: [
      {
        category: "SHOEI 2024年製",
        count: "7件（直近30日）",
        avg: "34,302円",
        max: "66,000円",
        maxNote:
          "X-Fifteen MARQUEZ DAZZLE Lサイズ（2024年製・単品出品）。落札日2026年7月19日",
        aucfanUrl: "https://aucfan.com/intro/q-~53484f454920a5d8a5eba5e1a5c3a5c82032303234c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/SHOEI%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202024%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "SHOEI 2023年製",
        count: "5件（直近30日）",
        avg: "30,510円",
        max: "64,000円",
        maxNote:
          "Z-8 MM93 COLLECTION TRACK XXLサイズ（2023年製・美品の単品出品）。落札日2026年7月22日",
        aucfanUrl: "https://aucfan.com/intro/q-~53484f454920a5d8a5eba5e1a5c3a5c82032303233c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/SHOEI%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202023%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "SHOEI 2022年製",
        count: "5件（直近30日）",
        avg: "24,273円",
        max: "43,780円",
        maxNote:
          "Glamster オフホワイト Lサイズ（2022年製・ジャンク表記の単品出品）。落札日2026年4月20日",
        aucfanUrl: "https://aucfan.com/intro/q-~53484f454920a5d8a5eba5e1a5c3a5c82032303232c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/SHOEI%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202022%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "SHOEI 2021年製",
        count: "1件（直近30日）",
        avg: "—（集計値の表示なし）",
        max: "37,000円",
        maxNote:
          "J-Cruise II AGLERO Lサイズ（2021年製・美品の単品出品）。落札日2026年9月30日",
        aucfanUrl: "https://aucfan.com/intro/q-~53484f454920a5d8a5eba5e1a5c3a5c82032303231c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/SHOEI%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202021%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "SHOEI 2020年製",
        count: "2件（直近30日）",
        avg: "20,069円",
        max: "33,000円",
        maxNote:
          "Glamster 59cm Lサイズ（2020年製・美品の単品出品）。落札日2026年7月24日",
        aucfanUrl: "https://aucfan.com/intro/q-~53484f454920a5d8a5eba5e1a5c3a5c82032303230c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/SHOEI%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202020%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "Arai 2024年製",
        count: "2件（直近30日）",
        avg: "28,605円",
        max: "82,000円",
        maxNote:
          "RX-7X TSUBASA Mサイズ（2024年製・美品の単品出品）。落札日2026年9月15日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5a2a5e9a5a420a5d8a5eba5e1a5c3a5c82032303234c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202024%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "Arai 2023年製",
        count: "2件（直近30日）",
        avg: "35,499円",
        max: "60,000円",
        maxNote:
          "RX-7X グラスホワイト（2023年製・美品の単品出品）。落札日2026年7月26日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5a2a5e9a5a420a5d8a5eba5e1a5c3a5c82032303233c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202023%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "Arai 2022年製",
        count: "—（集計値の表示なし）",
        avg: "—（集計値の表示なし）",
        max: "98,000円",
        maxNote:
          "RX-7X REA Mサイズ 取説・元箱付（2022年製・新品未使用と記載の単品出品）。落札日2026年5月11日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5a2a5e9a5a420a5d8a5eba5e1a5c3a5c82032303232c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202022%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "Arai 2021年製",
        count: "—（集計値の表示なし）",
        avg: "—（集計値の表示なし）",
        max: "50,000円",
        maxNote:
          "TOUR CROSS 3 VISION XLサイズ（2021年製・美品の単品出品）。落札日2026年8月1日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5a2a5e9a5a420a5d8a5eba5e1a5c3a5c82032303231c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202021%E5%B9%B4%E8%A3%BD/0/",
      },
      {
        category: "Arai 2020年製",
        count: "1件（直近30日）",
        avg: "23,000円",
        max: "54,780円",
        maxNote:
          "RX-7X NAKASUGA Mサイズ 保存袋付（2020年製・単品出品）。落札日2026年6月1日",
        aucfanUrl: "https://aucfan.com/intro/q-~a5a2a5e9a5a420a5d8a5eba5e1a5c3a5c82032303230c7afc0bd/",
        yahooUrl:
          "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88%202020%E5%B9%B4%E8%A3%BD/0/",
      },
    ],
    reading: [
      "SHOEIは2024年製→2023年製→2022年製→2020年製で平均落札価格が34,302円→30,510円→24,273円→20,069円と下がっており、製造年が新しいほど高く評価される傾向が実データに出ています（各年2〜7件の小標本である点はご留意ください）。",
      "Araiは年式別の落札件数が1〜2件で、平均の比較はできません。単品最高値は2024年製82,000円・2023年製60,000円・2020年製54,780円でした。",
      "一方、年式を指定しない「中古」検索では、廃番のジェットヘルメット（SHOEI J-FORCEⅡ JACK 1,529,000円・Arai RIII 551,000円・SZ-RAM3 502,000円／いずれも単品出品）が上位を占めます。製造から年数が経っていても価格が下がっていません。",
      "つまり製造年は評価の軸の1つですが、廃番・限定モデルの希少性がそれを上回る場合があります。査定前に、年式だけでなくモデル名での落札実績も確認しておくと判断を誤りません。",
    ],
    notes:
      "年式別の集計は「SHOEI ヘルメット 2024年製」のように製造年を含む検索語での集計値です。Arai 2022年製・2021年製はオークファン側に集計値の表示がないため「—」としています。シールド単体・内装単体・まとめ出品・フリマ出品は選定対象から除外しています。",
  },
};
