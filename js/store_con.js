const store_con = new Vue({
	el: "#store_con",
	data: {
		store_list: [{
			name: "素食汉堡",
			img_url: "img/汉堡.png",
			sell_num: 806,
			distance: "400m",
			give: 20,
			give_mani: 2
		}, ],
		isFixed: false,
		store_nn_list: [{
				name: "热销",
				id: "l1",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
			{
				name: "招牌套餐",
				id: "l2",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
			{
				name: "美味整鸡",
				id: "l3",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
			{
				name: "炸鸡小食",
				id: "l4",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
			{
				name: "酷爽冷饮",
				id: "l5",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
			{
				name: "精品小吃",
				id: "l6",
				sss: [
					{
						name:"美味汉堡",
						num:10,
						yue_num:327,
						img_url:"img/hbb.jpg",
						sum:0
					},
					{
						name:"童子鸡炸鸡",
						num:18,
						yue_num:246,
						img_url:"img/zhaji.jpg",
						sum:0
					},
					{
						name:"双人巨管饱套餐",
						num:40,
						yue_num:142,
						img_url:"img/2rtaocan.jpg",
						sum:0
					},
					{
						name:"可口可乐",
						num:4,
						yue_num:746,
						img_url:"img/kele.jpg",
						sum:0
					},
				]
			},
		],
		
		zhon_num:0
	},
	methods: {
		subtJ() {
			// console.log("0223123")
			let ssr=[];
			this.zhon_num=0
		  ssr=this.store_nn_list
			ssr.forEach(item => {
			    let sst=item.sss
					sst.forEach(item2 => {
						this.zhon_num+=item2.num*item2.sum
					})
			})
			
		},
		menu() {
			this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (this.scroll > 150) {
				this.isFixed = true
			} else {
				this.isFixed = false
			}
		},
		jie(){
			let a=this.zhon_num
			let b=this.store_list[0].give_mani
			let c=a+b
			if(a>=this.store_list[0].give){
				alert("商品费用￥"+a+"配送费￥"+b+"您本次一共消费"+c)
				
				this.zhon_num=0
				for(let i in this.store_nn_list){
					for(let a in this.store_nn_list[i].sss){
						this.store_nn_list[i].sss[a].sum=0
					}
				}
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.menu) // 监听滚动事件，然后用menu这个方法进行相应的处理
	},
})
