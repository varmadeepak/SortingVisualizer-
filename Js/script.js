var container = document.getElementById("array");
let d = document.getElementById("delay");
let sorted=false;
let swapped=false;
let gg=false;
// Function to generate the array of blocks
let n=Math.ceil(Math.random() * 20)+5;
async function generatearray() {
	for (var i = 0; i < n; i++) {

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

// Promise to swap two blocks
async function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		el1.style.backgroundColor="yellow";
		el2.style.backgroundColor="yellow";
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
	//changeText();
	var blocks = document.querySelectorAll(".block");

	// BubbleSort Algorithm
		for (i = 0; i < n; i++) {
			for (var j = 0; j < n - i - 1; j++) {
	
				// To change background-color of the
				// blocks to be compared
				blocks[j].style.backgroundColor = "#FF4949";
				blocks[j + 1].style.backgroundColor = "#FF4949";
	
				// To wait for .1 sec
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delay)
				);
	
				console.log("run");
				var value1 = Number(blocks[j].childNodes[0].innerHTML);
				var value2 = Number(blocks[j + 1]
							.childNodes[0].innerHTML);
	
				// To compare value of two blocks
	
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
		if(i === n){
			swapped=true;
			alert("Given Array is Sorted")
		}
}
async function setup() {
	document.getElementById("d").innerText = d.value + "ms";
}


// Calling generatearray function
generatearray();



document.getElementById('btn').addEventListener('click',BubbleSort)

async function changeText(){
	document.getElementById('code1').innerHTML="For Each Element in Array perform "+ parseInt(n-1) + " passes to sort the Array";
}


