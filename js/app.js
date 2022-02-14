const app = () => {
	const title = document.getElementById("title");
	const button = document.getElementById("submit");
	const div = document.getElementById("items");
	button.addEventListener("click", async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/photos");
		const data = await response.json();
		for (let i = 0; i <= 5; i++) {
			let img = document.createElement("img");
			img.src = data[i].thumbnailUrl;
			div.appendChild(img);
		}
	});
};

app();
