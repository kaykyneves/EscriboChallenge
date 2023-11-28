    //essa função verifica se o usuário vai inserir um caractere proibido e substitui por um espço vazio
    function validarNumero(input) {
        
        input.value = input.value.replace(/[^0-9]/g, '');
    }   
        //aqui eu crio uma váriavel para receber o valor vindo da função showCount     
        let count = 0;
        function showCount() {
            //aqui eu pego o valor pelo id que está setado no input e transformo ele em Number, pois ele inicialmente vem em String
            const numero = Number(document.getElementById("number").value);
            //verifico se não está vazio e não é igual a 0
            if(numero === 0){
                alert('Atenção, o campo não pode estar vazio e não pode ser igual a 0!');
            }
            
            else{ 
                // crio uma estrutura de repetição para iterar enquando o 'i' for menor que a váriavel 'numero' 
                for(i = 1; i < numero; i++){
                    //aqui uso o operador '%' pois ele pega o resto da divisão, e se o resto for igual a 0, ele é divisível por 3 ou por 5
                        if(i % 3 === 0 ||  i % 5 === 0){
                            //aqui eu vou adicionando ao count todos os numeros divísiveis que vem do 'i'
                            count += i;
                        }
                    } 
                //aqui eu criei um H1 com o id 'exibir' para mostrar o valor do count na tela    
                document.getElementById("exibir").innerHTML = ""  + count;

                //aqui eu zero o count novamente, pois quando eu colocava outro valor, ele ia adicionando dentro do count, agora ele zera e quando eu adiciono outro valor, ele faz o cauculo certo
                count = 0;
                }
            }