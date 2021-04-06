# FilterPrimengDatatable PrimeNG 11.3.1

Instalar o PrimeNG: npm install primeng --save

Instalar Prime Icons: npm install primeicons --save

Instalar o Font Awesome: npm install font-awesome --save

Instalar o Angular CDK: npm install @angular/cdk --save

Adicionar em angular.json, abaixo de assets: []:
"styles": [
    "src/styles.css",
    "./node_modules/primeicons/primeicons.css",
    "./node_modules/primeng/resources/themes/saga-blue/theme.css",
    "./node_modules/primeng/resources/primeng.min.css"
],

Criar component book-data: ng g c book-data

Criar app-routing.module.ts:
ng g m app-routing --flat --module=app

Criar o assets/book.json com os dados

Criar o BookService para obter os dados: ng generate service book

http://localhost:4200/books