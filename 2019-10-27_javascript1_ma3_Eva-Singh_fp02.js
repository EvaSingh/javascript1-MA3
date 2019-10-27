  var video = {
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
  };

                
//Console.log out elements in JSON file

console.log (video.id);
console.log (video.name);
console.log (video.url);
console.log (video.author);


for (var i = 0; i < video.author.data.length; i++) { 
    console.log (video.author.data[i]);
}






