//LISTS 
It is an ordered sequence of data. Each data stored in a list is called 
an element.

-elements are displayed using the toString() operation or with getElement() operation
moveTo(n)
currPos
listSize()
pos()
length()

// A LIST CLASS IMPLEMENTATION

function List(){
	this.listSize=0;
	this.pos=0;
	this.dataStore=[];
	this.clear=clear;
	this.find=find;
	this.toString=toString;
	this.insert=insert;
	this.append=append;
	this.remove=remove;
	this.front=front;
	this.end=end;
	this.prev=prev;
	this.next=next;
	this.length=length;
	this.currPos=curr.Pos;
	this.moveTo=moveTo;
	this.getElement=getElement;
	this.length=length;
	this.contains=contains;
}

//append
function append(element){
	this.dataStore[this.listSize++]=element;
}
// REMOVE AN ELEMENT FROM LIST
function find(element){
	for (var i=0; i<this.dataStore.length;++i){
		if(this.dataStore[i]== element){
			return i;
		}
	}
	return -i;
}
//FINDING AN ELEMENT IN A LIST

function  














//DETERMINING IF A GIVEN VALUE IS IN A LIST

function contains(element){
	for(var i=0; i<this.dataStore.length;++i){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}


