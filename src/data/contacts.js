import ppGirl1 from "assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "assets/images/profile-picture-girl-2.jpeg";
import ppGirl3 from "assets/images/profile-picture-girl-3.jpeg";
import ppGirl4 from "assets/images/profile-picture-girl-4.jpeg";
import ppBoy1 from "assets/images/profile-picture-boy-1.jpeg";
import ppBoy2 from "assets/images/profile-picture-boy-2.jpeg";
import ppBoy3 from "assets/images/profile-picture-boy-3.jpeg";
import getRandomSentence from "utils/getRandomSentence";

const users = [
	{
		id: 1,
		profile_picture: "https://cdn.discordapp.com/icons/1240311895362375791/ee9f3a998810b59417f78dc8c56ec1bc.webp?size=96",
		name: "Maratona Tech RS",
		phone_number: "+2348123456789",
		whatsapp_name: "Maratona Tech RS",
		unread: 0,
		messages: {
			TODAY: [
				{
					content: null,
					sender: null,
					time: new Date().toLocaleTimeString(),
					status: null,
				},
				// {
				// 	image: true,
				// 	sender: 1,
				// 	time: "09:12:26",
				// 	status: null,
				// },
				// {
				// 	content: "Olá! Boas vindas ao serviço de assistência aos afetados pelas enchentes no Rio Grande do Sul. Que tipo de suporte você precisa? Escolha abaixo aopção desejada",
				// 	sender: 1,
				// 	time: new Date().toLocaleTimeString(),
				// 	status: null,
				// },
				// {
				// 	content: "1- Solicitar suporte; \n 2- Oferecer suporte; \n 3- Orientações de segurança; \n 4- Receber alertas oficiais da Defesa Civil",
				// 	sender: 1,
				// 	time: new Date().toLocaleTimeString(),
				// 	status: null,
				// },
			],
		},
		group: false,
		pinned: true,
		typing: false,
	},

];

export default users;
