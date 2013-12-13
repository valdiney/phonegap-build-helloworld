

   function Classe_orcamento(comprimento, largura, valorDoPiso, precoDaArgamassa) {

   	    this.comprimento = comprimento;
   	    this.largura = largura;
   	    this.valorDoPiso = valorDoPiso;
        this.precoDaArgamassa = precoDaArgamassa;
        

   	  this.calculo_area = function() {
            var calculando = this.comprimento * this.largura;
                 return calculando.toFixed(2);
       } 

   	  this.perimetro = function() {
            var calculando = this.comprimento * 2 + this.largura * 2;
                 return calculando.toFixed(2);
       }

      this.metragemDoPiso = function() {
            var calculando_quebra = Number(this.calculo_area()) * 10 / 100,
                comDezPorcentoDe_quebra = calculando_quebra + Number(this.calculo_area());
                 return Math.floor(comDezPorcentoDe_quebra);
      }

   	  this.gastosCom_pisos = function() {
            var calculando = Number(this.calculo_area()) * this.valorDoPiso;
                 return calculando.toFixed(2);
       } 

      this.sacasDe_argamassa = function() {
            var calculando = Number(this.calculo_area()) / 4;
                 return Math.ceil(calculando);
       }

      this.gastosCom_Argamassa = function() {
            var calculando = Number(this.sacasDe_argamassa()) * this.precoDaArgamassa;
                 return calculando.toFixed(2);
      }

      this.gastoTotal = function() {
            var calculando = Number(this.gastosCom_pisos()) + Number(this.gastosCom_Argamassa());
                 return calculando.toFixed(2);
      }

      this.gerando_relatorio = function() {

            var saidaDe_resultados = document.getElementById('saidaDe_resultados_relatorio');
                saidaDe_resultados_relatorio.innerHTML = 'Área : ' + this.comprimento + ' * ' + this.largura + ' = ' + this.calculo_area() + ' mais 10% de quebra ';
                saidaDe_resultados_relatorio.innerHTML += '<br> Perímetro: ' + this.comprimento + ' * 2 + ' + this.largura + ' * 2 = ' + this.perimetro(); 
                saidaDe_resultados_relatorio.innerHTML += '<br> Custo com o piso: ' + this.valorDoPiso + ' * ' + this.calculo_area() + ' = ' + this.gastosCom_pisos();
             } 

   } // end class...


     

   var consultar = document.getElementById('consultar');
       consultar.onclick = function() {

           //var icone_trabalhador = document.getElementById('icone_trabalhador');
               //icone_trabalhador.style.display = 'block';
            
           var comprimento = Number(document.getElementById('comprimento').value),
               largura = Number(document.getElementById('largura').value),
               valorDoPiso = Number(document.getElementById('valorpiso').value),
               precoDaArgamassa = Number(document.getElementById('preco_argamassa').value),
               
                saidaDe_resultados = document.getElementById('saidaDe_resultados'),
                string_metros = ' m² ',
                string_real = ' R$ ';


            var orcamento = new Classe_orcamento(comprimento, largura, valorDoPiso, precoDaArgamassa);
                saidaDe_resultados.innerHTML =  'Área de: <b>' + orcamento.calculo_area() + string_metros + '</b><br>';
                saidaDe_resultados.innerHTML += 'Perimetro de <b>: ' + orcamento.perimetro() + string_metros + '</b><br>';
                saidaDe_resultados.innerHTML += 'Compre <b>' + orcamento.metragemDoPiso() + '</b> caixas de pisos, cada caixa poderá cobrir <b>1</b> metro de  área!';

                saidaDe_resultados.innerHTML += '<br> Metragem do piso custará: <b>' + string_real + orcamento.gastosCom_pisos() + '</b>';
                saidaDe_resultados.innerHTML += '<br> Será usado <b>' + orcamento.sacasDe_argamassa() + '</b> sacos de argamassa <br> de 20 Kg cada!';
                saidaDe_resultados.innerHTML += '<br> Gastará <b>' + string_real + orcamento.gastosCom_Argamassa() + '</b> com a argamassa!';
                saidaDe_resultados.innerHTML += '<br> Total de gastos: <b>  ' + string_real + orcamento.gastoTotal() + '</b>';
                orcamento.gerando_relatorio(); // Chamando o metodo que gera os relatórios...
             

            var mostrarButton_relatorio = document.getElementById('relatorio').style.display = 'block',
                apresenta_relatorio = document.getElementById('relatorio');
                apresenta_relatorio.onclick = function() { 

                    var mostrarButton_relatorio = document.getElementById('relatorio');
                    var div_relatorio = document.getElementById('whapper_relatorio');

                  function condicao_relatorio(estado) { 
                      return div_relatorio.style.display = estado;
                  } 


                  if( div_relatorio.style.display == 'none' ) {
                       
                       condicao_relatorio('block');
                       mostrarButton_relatorio.innerHTML = 'Ocultar relatório de processamento';
                  }
             
                  else {
                      condicao_relatorio('none');
                      mostrarButton_relatorio.innerHTML = 'Quero ver  o relatório de processamento';
                  }
                   
                   return false;
            } //...
               
               

         

     } // end consultar ... 


     