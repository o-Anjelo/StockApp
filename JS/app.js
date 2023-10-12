var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "VIEWS/homepage.html"
  })
  .when("/cadProduto", {
    templateUrl : "VIEWS/post_produto.html"
  })
  .when("/altEstoque", {
    template : "<p>ALTERAR</p>"
  })
});