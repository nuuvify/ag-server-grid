# ag-server-grid
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

[Projeto (Click aqui)](./projects/ag-server-grid/)
No template inicial de cada projeto está sendo disponibilizado de exemplo de como usar o **ag-server-grid**
  
![image](https://github.com/user-attachments/assets/766bbcc6-5383-4f14-b09c-5040c48e14d9)

Tag para chamar o componente **ag-server-grid** no HTML:
  
![image](https://github.com/user-attachments/assets/846e271a-eb47-41c4-8d54-d4685d9cc047)

Configurações necessárias para que a tabela seja renderizada corretamente:

   ##  1- Headers
  * Para definir os nomes nas colunas que irá aparecer no Header da sua tabela,
    faça o import da interface ColDef:
    ![image](https://github.com/user-attachments/assets/8ce8d53f-e318-4194-af27-7b46634e78d7)
   * Depois de importar a interface ColDef, declare a váriavel tipando com a interface
     **ColDef** e siga o exemplo:
      ![image](https://github.com/user-attachments/assets/29d6032e-f15d-4872-a8b5-8787ad26f246)
   * Declare  a váriavel columnDefs dentro da tag `<datatable-server></datatable-server>`:

      ![image](https://github.com/user-attachments/assets/1db5bd7c-eca2-4e98-a319-38babc0745de)

  **Resultado depois de configurar o Headers:**
     
![image](https://github.com/user-attachments/assets/8c857c2c-5dc4-45aa-9e00-8909df1c3539)

   ## 2- Body Table
   Para renderizar o tbody do ag-server-grid é necessário realizar os seguintes passos:
  * Implemente a interface igualando os campos com os campos que vem do back-end:

    ![image](https://github.com/user-attachments/assets/9277765d-ac52-4e86-b571-db880045e02b) ![image](https://github.com/user-attachments/assets/b40e3724-9248-4a89-bc00-54e635ed1b8d)
  * Declare uma váriavel com o tipo de interface que acabamos de criar:

       ![image](https://github.com/user-attachments/assets/c9af2dac-3fc8-4529-b125-16a5439a392a)

 * Chame essa váriavel dentro da tag `<datatable-server></datatable-server>`:
  
    ![image](https://github.com/user-attachments/assets/fc69d88a-de3a-479b-ab4a-1c7b1a269951)

  * Dentro da váriavel columnDefs que declaramos anteriormente, declare os campos em field para 
    que os valores que vem do backend sejam reconhecidos pelo componente:
  
     ![image](https://github.com/user-attachments/assets/42821729-c54c-4434-b6b5-3eb26eb58420)
 
**Resultado depois de fazer a configuração do tbody:**
![image](https://github.com/user-attachments/assets/50571f89-adf3-4dce-9ac3-2e94aa00d4fd)


 ## 3 - Edição de registros
   * Dentro da tag `<datatable-server></datatable-server>` acrescente o `[editable]="true"` para habilitar o botão de edição em todos os registros da tabela:
  
   ![image](https://github.com/user-attachments/assets/72491469-836d-4e58-82d9-4462f1bab09b)
  
**Resultado depois de ativar a configuração editable=true :**
 
 ![image](https://github.com/user-attachments/assets/137ff582-a968-4a3c-aaf5-c6b5b2c9e1b3)


## **4 - Pegar valores da linha do botão editar da tabela**
  * Crie um método para pegar os valores da linha editada como mostra no exemplo:
    
     ![image](https://github.com/user-attachments/assets/18c1102b-ad8f-4a10-80a8-cae8b2cc6113)

  * Declare na tag `<datatable-server></datatable-server>`  (getRowSelect) e chame o método que acabamos de criar:
    
     ![image](https://github.com/user-attachments/assets/ac8efce4-82c7-47dd-a547-8b63919f91e8)


  **Resultado depois de fazer a configuração:**
    
![image](https://github.com/user-attachments/assets/6e759e55-4390-444a-99e6-297e4e37646c)

## 5 - Tradução do Header da tabela ag-server-grid com ngx-translate de acordo com o idioma escolhido:  

* Faça a importação do `TranslateModule` e do `TranslateService` no componente:

  
   ![image](https://github.com/user-attachments/assets/956d108f-cdfa-4ccb-a38d-aed9bf16a64f)

* Declare `TranslateModule` em imports dentro do componente:

   ![image](https://github.com/user-attachments/assets/2db56a10-2c7c-4c2c-b193-0378eaa9c129)

* Declare `private translate: TranslateService`  dentro do construtor:

   ![image](https://github.com/user-attachments/assets/b2881750-5c49-4774-b42a-e821253588f4)

  
* Dentro da variável columnDefs que já declaramos nos passos anteriores, coloque a propriedade 
  `headerValueGetter` e chame um método que vamos criar no próximo passo. como demonstrado no exemplo a seguir:
 
  ![image](https://github.com/user-attachments/assets/ce9bec3b-1a47-4a50-9268-b0ee2b79dbb3)


* crie o método `localizeHeader()` como na imagem:
 ![image](https://github.com/user-attachments/assets/2f750c4a-e2dc-4181-9eb2-23c723021080)

* Declare dentro do arquivo de tradução as chaves field que tem no columnDefs:
 
![image](https://github.com/user-attachments/assets/78680360-8c94-4614-85b3-de8b56678288)![image](https://github.com/user-attachments/assets/93eabcb8-078e-455e-a1e2-4be1c3afb9b9)

* E passe o nome do JSON para que o serviço translate possa encontrar a tradução especifica e concatene com  a varivel headerIdentifier como mostra no exemplo:
 
 ![image](https://github.com/user-attachments/assets/9c28a3cc-1c72-4203-978c-5ac3f8015c07)

 
 ![image](https://github.com/user-attachments/assets/4bf5be78-7a17-470c-8332-c81f3e4b225d)

* Retorne o valor recuperado que está dentro da variavel `headerIdentifier` usando o `this.translate.instant(headerIdentifier)`:
 
 ![image](https://github.com/user-attachments/assets/7322848c-05c0-43dc-8f22-6f9c901259d1)

  **Resultado depois de fazer a configuração:**
  -    Quando apertamos o botão para traduzir para o Português:
  
 ![image](https://github.com/user-attachments/assets/777d3ad2-56a0-4c19-83b3-019636831ec0)

  -    Quando apertamos o botão para traduzir para o Inglês:
**Resultado depois de fazer a configuração:**
 
 ![image](https://github.com/user-attachments/assets/1473ea03-78fe-4c5e-998c-14f89d90465f)
 
## 6 - Ordenação por coluna: 
   Na variavel columnDef onde estão declarada as nossas colunas, basta colocar a propriedade sortBy:true na coluna que deseja ordernar ao carregar os dados:
   ![image](https://github.com/user-attachments/assets/53d70817-eacb-4450-980b-a8cea8b3b236)
