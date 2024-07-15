# ag-server-grid
Angular Component - Fully customizable Grid with important difference, server side pagination

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
     
![image](https://github.com/user-attachments/assets/0cbcc2d1-7a03-4970-a633-6dcf3a0ee167)


   ## 2- Body Table
   Para renderizar o tbody do ag-grid é necessário realizar os seguintes passos:
  * Implemente a interface igualando os campos com os campos que vem do back-end:
  ![image.png](/.attachments/image-2f0c90db-8dc5-49ef-b477-b59009266a8b.png) ![image.png](/.attachments/image-1c1572c5-e4ca-4b76-83bc-96db0b4b0dc2.png)
  * Declare uma váriavel com o tipo de interface que acabamos de criar:
  ![image.png](/.attachments/image-d509ec9b-55b1-48e3-a452-1cc300516704.png)
 * Chame essa váriavel dentro da tag ag-grid-angular:
  ![image.png](/.attachments/image-df986b37-0410-45ad-990e-ede9931cebff.png)
  * Dentro da váriavel columnDefs que declaramos anteriormente, declare os campos em field para 
    que os valores que vem do backend sejam reconhecidos pelo componente:
  ![image.png](/.attachments/image-ca2e78f3-4c54-46e4-bf75-ac951e38b913.png)
  * Para carregar os valores que vem do endPoint é necessário usar o (gridReady) qué é declarado no componente ag-grid-angular como mostra no exemplo:
![image.png](/.attachments/image-0b7de74c-c1c7-4e1f-8fa9-475c441e4ebd.png)
![image.png](/.attachments/image-0c368955-8401-462e-9cca-8c2e23493e3e.png)
 
**Resultado depois de fazer a configuração do tbody:**
![image.png](/.attachments/image-522fd183-5dad-4f20-ac6a-97997530bdb4.png)

 ##**3 - Edição de registros**
   * Dentro da tag ag-grid-angular acrescente o `[editType]="'fullRow'"` e também em [defaultColDef] a configuração `editable: true` para habilitar a edição e editar em todos os campos dando duplo click na linha
  ![image.png](/.attachments/image-9ce26f97-2286-4b06-a7f8-e10d50ac6bc2.png)  
**Resultado depois de colocar a configuração para editar a linha:**
![image.png](/.attachments/image-a6e02c88-24b5-421e-b2b4-d642010d2da6.png)

## **4 - Pegar valores da linha editada dentro da propria tabela**
  * Faça o import da interface `RowValueChangedEvent`
    ![image.png](/.attachments/image-afc8b3bf-97c2-4b32-a52a-41ae9960a373.png)
  * Crie um método para pegar os valores da linha editada como mostra no exemplo:
    ![image.png](/.attachments/image-e04d61e0-55e1-4112-8719-96ed99890976.png)
  * Declare na tag `ag-grid-angular` o método que acabamos de criar:
    ![image.png](/.attachments/image-32bcb9f9-ea1d-4745-a241-ebe6d1d9cad4.png)

  **Resultado depois de fazer a configuração:**
    ![image.png](/.attachments/image-06bbf809-db06-4ce5-a02f-63d4b351a3bb.png)
## 5- Ativação do scrool lateral:
* Em `[defaultColDef]` acresente o `minWidth`.
* Na tag ag-grid-angular acrescente `[sideBar]=true` como demonstrado no exemplo a seguir:

![image.png](/.attachments/image-5bd1f0d1-9ba1-4196-bc03-3d1b850e0a68.png)

**Resultado depois da configuração:** **Scrool Ativado**
![image.png](/.attachments/image-6f1414b7-266e-4610-92b0-2e2f8702f082.png)
## 6 - Tradução do Header da tabela ag-grid com ngx-translate de acordo com o idioma escolhido:  

* Faça a importação do `TranslateModule` e do `TranslateService` no componente:

  ![image.png](/.attachments/image-d1f9b0bc-3c8d-4ff8-a4a4-900ca28be846.png)
* Declare `TranslateModule` em imports dentro do componente:

  ![image.png](/.attachments/image-540da220-b6c1-48c0-ad23-8494e0f82f52.png)
* Declare `private translate: TranslateService`  dentro do contrutor:

  ![image.png](/.attachments/image-682fe049-7f96-49ca-b12a-faf3d8abef75.png)
* Declare `this.translate.onLangChange`  para indentificar a atualização dentro do método do contrutor:

  ![image.png](/.attachments/image-5315a65e-3aff-4176-b332-946937ba60e7.png)
   
 
```
this.translate.onLangChange.subscribe(() => {
      this.gridApi.refreshHeader();
    })
```

  
* Dentro da variavel columnDefs que já declaramos nos passos anteriores, coloque a propriedade 
  `headerValueGetter` e chame um método que vamos criar no próximo passo e não esqueça de colocar o `.bind(this)`
como demonstrado no exemplo a seguir:
![image.png](/.attachments/image-307b00b9-5964-46b8-8029-b80f906b039e.png)

* crie o método `localizeHeader()` como na imagem:
![image.png](/.attachments/image-3c601c31-2379-4ebc-81e8-9d360a71fa41.png)
* Declare dentro do arquivo de tradução as chaves field que tem no columnDefs:
 ![image.png](/.attachments/image-0834eaf9-5b36-4eb7-94c8-47b267c7426c.png) ![image.png](/.attachments/image-2248a847-0123-41c2-a989-d1583f63a337.png)
* E passe o nome do JSON para que o serviço translate possa encontrar a tradução especifica e concatene com  a varivel headerIdentifier como mostra no exemplo:
 ![image.png](/.attachments/image-79c17dc1-2d95-41e1-a312-08275e126a54.png)
 ![image.png](/.attachments/image-ace10aeb-d675-473a-8991-a25df42dbabc.png)
 ![image.png](/.attachments/image-5d7079d7-45af-4663-9d58-65c8a9f4d1a0.png)
* Retorne o valor recuperado que está dentro da variavel `headerIdentifier` usando o `this.translate.instant(headerIdentifier)`:
 ![image.png](/.attachments/image-87a9cada-53d9-4a69-a994-805337cd7c33.png)
  **Resultado depois de fazer a configuração:**
  -    Quando apertamos o botão para traduzir para o Português:
  ![image.png](/.attachments/image-53e178ca-ad88-4ac0-8d14-fc6b711efc2e.png)
  -    Quando apertamos o botão para traduzir para o Inglês:
![image.png](/.attachments/image-86151350-8609-4fb1-9f57-34049e857050.png)
