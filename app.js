new Vue({
	el:'#app',
	data(){
		return {
			name:'kakashi kisura',
			code: 06160040,
			url: {
				coindesk: 'https://api.coindesk.com/v1/bpi/currentprice.json',
			},
			info:'',
		}
	},
	async mounted(){
		const response = await axios.get(`https://viacep.com.br/ws/06160040/json/unicode/`);
		console.log(response);
	},
});