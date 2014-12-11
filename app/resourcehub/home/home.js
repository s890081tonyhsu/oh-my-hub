angular.module("ohmyhub.resourcehub.home",["ohmyhub.common","ui.router"]).factory("Resources",["$http",function(e){return{get:function(){return e.get("assests/resources-list.json")}}}]).config(["$stateProvider",function(e){return e.state("resourcehub_home",{title:"Resource Hub - Home",url:"/resourcehub/home",hub:{name:"Resource Hub",root:"/resourcehub"},controller:"ResourceHubHomeCtrl",templateUrl:"app/resourcehub/home/home.html"})}]).controller("ResourceHubHomeCtrl",["$scope","HubMenu","Resources","FiltersStore",function(e,r,o,u){return e.filters=u.get(),e.resources=[],e.alerts=null,o.get().success(function(o){var u,t,s,n;return e.resources=o,u=r.create(e.resources,["type","license"]),t=u[0],s=u[1],n=u[2],e.$parent.menu=t,e.$parent.counts=s,e.$parent.toggle=n.toggle}).error(function(r){return e.alerts=r})}]);