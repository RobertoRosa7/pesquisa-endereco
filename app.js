new Vue({
	el:'#app',
	data(){
		return {
			code: null,
			url: {
				coindesk: 'https://api.coindesk.com/v1/bpi/currentprice.json',
			},
			address:'',
			notify: false,
			searchCep: true,
			text: {
				status:'',
				message: '',
			},
		}
	},
	mounted(){
		
	},
	methods:{
		findAddress(event){
			if(this.code == null || this.code == undefined){
				this.displayNotification('Erro', 'Campo vazio');

			}else if(!isNaN(this.code)){
				axios.get(`https://viacep.com.br/ws/${this.code}/json/unicode/`)
				.then(response => {
					if(response.status != 200){
						this.displayNotification('Erro', 'Sevidor fora de serviço!');
	
					}else{
						if(response.data.erro){
							this.displayNotification('Erro', 'Endereço Inválido!');

						}else{
							this.address = response.data;
							this.searchCep = false;
							this.displayNotification('Sucesso', 'Seu endereço foi encontrado!');
							this.code = '';
							console.log(this.address);
						}
					}
				}).catch(err =>{
					this.displayNotification('Error', err);
				});
			}else{
				this.displayNotification('Erro', 'Digite somente numeros, sem traço!');
			} 
		},
		voltar(){
			this.searchCep = true;
		},
		displayNotification(status, message){
			this.notify = true;
			this.text.message = message;
			this.text.status = status;

			setTimeout(() =>{
				this.notify = false;
			}, 3000);
		}
	}
});