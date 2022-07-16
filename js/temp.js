let container = document.getElementById("array");
let d = document.getElementById("delay");
let values=[]
let count=0;
let swapped=false;
let gg=false;
  function addRecord() {
 	let inp=document.getElementById('arrip')
        values.push(inp.value);
	    inp.value = ""; 
		generatearray();
  }
async function generatearray(){
	let value=parseInt(values[count]);
	count++;
   // Creating element div
   var array_ele = document.createElement("div");

   // Adding class 'block' to div
   array_ele.classList.add("block");

   // Adding style to div
   array_ele.style.height = `${value * 3}px`;
   array_ele.style.transform = `translate(${count * 30}px)`;

   // Creating label element for displaying
   // size of particular block
   var array_ele_label = document.createElement("label");
   array_ele_label.classList.add("block_id");
   array_ele_label.innerText = value;

   // Appending created elements to index.html
   array_ele.appendChild(array_ele_label);
   container.appendChild(array_ele);
}
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, (1000-d.value));
		});
	});

}

// Asynchronous BubbleSort function
async function BubbleSort(delay=125) {
	var blocks = document.getElementsByClassName('block')

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);//.childNodes[0].

			console.log("run");
			var value1 = Number(blocks[j].firstElementChild.innerHTML);
			var value2 = Number(blocks[j + 1].firstElementChild.innerHTML);

			if(value1 < value2 && swapped === false){
					
				document.getElementById('code4').innerHTML=value1 + " < "+ value2;
				document.getElementById('code').style.backgroundColor = "red";
				document.getElementById('code4_1').innerHTML="No Need to Swap"
			}
			 if (value1 > value2 && swapped === false) {
				gg=true;

				 document.getElementById('code3').innerHTML=value1 + ">" + value2;
				 document.getElementById('code3').style.backgroundColor="green";
				 document.getElementById('code2_1').innerHTML="As the Elements are gerater swap them ";
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
				gg=false;
			 }
			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
	if(i === count){
		swapped=true;
		alert("Given Array is Sorted")
	}
}



async function setup() {
	document.getElementById("d").innerText = d.value + "ms";
}
document.getElementById('btn').addEventListener('click',BubbleSort)
document.getElementById("add").addEventListener("click",addRecord)
//document.getElementById("add").addEventListener("keypress", function(event){
// 	// If the user presses the "Enter" key on the keyboard
// 	if (event.key === "Enter") {
// 	  // Cancel the default action, if needed
// 	  addRecord();
// 	}
// });
const elem = document.getElementById("arrip");

elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
      addRecord();
  // your code to Run
    }
  });
async function changeText(){
	document.getElementById('code1').innerHTML="For Each Element in Array perform "+ parseInt(n-1) + " passes to sort the Array";
}
