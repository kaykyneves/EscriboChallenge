    function validarNumero(input) {
        
        input.value = input.value.replace(/[^0-9]/g, '');
    }        
        let count = 0;
        function exibirNumero() {
            
            const numero = Number(document.getElementById("number").value);
            
            if(numero === ''){
                alert('Atenção, o campo não pode estar vazio!');
            }
            else{ 
                for(i = 1; i < numero; i++){
                        if(i % 3 === 0 ||  i % 5 === 0){
                            count += i;
                        }
                    } 
                document.getElementById("exibir").innerHTML = ""  + count;
                count = 0;
                }
            }