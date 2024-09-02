const Index = require("#Index");
const pg = require("pg");

const fs = require("fs");
const path = require("path");

const { Client } = pg;

const html = async (x, ...values) => {
	var rendered = "";
	for (let u = 0; u < x.length; u++) {
		rendered = rendered.concat(x[u]);
		if (u < x.length - 1) {
			if (typeof values[u] == "function") {
				rendered = rendered.concat(await values[u]());
			} else {
				rendered = rendered.concat(values[u]);
			}
		}
	}

	return rendered;
};

const js = async (x, ...values) => {
	var rendered = "";
	for (let u = 0; u < x.length; u++) {
		rendered = rendered.concat(x[u]);
		if (u < x.length - 1) {
			if (typeof values[u] == "function") {
				rendered = rendered.concat(await values[u]());
			} else {
				rendered = rendered.concat(values[u]);
			}
		}
	}

	return rendered;
};




    

    
    

var message;

// ${()=> {return typeof script == "string" ? `<script>${script}</script>` : ""}}

module.exports = {
	html: (script, clientData) => html`

    <button id="add-new-cheat">Toggle add field</button>

    <div style="display:none" id="add-new-element-container">
    
    
    <form id="add-new-cheat-form">
    <h4>Name</h4>
    <input id="add-new-cheat-name" type="text" />



    <h4>Markdown</h4>

    <textarea id="add-new-cheat-markdown"></textarea>
    

    <input type="submit" value="add new cheat sheet" />
    
    </form>

        <div style="position:fixed" id="add-custom-load" class="loading-block"></div>
    <div id="error-box-of-add-custom"></div>



    </div>


    <h1 class="container-headings">Custom Cheat Sheets</h1>

		<div class="container-list-container-for-element">


    			${async ()=> {

 
                    var record;

                    try{
                        var data = await fs.readFileSync(path.join(__dirname, "..", "..", "..",  "env.json"), { encoding: "utf8", flag: "r" });
                
                        data = await JSON.parse(data);
                    
                        const client = await new Client({ connectionString: data.PG_CONNECTION_STRING });
                    
                        await client.connect();
                    
                        record = await client.query(
                            `SELECT * FROM "ossk_contents"`,
                        );
                    
                            
                        client.end()
                    
                
                    }catch(e){
                
                 
                        console.log(e)
                                    }


                        if(record.rows.length == 0){

                            return `<h2>No custom cheat sheet exist yet<h2>`
                        }
 

                  var x =  String(record.rows.map(t => {
                        return `
                <div
                    onclick="changeCustom(this)"
                    class="list-container-for-element">
                    <img
                        class="list-container-for-element-image"
                        src="/assets/code.svg" />
                    <div class="list-container-for-element-text">
                        <p>${t.title}</p>
                        <div style="display:none">
                        <button id="delete-custom-cheat">Delete</button>


                        <div id="error-box-for-deletion-on-cheat"></div>
                        <div id="id-of-custom-cheat" style="display:none">${t.id}</div>

             
                        ${t.rendered}
                        
                        </div>
                    </div>
                </div>
                `;
                    })).replaceAll(",", "\n");

                    return x;

                }}



			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>


    <style>
    
    #add-new-cheat{
    
    padding:1rem 1rem;
    border-radius:.4rem;
    background: green;
    border: none;
    cursor:pointer;
    font-size:1.2rem;
    color:white;
    }


    #add-new-cheat-markdown{
    width:100%;
    resize: vertical;
    height: 400px;
    
    }
    			.container-headings {
				margin: 0;
				font-size: 3rem;
			}

			.container-list-container-for-element {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.list-container-for-element {
				cursor: pointer;
				margin: 1rem 0;
				min-width: 150px;
				max-width: 250;

				display: grid;
				border: 1px solid #d0d0d0;

				grid-template-rows: 150px 50px;
				border-radius: 0.5rem;
			}

			.list-container-for-element-text > p {
				color: black;
				margin: 0;
				display: inline;

				font-size: 1.4rem;
			}

			.list-container-for-element-text {
				display: grid;
				place-items: center;
				border-top: 1px solid #d0d0d0;
			}

			.list-container-for-element-image {
				place-self: center;
				height: 80%;
			}
    
    </style>
 


	`,
	js: clientData => js`
	
 
	

document.querySelector("#add-new-cheat-form").addEventListener("submit", async e => {
    
    e.preventDefault()
    

    const formData = new FormData()

    formData.append("title", document.querySelector("#add-new-cheat-name").value)
    formData.append("raw", document.querySelector("#add-new-cheat-markdown").value)


    document.querySelector("#add-custom-load").classList.add("active");

    const rendered_res = await fetch("https://api.github.com/markdown", {
    
    headers:{accept:"application/vnd.github+json"},
    method: "POST",
    body: JSON.stringify(
    
    {text: document.querySelector("#add-new-cheat-markdown").value,
    mode:"gfm"
}
    )
    
    
    })




    formData.append("rendered", await rendered_res.text() )
    
    const res = await fetch("/database/cheat-sheet", {
    
    method:"put",
    body: formData
    
    }) 

    document.querySelector("#add-custom-load").classList.remove("active");

    
    
    if(res.ok) {

    ChangeContent('PageCustom')
    // document.querySelector("#error-box-of-add-custom").innerHTML = await res.text()
    
    
    }
    else {
    
    document.querySelector("#error-box-of-add-custom").innerHTML = await res.text()
    
    }
    
    
    
    
    })
    
	
	document.querySelector(".page-title").innerHTML = "Custom Cheat Sheets"


	document.querySelector("#add-new-cheat").addEventListener("click", async ()=> {
 
 
if( document.querySelector("#add-new-element-container").style.display == "none") document.querySelector("#add-new-element-container").style.display = "block"
else document.querySelector("#add-new-element-container").style.display = "none"

        })



	`,
};
