(function (angular) {
	'use strict';
	var myapp=angular.module('myapp',[]);
	var mycontroller=myapp.controller('mycontroller',['$scope',function($scope){
		$scope.lists=[
			{
				id:Math.random(),
				completed:false,
				content:'likeke'
			},
			{
				id:Math.random(),
				completed:true,
				content:'小王'
			},
			{
				id:Math.random(),
				completed:false,
				content:'张三李四'
			},
			{
				id:Math.random(),
				completed:false,
				content:'514120262'
			}
		];
		$scope.changecheck=function(id){
			angular.forEach($scope.lists,function(item){
				if(item.id==id){
					item.completed=!item.completed;
					return;
				}
			})
		};
		$scope.newitem='';
		$scope.zengjia=function(newitem){
			var obj={};
			obj.id=Math.random();
			obj.completed=false;
			obj.content=newitem;
			$scope.lists.push(obj);
			$scope.newitem='';
		};
		$scope.destroy=function(id){
			angular.forEach($scope.lists,function(item,index){
				if(item.id==id){
					$scope.lists.splice(index,1);
				}
			})
		}
		$scope.clearAll=function(){
			$scope.lists=[];
		}
		var checkAll=true;
		$scope.toggle=function(){
			angular.forEach($scope.lists,function(item){
				item.completed=checkAll;
			})
			checkAll=!checkAll;
		}
		$scope.currentEditId=-1;
		$scope.edit=function(id){
			$scope.currentEditId=id;
		}
		$scope.save=function(){
			$scope.currentEditId=-1;
		}
		$scope.selecter='';
		$scope.tab=function(val){
			switch(val){
				case 'active':
					$scope.selecter=false;
					break;
				case 'completed':
					$scope.selecter=true;
					break;
				default:
					$scope.selecter='';
					break;
			}
		}
	}])

})(angular);
