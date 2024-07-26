# ag-server-grid

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Code scaffolding

Run `ng generate component component-name --project ag-server-grid` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ag-server-grid`.
> Note: Don't forget to add `--project ag-server-grid` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ag-server-grid` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ag-server-grid`, go to the dist folder `cd dist/ag-server-grid` and run `npm publish`.

## Running unit tests

Run `ng test ag-server-grid` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

See the [LICENSE file](./LICENSE) for more info.

## Instruções para usar o ag-serve-grid:

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


 ## 3 - Ativação do Botão "Editar" ou "Excluir" registros
   * Dentro da tag `<datatable-server></datatable-server>` acrescente o `[editable]="true"` ou  [deletable]="true" para habilitar o botão de editar/excluir na tabela:
  
   ![image](https://github.com/user-attachments/assets/fe307fb4-a55e-4884-8824-b348874c169c)


  **Resultado depois de ativar a configuração `[editable]="true"` ou  `[deletable]="true"` :**
 
   ![image](https://github.com/user-attachments/assets/ab948d06-fa76-4a0f-9762-4db43ec2ccf1)
 
  * Para editar ou excluir, basta você selecionar a linha e apertar no botão desejado:
    
    ![image](https://github.com/user-attachments/assets/d4dd4f36-4631-4579-9577-b2ae56560323)
  
  * Para pegar a linha selecionada com ação editar, coloque na tag `<datatable-server></datatable-server>` a propriedade `(getRowEdit)="editar($event)"`
    
   
    ![image](https://github.com/user-attachments/assets/e1071884-2b01-4087-9f82-dc9cff157775)

    ![image](https://github.com/user-attachments/assets/5847034a-7ccf-4c44-9e31-171a9cd42c7f)

  **Resultado depois de fazer a configuração:**
 
   ![image](https://github.com/user-attachments/assets/911b8cbf-eba4-4b0e-98ae-7da7253408d6)

  * Para pegar a linha para excluir, basta seleciona a linha desejada e apertar excluir:
  
   ![image](https://github.com/user-attachments/assets/97213cf5-bf8a-438e-bed2-10e1b2c5f5b3)

  * Para pegar a linha selecionada com ação excluir, coloque na tag `<datatable-server></datatable-server>` a propriedade `(getRowExcluir)="excluir($event)"`
  
   
   ![image](https://github.com/user-attachments/assets/b7401f40-e619-4b29-bf5f-df77df74ba32)


   ![image](https://github.com/user-attachments/assets/5388b96a-ea78-49d4-b84c-10207b4abbd7)

 **Resultado depois de fazer a configuração:**
   
  ![image](https://github.com/user-attachments/assets/0a7d270b-aac4-4ced-992d-fb96250c0593)

   * Caso deseje selecionar uma lista para excluir basta clicar **Ctrl + click** nas linhas desejadas 
     
   ![image](https://github.com/user-attachments/assets/3b766e25-1724-4002-84fa-294d9b0483c5)
    
   * Ou apertar **Ctrl + Shift + click** e marcar até a linha atual:
     
   ![image](https://github.com/user-attachments/assets/8d601dd2-db54-4cd6-912d-2c28f3e348d1)

   * Para pegar a lista de itens selecionados coloque na tag `<datatable-server></datatable-server>` a propriedade `(getListExcluir)="listExcluir($event)"`
       
     ![image](https://github.com/user-attachments/assets/973d032c-5b3c-4ee4-97ed-820776c0c5ec)
   
     ![image](https://github.com/user-attachments/assets/89259f9b-9d9f-470e-8138-d31ec94cc72d)

     **Resultado depois de fazer a configuração:**
 
      ![image](https://github.com/user-attachments/assets/9a7b8e81-78e3-4490-ac95-aeb4a22cadb8)
     
## 4 - Pegar linhas selecionadas na tabela:

  * Caso necessite pegar 1 uma linha selecionada para fazer outro tipo de ação, basta colocar na tag `<datatable-server></datatable-server>`
    `(getRowSelect)="getRow($event)"`  o evento será disparado assim que as linha for selecionada com double click:
     
   ![image](https://github.com/user-attachments/assets/f64d2ada-38af-453a-99fa-d7491e0396e4)

   ![image](https://github.com/user-attachments/assets/21a007bf-28d4-4cf3-874e-2415d0329f41)

  **Resultado depois de fazer a configuração:**
 
   
   ![image](https://github.com/user-attachments/assets/4cdc201b-3909-421c-858f-0f7906b4dffa)
 
    
   * Caso necessite pegar  uma lista selecionada para fazer outro tipo de ação, basta colocar na tag `<datatable-server></datatable-server>`
      `(getListSelect)="getList($event)"`  o evento será disparado assim que as linha forem selecionadas:
      
     ![image](https://github.com/user-attachments/assets/25388354-39f2-4af7-a87a-29ad2f6b8954)
     
     ![image](https://github.com/user-attachments/assets/be365b4e-60e4-4d67-9047-c50efea7073b)

    
 **Resultado depois de fazer a configuração:**

  
  ![image](https://github.com/user-attachments/assets/b7434faf-3452-4808-ae46-c5e225bfd5fc)

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
 
 ![image](https://github.com/user-attachments/assets/1473ea03-78fe-4c5e-998c-14f89d90465f)
## 6 - Ordenação por coluna:
 Na variável columnDef onde estão declarada as nossas colunas, basta colocar a propriedade sortBy:true na coluna que deseja ordenar ao carregar os dados:
  
 ![image](https://github.com/user-attachments/assets/c5ab936e-109e-47cc-93eb-988ab8ec248a)
## 7 - Largura das colunas:
  Na variável columnDef onde estão declarada as nossas colunas, basta colocar a propriedade minWidth para determinar o mínimo de largura de uma coluna ou declarar maxWidth para declarar qual é o máximo de largura da coluna:
 
![image](https://github.com/user-attachments/assets/7b199a33-45ea-4924-87d6-d8df9e7af714)
## 8 - Formatação de Datas:
  Não é necessário fazer nenhuma configuração para formatar a data, pois o componente tem inteligência para identificar o formato de uma data e o formato de uma string. Sendo assim quando for identificado uma data, o componente irá formatar automaticamente:
![image](https://github.com/user-attachments/assets/0e99cd01-cbfc-46dd-9fb5-f75fd4916612)

## 9 - Exportar tabela para CSV:
  Basta ir no HTML e acionar na tag `<datatable-server></datatable-server>` [exportCsv]="true"  como demonstrado no exemplo abaixo:

![image](https://github.com/user-attachments/assets/322e2c2b-e11c-46ba-b5dc-5d16aa5b97b0)

** Resultado depois de fazer a configuração:**

![image](https://github.com/user-attachments/assets/d31eafdd-d528-46ca-b478-1f89350c0191)

 **Arquivo Gerado:**

![image](https://github.com/user-attachments/assets/fb1aa912-ab25-4dff-b2a0-6e3691481151)

Obs: O botão **Export CSV** gera o arquivo apenas com as informações que estão na tela, caso precise gerar o arquivo com todos os registros da base de dados, opte sempre fazer pelo back-end.

## 10 - Paginação Server Side:
* Para ativar a paginação basta ir até a tag `<datatable-server></datatable-server>` e acrescentar o `[pagination]="true"`
![image](https://github.com/user-attachments/assets/29922bca-cb62-4c88-ad76-7aebc0b63bf6)
* Implemente essa variáveis:

  `
    public pager: any = {};
    public totalCount!: number;
    public totalPages: number = 0;
    public recordsPerPage: number = 5;
    public currentPageNumber: number = 0;
    public totalRecordsCount: number = 0; 
  `

   **Exemplo:**
  
   ![image](https://github.com/user-attachments/assets/dc7a5b56-e2a6-483b-8606-bf0fde13363a)
 * Implemente o método next(event:number) e dentro do método chame seu método de listagem passando o valor recebido para ir para a página seguinte. **Siga o exemplo:**
 
   ![image](https://github.com/user-attachments/assets/6c2ab575-4926-49f7-abc8-41ed77916922)

   Chame o método next dentro da tag `<datatable-server></datatable-server>`:
   
   ![image](https://github.com/user-attachments/assets/d120168b-2bd3-4de8-aa9c-9b08db8badaa)

* Implemente o método prev(event:number) e dentro do método chame seu método de listagem passando o valor recebido para ir para a página anterior. **Siga o exemplo:**

   ![image](https://github.com/user-attachments/assets/274a4ca2-f808-4201-b553-1448d1236548)

    Chame o método prev dentro da tag `<datatable-server></datatable-server>`:

   ![image](https://github.com/user-attachments/assets/c9ce69b4-ded2-4e25-babc-203d345b063c)

*  Declare o `[pager]="pager"` dentro da tag `<datatable-server></datatable-server>`
   
   ![image](https://github.com/user-attachments/assets/b3cef75a-8d4a-428c-9d0c-9d74bb6218c1)

* Chame o `(setPage)="pager = $event"` dentro da tag `<datatable-server></datatable-server>`:
  
   ![image](https://github.com/user-attachments/assets/89f20daa-14d3-41a1-8cb0-84aa7d8e1021)

* Implemente o método getNumberPage(event:number) e dentro do método chame seu método de listagem passando o valor recebido para ir para a página escolhida. **Siga o exemplo:**
   
  ![image](https://github.com/user-attachments/assets/09c3b0d0-473d-4ed8-8ee0-b9e6c206c3fe)

  Chame este método dentro da tag `<datatable-server></datatable-server>`
   
  ![image](https://github.com/user-attachments/assets/67603ecf-be54-402b-acbb-9db1cc12a962)

   **Resultado do Funcionamento dos botões:** 
  
  ![image](https://github.com/user-attachments/assets/d904734f-0235-4c47-b2b1-22daff500044)

 * Para que a paginação funcione corretamente, faça a importação das interface de configuração de paginação:
   
   ![image](https://github.com/user-attachments/assets/17db0a81-8fea-41bd-993d-bccf0e694b70)

 * Crie o método de configurações no código para passar ao componente para que seja possível processar a informação da página:
  
       configPag(): ConfigPagination {
         return {
           totalPages: this.totalPages,
           totalRecordsCount: this.totalRecordsCount,
           recordsPerPage: this.recordsPerPage,
           currentPageNumber: this.currentPageNumber
        }}
* Chame `configPag` dentro da tag `<datatable-server></datatable-server>` :
  
  ![image](https://github.com/user-attachments/assets/0c8a8530-b6d9-45aa-a9b0-df7a3199dd97)

* Dentro do seu método listar, pegue as variáveis que declaramos nos passos anteriores e coloque as informações da paginação que vem da API:

   ![image](https://github.com/user-attachments/assets/0c5cafe9-956b-476f-80d3-c443d6127798)


 
Depois de fazer toda a configuração da paginação, você verá um resultado como esse:

  ![image](https://github.com/user-attachments/assets/03303c4f-55b2-479e-b2f1-e4c18c2f0f66)


## 11 - Campo de Pesquisa:
    
* Para ativar o campo de pesquisa, basta colocar no HTML um campo de texto com uma variável para guardar o texto digitado pelo usuário:
        
    ![image](https://github.com/user-attachments/assets/379ecfa4-393c-4b28-90d1-43bb4f3e4b8d)

* Declare a variável usada no input no TypeScript com o tipo string:
 
  ![image](https://github.com/user-attachments/assets/95095c4d-2e8a-40fe-b714-b1dabd15db11)
  
  
  ![image](https://github.com/user-attachments/assets/05c83c6c-cc3f-47b2-b788-447caf4c7e3a)

* Passe a variável dentro da tag `<datatable-server></datatable-server>`  com a propriedade [searchText]="searchText":
    
  ![image](https://github.com/user-attachments/assets/cfcc17d2-b58d-4a61-a2ed-2a605d2f38f4)

**Obs:** O campo de pesquisa só irá funcionar em registros renderizados na tela.

## 12 - Testes Unitários:
  
* Exemplo de teste unitário para testar os campos definidos no Header da tabela:
   
    
        it('should have expected column headers', () => {
           usersServiceSpy.listUsers.and.returnValue(of(listaDeUsers));
           component.listaUsuarios();
           fixture.detectChanges();

          const elm = fixture.nativeElement;
          const grid = elm.querySelector('datatable-server');
          const headers = grid.querySelectorAll('#cat-table-header tr th');
          const headerTexts = Array.from(headers).map((header: any) => header.textContent.trim());

          expect(headerTexts).toEqual(['ID', 'Nome' ,'Cliente', 'User ID' ,'Excluir']);
        });

* Exemplo de teste unitário para testar se os valores da tabela estão conforme o esperado e verificar se a tabela está sendo carregada corretamente:
        
        it('the grid cells should be as expected', async () => {

           usersServiceSpy.listUsers.and.returnValue(of(listaDeUsers));
           component.listaUsuarios();
           fixture.detectChanges();

          const cellElements = fixture.nativeElement.querySelectorAll('#cat-table-body tr td');

         expect(cellElements.length).toEqual(10);

         expect(cellElements[0].textContent).toEqual("012b576j-9211-25348-wr31-v52fh831880m5");
         expect(cellElements[1].textContent).toEqual("value_test");
         expect(cellElements[2].textContent).toEqual("012b576j-9211-25348-wr31-v52fh831880m5");
         expect(cellElements[3].textContent).toEqual('PAAAAAAAAAAAA');
         expect(cellElements[4].textContent).toEqual("Excluir");
         expect(cellElements[5].textContent).toEqual("012b576j-9211-25348-wr31-v52fh831880m5");
         expect(cellElements[6].textContent).toEqual("value_test");
         expect(cellElements[7].textContent).toEqual("012b576j-9211-25348-wr31-v52fh831880m5");
         expect(cellElements[8].textContent).toEqual('PAAAAAAAAAAAA');
         expect(cellElements[4].textContent).toEqual("Excluir");
        });

 **Obs:** Estes valores são fictícios, trocar conforme a sua tabela e seu teste unitário.

## 13 - Botões na tabela:

 * Dentro da variável colDef,  basta você colocar `showButton:true` e colocar as configurações necessárias do botão para personalização, siga o exemplo
     a seguir:
     
    ![image](https://github.com/user-attachments/assets/ffaee4aa-0cd5-45e0-9c54-326ec9299b6b)

**Resultado depois de fazer a configuração:**
   
  ![image](https://github.com/user-attachments/assets/4be57907-f29a-4ea8-a956-7d6dc6bc50b0)

 **obs:** Para fazer a personalização dos botões você pode usar classes no bootstrap ou fazer a própria estilização e chamar a classe dentro da configuração class.

 * Para recuperar a linha no click do botão dentro da tabela, basta colocar dentro da tag `<datatable-server></datatable-server>` `(getRowBtn)="getValuesBtn($event)"`
   
  ![image](https://github.com/user-attachments/assets/b7a022e2-0caf-449d-b11a-e1722be801ce)
  
  ![image](https://github.com/user-attachments/assets/47bc6cb3-f5c4-4e31-933d-5a6ff2f6fe50)
 
**Resultado depois de fazer a configuração:**
 
  ![image](https://github.com/user-attachments/assets/943a82a0-1f3c-410a-9492-2106ae875307)

## 14 - Personalização dos botões: 
      
  * Para fazer as configurações dos botões que ficam acima da tabela, basta chamar as configurações abaixo dentro da tag `<datatable-server></datatable-server>`  `[configBtnEdit]="configBtnEdit()" ` `[configBtnDelete]="configBtnDelete()"` `[configBtnCsv]="configBtnCsv()"`: 
    
**Exemplo de personalização:**
     
        configBtnEdit():ConfigButton{
          return {
            text:'Editar',
            icon: 'bi bi-pencil-square',
            class: 'btn btn-warning'
          }
        }

        configBtnDelete():ConfigButton{
          return {
            text:'Deletar',
            icon: 'bi bi-x-circle',
            class: 'btn btn-danger'
          }
        }
  

        configBtnCsv():ConfigButton{
          return {
            icon: 'bi bi-filetype-csv',
            class: 'btn btn-ligh'
          }
        }
    
 **Obs:** O resultado será semelhante ao estilo dos botões da tabela  
