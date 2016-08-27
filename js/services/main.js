angular.module('app_service_main',[]).service('mainService',['$window',function($window){
	var localSt=$window.localStorage;
	var lists=localSt.getItem('list') ? JSON.parse(localSt.getItem('list')) : [];
	this.getlists=function(){
		return lists;
	}
	this.changecheck=function(){
		save();
	}
	this.zengjia=function(newitem){
		if(newitem.replace(/\s/g,'')==''){
				return;
			}
			var obj={};
			obj.id=Math.random();
			obj.completed=false;
			obj.content=newitem.replace(/\s/g,'');
			lists.push(obj);
			save();
	}
	this.destroy=function(id){
		angular.forEach(lists,function(item,index){
				if(item.id==id){
					lists.splice(index,1);
				}
			})
		save();
	}
	this.clearCompleted=function(){
		var res=[];
			angular.forEach(lists,function(item){
				if(item.completed==false){
					res.push(item);
				}
			})
			lists=res;
			save();
			return lists;//因为lists已经重新指向，所以需要return出去
	}
	var checkAll=true;
	this.toggle=function(){
		angular.forEach(lists,function(item){
				item.completed=checkAll;
			})
			checkAll=!checkAll;
		save();
	}
	function save(){
		localSt.setItem('list',JSON.stringify(lists));
	}
}])
