const store_list_vue = new Vue({
	el: "#store_list_vue",
	data: {
		store_nav: [
			{
				name: "附近推荐",
				nav_class: true
			},
			{
				name: "发现好店",
				nav_class: false
			},
			{
				name: "果蔬商超",
				nav_class: false
			},
			{
				name: "到店自取",
				nav_class: false
			}
		],
		
		store_list:[
			{
				name:"77便利店",
				img_url:"img/77便利店.png",
				sell_num:508,
				distance:"900m",
				give:10,
				give_mani:2
			},
			{
				name:"迷之便利店",
				img_url:"img/便利店logo.png",
				sell_num:50,
				distance:"2.5km",
				give:25,
				give_mani:5
			},
			{
				name:"二口面包",
				img_url:"img/面包.png",
				sell_num:402,
				distance:"1.0km",
				give:15,
				give_mani:3
			},
			{
				name:"素食汉堡",
				img_url:"img/汉堡.png",
				sell_num:806,
				distance:"400m",
				give:20,
				give_mani:2
			},
		]


	},
	methods: {
		nav_class_click: function(index) {
			for (let i in this.store_nav) {
				this.store_nav[i].nav_class = false
			}
			this.store_nav[index].nav_class = true
		}
	}
})
