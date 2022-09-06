//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		

//alert("Hello");

//Data: assume we have a list of top 5 PC Parts
let topParts = [{id: 0, title: "Ryzen 7", cost: "$504", image_url: "MEDIA/Ryzen7.jpg"},
				 {id: 1, title: "Core I7 ", cost: "$580", image_url: "MEDIA/Core I7.jpg"},
				 {id: 2, title: "Rtx 3060", cost: "$850", image_url: "MEDIA/3060.jpg"},
			     {id: 3, title: "Rm 650", cost: "$205", image_url: "MEDIA/rm 650.jpg"},
			     {id: 4, title: "Gaming PC", cost: "$2500", image_url: "MEDIA/Fullpc.jpg"},
				];

//--------------------------------------------
//Two slideshows 

let manualIndex = 0;
function nextPart() {
	
	if(manualIndex < topParts.length - 1) {
		manualIndex++;
	} else {
		manualIndex = 0;
	}
	
	
	
	document.getElementById("manual-slide-title").innerHTML = topParts[manualIndex].title;
	document.getElementById("manual-slide-image").src = topParts[manualIndex].image_url;


}

function previousPart() {
	
	if(manualIndex > 0) {
		manualIndex --;
	} else {
		manualIndex = topParts.length -1;
	}
	
	
	
	document.getElementById("manual-slide-title").innerHTML = topParts[manualIndex].title;
	document.getElementById("manual-slide-image").src = topParts[manualIndex].image_url;


}

let autoIndex = 0;
function autoSlideShow() {
	
	if(autoIndex < topParts.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	}
	
	
	document.getElementById("auto-slide-title").innerHTML = topParts[autoIndex].title;
	document.getElementById("auto-slide-image").src = topParts[autoIndex].image_url;
	
	setTimeout(autoSlideShow, 1000);
}
autoSlideShow();	

//Exercise 2

//DROPDOWN MENU TO SELECT PART
//Populate the select "options" with all the PC Parts in the array when the page is loaded
function loadMyParts() {
	let partSelect = document.getElementById("my-partList");
	for(var i=0; i < topParts.length; i++) {
		//Create a new child HTML node/element as "<option>" (as a child node)
		let node = document.createElement("option");
		//Assign option "text content" and "value" to this new node
		node.value = topParts[i].id.toString();
		node.textContent = topParts[i].title.toString();
		//Append the above HTML node (option) to the parent node "partList"
		partSelect.appendChild(node);
	} 
		//Set the first part as selected option in drop-down list
		partSelect.selectedIndex= "0";
}
//call to execute this function when loading the webpage
loadMyParts();

//When user select an option in the dropdown menu (select), display that option
function displayMyParts() {
	//Get the selected part "option value"
	let selectedPartIndex = document.getElementById("my-partList").value;
	document.getElementById("my-partTitle").innerHTML = topParts[selectedPartIndex].title;
	document.getElementById("my-partCost").innerHTML = topParts[selectedPartIndex].cost;
	document.getElementById("my-partImageURL").src = topParts[selectedPartIndex].image_url;
}	

//***** for comments****///
function loadMyPartsC() {
	let partSelectC = document.getElementById("my-partListC");
	for(var i=0; i < topParts.length; i++) {
		//Create a new child HTML node/element as "<option>" (as a child node)
		let node = document.createElement("option");
		//Assign option "text content" and "value" to this new node
		node.value = topParts[i].id.toString();
		node.textContent = topParts[i].title.toString();
		//Append the above HTML node (option) to the parent node "partList"
		partSelectC.appendChild(node);
	} 
		//Set the first part as selected option in drop-down list
		partSelectC.selectedIndex= "0";
}
//call to execute this function when loading the webpage
loadMyPartsC();

//When user select an option in the dropdown menu (select), display that option
function displayMyPartsC() {
	//Get the selected part "option value"
	let selectedPartCIndex = document.getElementById("my-partListC").value;
	document.getElementById("my-partTitleC").innerHTML = topParts[selectedPartCIndex].title;
	document.getElementById("my-partCostC").innerHTML = topParts[selectedPartCIndex].cost;
	document.getElementById("my-partImageURLC").src = topParts[selectedPartCIndex].image_url;
}	
	

//------------------------------------------------------------------------------------------------------
//ADD NEW pc Part TO THE LIST
//Add a new part to the existing list
function AddItemToList() {
	//Get entered item data
	let newItemTitle = document.getElementById("my-part-title").value;
	let newItemCost = document.getElementById("my-part-cost").value;
	let newItemUrl = document.getElementById("my-part-image-url").value;
	let newId = topParts.length;
	//Validate input before adding new item
	if ((newItemTitle == "") || (newItemCost == "") || (newItemUrl == "")) {
	alert("ERROR. DATA IS INCOMPLETE!");
	} else {
		//Add a new item
		topParts.push({id: newId, title: newItemTitle, cost: parseInt(newItemCost), image_url: newItemUrl});
		//document.write(allAccounts[1].user + "," + allAccounts[1].pass);
		alert("NEW PART ADDED SUCCESSFULLY!");
		//Reload the drop-down list
		//Remove all current options
		document.getElementById("my-partList").options.length = 0;
		//Load updated options
		loadMyParts();
		//Empty the inputs
		document.getElementById("my-part-title").value = "";
		document.getElementById("my-part-cost").value = "";
		document.getElementById("my-part-image-url").value = "";
	}
	
	
	
} 








//----------------------------------
//ADD NEW Comment
//DATA: ASSUME we have a list of existing comments stored in an array "allcomments"
let allComments = [{name: "Samuel", comment: "Recomended,a good PC Part"},
	{name: "Javarn", comment: "Its an alright PC part"},
		{name: "Caleb", comment: "great Part, Got one in my PC"},
		];

//--------
//Load all existing comments and display them on HTML
function loadComments() {
	//loop through all the comments in the array "AllComments"
	for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment = allComments[i].comment;
		//
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("p");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);//Append the comment (created TextNode) to the HTML node(child)
		let parrent_node = document.getElementById("comment-list");//Get the id of the parent node "comment-list"
	    parrent_node.appendChild(node);//Append the above child HTML node tothe parrent node   
	}
}
//Call to run this loadComments function when the webpage is loaded.
loadComments();
//----------
//Add a new comment
function addComment() {
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;

	//Add this new comment to the array
	allComments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Thank you for your review, your comment has been added.");
	
	//Display this new comment on HTML page
	//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
	let node = document.createElement("P");
	//Create a new TextNode
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	//Append the content (created TextNode) to the HTML Node (child)
	node.appendChild(textnode);
	//Get the id of parent node "comment-list"
	let parrent_node = document.getElementById("comment-list");
	//Append the above child HTML node to the parent node
	parrent_node.appendChild(node);
	//Clear comment box
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

