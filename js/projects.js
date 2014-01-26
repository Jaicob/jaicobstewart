/**
 * @author Jaicob Stewart
 */


	
function updateon(sender,activetab){
	var button = sender;
	var buttonArray = $(button).siblings().toArray();
	$(button).toggleClass("activeupdate");
	$(buttonArray[0]).removeClass("activeupdate");
	$(buttonArray[1]).removeClass("activeupdate");
	var otherTab = $(activetab).siblings().toArray();
	$(activetab).toggleClass("activenav");
	$(otherTab[0]).removeClass("activenav");	
	$(otherTab[1]).removeClass("activenav");	
}		
	
								

function updateoff(revert,revertbut)
{
	var one = revertbut;
	one.style.height="50px";
	one.style.borderColor="darkgrey";
	var toRevert = revert;
	toRevert.style.height="50px";
	toRevert.style.background="#d3d3d3";
	toRevert.style.color="transparent";
	toRevert.style.marginBottom="1px";
	toRevert.style.textShadow="0px 0px 3px black";
}



