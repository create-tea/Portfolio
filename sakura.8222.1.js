(function(d,b,w){
	var q = d.createElement('div'); // div 用意
	q.id = "sakura"; // id は sakura を

	// 上の div に style を追加
	q.innerHTML = 'html,body{overflow-x:hidden;}.hana{position:absolute;height:0;width:0;border: 10px solid pink;border-radius: 15px;border-top-right-radius: 0;border-bottom-left-radius: 0;}'+
	'.hana::after{content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;border: 10px solid pink;border-radius: 15px;border-top-right-radius: 0;border-bottom-left-radius: 0;-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);}';
	b.appendChild(q);

	var h = w.innerHeight; // window の高さ
	var u = d.documentElement.scrollTop || b.scrollTop; // スクロール位置
	var z = 9999; // z-index 開始値
	var t = new Array(); // top 値の配列
	var l = new Array(); // left 値の配列
	var y = new Array(); // ゆらぐ最大値の配列
	var s = new Array(); // 落下スピードの値の配列
	var g = new Array(); // 花びら1枚1枚用の id の配列 
	var c = new Array(); // ゆらぎのカウントの配列

	// スクロールした時に u の値を更新
	d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);

	// 花びら30枚用意する為のループ
	for(var i=0;i&lt;30;i++){
		var m = d.createElement(&#039;div&#039;); // div 用意
		m.id = &#039;hanabira&#039;+i; // 花びらの id
		t[i] = Math.random()*-1000+u; // 花びらの最初の top
		l[i] = Math.random()*w.innerWidth; // 花びらの最初の left
		m.setAttribute(&#039;class&#039;,&#039;hana&#039;); // class を追加
		m.setAttribute(&#039;style&#039;,&#039;z-index:&#039;+(z+i)+&#039;;top:&#039;+t[i]+&#039;px;left:&#039;+l[i]+&#039;px;&#039;); // style を追加
		q.appendChild(m); // 最初の div に花びらの div を追加
		y[i] = Math.random()*40+5; // ゆらぐ最大幅
		s[i] = Math.random()*5+2; // スピード
		g[i] = d.getElementById(&#039;hanabira&#039;+i); // id 指定
		c[i] = 0; // ゆらぎの初期値
	}

	// 花びらを繰り返し動かす部分
	setInterval(function(){
		for(var i=0;i&lt;30;i++){
			if(t[i]<u>=c[i]){ // ゆらぎの値が最大値以下なら
					l[i] = l[i]+0.5+Math.random()*0.5; // left を増やす
				}else{
					l[i] = l[i]-0.5-Math.random()*0.5; // left を減らす
				}
				if((y[i]*2)&lt;=c[i]){ // ゆらぎの折り返しの為にカウントを0に
					c[i] = 0;
				}
			}else{ // ウィンドウの下まで移動した場合
				t[i] = u-40; // top 指定で上に戻す
				l[i] = Math.random()*w.innerWidth; // left 指定
			}
			t[i] = t[i]+s[i]; // top の値を更新
			g[i].style.top = t[i]+&#039;px&#039;; // top をスタイルで更新
			g[i].style.left = l[i]+&#039;px&#039;; // left をスタイルで更新
			c[i]++; // カウンタに1プラス
		}
	},45);
})(window.document,window.document.body,window);