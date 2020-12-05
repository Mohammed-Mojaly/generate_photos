   
    async function generateFace(){
        // get values from elements and declere variables for set to api
        let gender = document.getElementById("gender").value;
        let hair = document.getElementById("hair_color").value;
        let age = document.getElementById("age").value;
        let emotion = document.getElementById("emotion").value;
        let eye_color = document.getElementById("eye_color").value;
        let hair_length = document.getElementById("hair_length").value;

        let response = await fetch(
            `https://api.generated.photos/api/v1/faces?api_key=19LPmJWbM6RzEdom4bLO8Q&emotion=${emotion}&gender=${gender}&age=${age}&eye_color=${eye_color}&hair_color=${hair}&hair_length=${hair_length}&per_page=1`,
            {
                method:"GET"
            }
        );
        let result = await response.json();
        console.log(result);
        document.querySelector("#face").src=result.faces[0].urls[4]["512"];
    }