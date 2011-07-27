// ==UserScript==
// @title          scratch_atnd
// @description    ATNDに、Hatsudai.sb」イベント情報を簡単に登録できるGreasemonkeyスクリプト
// @namespace      
// @include        http://atnd.org/events/new
// using [ simple version of $X   ] (c) id:os0x
//       [ parseHTML              ] copied from Pagerization (c) id:ofk
// ==/UserScript==


document.getElementById('event_title').value = '大人のための Scratch 勉強会 #◯';
document.getElementById('event_catch').value = 'Hatsudai.sb';
document.getElementById('event_description').value = "Scratchはブロックをつなげていく簡単な操作でゲームなどのプログラムをつくることができるMITが開発した教育用プログラミング言語です。\n\n" +
"大人のためのScratch勉強会（別名Hatsudai.sb）は、これからScratchを自身であるいはこどもにやらせてみようという初心者の方から、すでにScratchをバリバリ使っている方まで、 どんな形でもいいのでScratchの普及や開発などに貢献したいと思っている人たちが集まる場です。\n\n" +
"毎月第1・第3火曜日の隔週でおこなっていきます。\n\n" +
"勉強会とうたってはいますが、セミナー形式ではなく、教材などいっさいありませんので、学びたいこと、聞きたいこと、発表したいこと、Scratchで作って自慢したいプロジェクトなど、ネタを各自持ってきてください。 Scratchを初めてやってみたいという方はScratchをインストール済みのノートPCを持ってくることを推奨します。\n\n" +
"終わったあと軽く懇親会もおこなっています。（参加自由）\n\n" + 
"参考リンク:\n" +
"・<a href='http://scratchcasts.net/6-install-scratch'>Scratch のインストール方法を動画で紹介</a>\n" +
"・お子様に体験させたいという方には、<a href='http://scratch-ja.org/'>こどもプログラミングサークル‘スクラッチ’</a>\n" +
"・Scratchに関する記事、<a href='http://www.atmarkit.co.jp/news/200801/17/mit.html'>子どもたちがOSS活動、プログラミング言語「Scratch」が開く未来</a>\n\n" +
"Scratchに関して何か発表したいという方はコメントに残してください。その他質問なども遠慮無く。";
document.getElementById('started_at_time').value = '19:00';
document.getElementById('ended_at_time').value = '21:00';
document.getElementById('event_place').value =　'フィヨルドオフィス';
document.getElementById('event_address').value = '〒151-0071 東京都渋谷区本町1-36-11 ドエルヤマト 203';
document.getElementById('event_limit').value = '10';
document.getElementById('event_hash_tag').value = 'hatsudaisb';
