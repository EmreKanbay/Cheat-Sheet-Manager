const markdownit = require("markdown-it");
const md = markdownit();

const fs = require("fs");
const path = require("path");
//     const Components = require("#Components")
//     ${Components.Markdown(markedown="# dasasd \n 1. **test** \n - here it goes \n ![img](https://i.ytimg.com/vi/THvIFgaz3JM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAsAHigIMCAAQARhlIGUoZTAP&rs=AOn4CLDFeIpaG8aJKimWtnJBGJb2YhexoA)")}

module.exports = {
	html: async clientData =>
		md.render(
			await fs.readFileSync(
				path.join(
					__dirname,
					path.format({
						ext: ".md",
						name: path.parse(path.join(__dirname, __filename)).name,
					}),
				),
				{ encoding: "utf8", flag: "r" },
			),
		),
	js: clientData => ``,
};
