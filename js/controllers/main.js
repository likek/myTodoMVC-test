
angular.module('app_controller_main',[]).controller('mycontroller',['$scope','$routeParams','mainService',function($scope,$routeParams,mainService){
		$scope.lists=mainService.getlists();
		/*选择完成与未完成*/
		$scope.changecheck=function(id){
			mainService.changecheck();
		};
		/*增加一项*/
		$scope.newitem='';
		$scope.zengjia=function(newitem){
			mainService.zengjia(newitem);
			$scope.newitem='';
		};
		/*销毁一个项*/
		$scope.destroy=function(id){
			mainService.destroy(id);
		}
		/*清除已完成的功能*/
		$scope.clearCompleted=function(){
			$scope.lists=mainService.clearCompleted();
		}
		/*全选和反选功能*/
		$scope.toggle=function(){
			mainService.toggle();
		}
		/*完成label的编辑功能*/
		$scope.currentEditId=-1;
		$scope.edit=function(id){
			$scope.currentEditId=id;
		}
		$scope.saveAll=function(){
			$scope.currentEditId=-1;
		}
		/*判断是否有已经完成的*/
		$scope.ifCompleted=function(){
			var flag=false;
			angular.forEach($scope.lists,function(item){
				if(item.completed===true){
					flag=true;
				}
			})
			return flag;
		}
		/*给数据过滤添加自定义匹配规则*/
		$scope.compare=function(source,target){
			return source===target;
		}
		/*路由筛选数据*/
		$scope.selecter={};
		var sta=$routeParams.status;
		switch(sta){
				case 'active':
					$scope.selecter={completed:false};
					break;
				case 'completed':
					$scope.selecter={completed:true};
					break;
				default:
					$scope.selecter={};
					break;
			}
	}])
