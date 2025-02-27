//your JS code here. If required.

document.getElementById("btn").addEventListener("click",function(){
	let number = parseInt(document.getElementById("ip").value);
	let output = document.getElementById("output");

	if(isNaN(number))
	{
		output.innerHTML="please enter a number ";
		return;
	}

	new Promise((resolve)=>{
		setTimeout(()=>{
			let p = document.createElement("p");
				p.innerHTML = `Result: ${number}`;
			output.appendChild(p);
			resolve(number);
		},2000);
	})

	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
			let p = document.createElement("p");
			let mul = num*2;
			p.innerHTML = `Result: ${mul}`;
			output.appendChild(p);
			resolve(mul);
		},1000);
		});
	})

	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
			let p = document.createElement("p");
			let sub = num-3;
			p.innerHTML = `Result: ${sub}`;
			output.appendChild(p);
			resolve(sub);
		},1000);
		})
	})

	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let p = document.createElement("p");
				let div = num/2;
				p.innerHTML = `Result: ${div}`;
				output.appendChild(p);
				resolve(div);
			},1000);
		})
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let p = document.createElement("p");
				let sum = num+10;
				p.innerHTML=`Final Result: ${sum}`;
				output.appendChild(p);
				resolve(sum);
			},1000)
		})
	})
	

	
})
