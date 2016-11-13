angular.module('starter')
/*Factories da aplicação responsáveis por acessar determinadas urls do rails*/
//Factory para registro de usuário.
.factory('factoryRegister', function($resource,URL) {
  return $resource(URL+"/users/create");
})
//Factory para o login do usuário
.factory('factoryLogin', function($resource, URL){
  return $resource(URL+"/sessions/login");
})

//Factory para incremento de avaliações de PEV
.factory('factoryEvaluatePev', function($resource,URL){
  return $resource(URL+"/pevs/increment");
})

//Factory para incremento de avaliações de incidentes
.factory('factoryEvaluateIncidents', function($resource,URL){
  return $resource(URL+"/markings/increment");
})

//Factory para criação de PEV
.factory('factoryPEV', function($resource, URL){
  return $resource(URL+"/pevs/create");
})

//Factory para edição de PEV
.factory('factoryEditPEV', function($resource, URL){
  return $resource(URL+"/pevs/edit");
})

//Factory de verificação de email válido.
.factory('factoryEmail', function($resource, URL){
  return $resource(URL+"/users/verify_email");
})

//Factory para criação de incidentes
.factory('factoryMarking', function($resource, URL){
  return $resource(URL+"/markings/create");
})

//Factory para edição de perfil
.factory('factoryProfile', function($resource, URL){
  return $resource(URL+"/users/edit");
})
//Factory para edição de incidentes
.factory('factoryEditMarking', function($resource, URL){
  return $resource(URL+"/markings/edit");
});
