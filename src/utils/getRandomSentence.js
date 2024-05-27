const sentences = [
	"Olá, gostaria de ajuda, por favor!",
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
