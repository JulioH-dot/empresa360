export default{
    data:()=>({
        dados: {}
    }),
    methods:{
        getDadosApi(url, queryParams = {}){
            
            Object.keys(queryParams).forEach(key =>{
                if(queryParams[key] == ''){        
                    delete queryParams[key]           
                }
            })              
            
            //implementamos o método object.key que percorre o objeto recuperando os indice das chave/valor
            // na sequencia com esses indices fizemos um for each nesses indices recuperando o atributo key                                     
            // depois implementamos um if para ver dentro do objeto em cada indice se havia par chave e valor com o 
            // valor nulo, sendo que os que tivessem fossem deletados para aí sim poder gerar as queryParams
            // e adicionar-las na url para fazer o getDadosApi na api fake
            
            
            const urlQueryParams = new URLSearchParams(queryParams).toString()

            const urlComplete = urlQueryParams ?`${url}&${urlQueryParams}`: url

            fetch(urlComplete).then(response =>response.json()
                .then(response =>{
                    this.dados = response
                })
            )
        }

    },
}