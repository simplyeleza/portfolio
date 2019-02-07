/*console.group("Page links");
console.dir(document.querySelectorAll('a'));
console.groupEnd();

console.groupCollapsed("Paragraphs");
console.dir(document.querySelectorAll('p'));
console.groupEnd();

*/

(function(){
		//Selecting our node

		var allPics = document.getElementById('pics');
		var myNode =document.querySelectorAll('img')[0];

		myNode.addEventListener("click",function(e){

			if(e.target.tagName === 'IMG'){
				var myOverlay = document.createElement('div');
				myOverlay.id ='overlay';
				document.body.appendChild(myOverlay);

				//set Styles
				myOverlay.style.position='absolute';
				myOverlay.style.top = 0;
				myOverlay.style.backgroundColor = 'black';
				myOverlay.style.opacity = 0.5;
				myOverlay.style.cursor = 'pointer';

				//resize
				myOverlay.style.width =window.innerWidth + 'px';
				myOverlay.style.height=window.innerHeight + 'px';
				myOverlay.style.top = window.pageOffset + 'px';
				myOverlay.style.left =window.pageOffset + 'px';
               
               //create image element
				var imageSrc = e.target.src;
				var largeImage =document.createElement('img');
				largeImage.id = 'largeImage';

				largeImage.src =imageSrc.substr(0,imageSrc.length-7) + 'png';

				largeImage.style.display='block';
				largeImage.style.position ='absolute';
				myOverlay.appendChild(largeImage);

				//wait until img is loaded
				largeImage.addEventListener('load',function(){
					//Resize if image is taller
					if(this.height . window.innerHeight){
						this.ratio =window.innerHeight / this.height;
						this.height =this.height * this.ratio ;
						this.width = this.width * this.ratio ;

					}

					//Resize if image is wider
					if(this.width . window.innerWidth){
						this.ratio =window.innerWidth / this.height;
						this.height =this.height * this.ratio ;
						this.width = this.width * this.ratio ;
						
					}

					myOverlay.appendChild(largeImage);


				});





			}

			

		},false);//image is clicked



	})();//self executing function


	
element.onevent =functionName;
function check username(){

}
var el= document.getElementById('username');
el.onblur =checkUsername;

//USING EVENT LISTENERS
element.addEventListener('event',functionName[,boolean]);

var el1=document.getElementById('username');
el1.addEventListener('blur',checkUsername,false);

