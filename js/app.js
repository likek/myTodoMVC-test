(function (angular) {
	'use strict';
	var myapp=angular.module('myapp',[]);
	var mycontroller=myapp.controller('mycontroller',['$scope','$location',function($scope,$location){
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
		/*选择完成与未完成*/
		$scope.changecheck=function(id){
			angular.forEach($scope.lists,function(item){
				if(item.id==id){
					item.completed=!item.completed;
					return;
				}
			})
		};
		/*增加一项*/
		$scope.newitem='';
		$scope.zengjia=function(newitem){
			var obj={};
			obj.id=Math.random();
			obj.completed=false;
			obj.content=newitem;
			$scope.lists.push(obj);
			$scope.newitem='';
		};
		/*销毁一个项*/
		$scope.destroy=function(id){
			angular.forEach($scope.lists,function(item,index){
				if(item.id==id){
					$scope.lists.splice(index,1);
				}
			})
		}
		/*全部清除的功能*/
		$scope.clearAll=function(){
			$scope.lists=[];
		}
		/*全选和反选功能*/
		var checkAll=true;
		$scope.toggle=function(){
			angular.forEach($scope.lists,function(item){
				item.completed=checkAll;
			})
			checkAll=!checkAll;
		}
		/*完成label的编辑功能*/
		$scope.currentEditId=-1;
		$scope.edit=function(id){
			$scope.currentEditId=id;
		}
		$scope.save=function(){
			$scope.currentEditId=-1;
		}

		/*使用添加事件的方式完成数据的过滤*/
		/*$scope.selecter='';
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
		}*/

		/*使用￥location服务完成数据的过滤*/
		$scope.selecter={};
		$scope.$location=$location;
		$scope.$watch('$location.path()',function(now,old){
			switch(now){
				case '/active':
					$scope.selecter={completed:true};
					break;
				case '/completed':
					$scope.selecter={completed:false};
					break;
				default:
					$scope.selecter={};
					break;
			}
		})
		/*给数据过滤添加自定义匹配规则*/
		$scope.compare=function(source,target){
			return source===target;
		}
	}])

})(angular);
