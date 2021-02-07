	var namevalue=document.getElementById("name");
    var agevalue=document.getElementById("age");
	var  tbody= document.getElementById("addData");
	var searchinput=document.getElementById("searchinput");
	 var  searchvalue=document.getElementById("searchinputvalue");
	 var searchBody=document.getElementById("searchBody");
	 var showSearchItem= document.getElementById("showSearchItem");
	var details = [{id:1,name:'Viraj',age:22},{id:2,name:'Sunny',age:23}];
class Tasktwo{
	constructor(name,age){
	//this.id=id;
	this.name=name;
	this.age=age;
	}
	addUserDetails()
	{
       Tasktwo.showUsersList(this.id,this.name,this.age);		
		return this;
	}
	
	storeDetails(){
		details.push({id:this.id,name:this.name,age:this.age});
		
	}
	
	static showdetails()
	{
		 console.log(details);
		if(details.length>0)
		{
			details.forEach((item)=>{
	        Tasktwo.showUsersList(item.id,item.name,item.age);
           });
         }
	}
	static showUsersList(id,name,age){
		
		const trElement=document.createElement("tr");
		    trElement.innerHTML=`
			 <tr>
              <td>${name}</td>
	           <td>${age}</td>
			   <td><button class="btn btn-danger"  onclick="deleteitem(${id})">Delete</button></td>
      </tr>
			`;
		tbody.appendChild(trElement);	
	}
	
}
class Secondclass extends Tasktwo{
	constructor(id,name,age){
	super(name,age);
	this.id=id;
	}
}
Tasktwo.showdetails();
  
addEventListener("submit",(e)=>{

       
	e.preventDefault();
	let id=Math.floor(Math.random()*100000);
	var second=new Secondclass(id,namevalue.value,agevalue.value);
	//var showdata=new Secondclass();
	
	second.addUserDetails();
	second.storeDetails();
	console.log(details);
	namevalue.value="";
	agevalue.value="";
});

function deleteitem(id){
	  details.forEach((item)=>{
		  if(item.id==id){
			  const index = details.indexOf(item);
			  details.splice(index,1);
		  }
	  });
	  tbody.innerHTML="";
	  Tasktwo.showdetails();
}

  function deleteall(){
	  
	  details=[];
	  tbody.innerHTML="";
	  Tasktwo.showdetails();
  }
  
  function searchByName(){

	var details2 = details.filter((item)=>{
		      item=item.name.toLowerCase();
		  return item==searchvalue.value;
	  });
	    searchBody.innerHTML="";
	     if(details2.length>0){
			 showSearchItem.style.display="block";
		 details2.forEach((item)=>{
	     const trE=document.createElement("tr");
		    trE.innerHTML=`
			 <tr>
              <td>${item.name}</td>
	           <td>${item.age}</td>
          </tr>
			`;
			searchBody.appendChild(trE);
		  });
		 }else{
			 showSearchItem.style.display="none";
		 }
	 
	  searchvalue.value="";
	
  }


   
     
