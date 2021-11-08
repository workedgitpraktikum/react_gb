export const BOT = {
	name: "bot",
	message: "Привет! 👋 Задай мне вопрос, и я постараюсь тебе помочь."
}

export const USER = "Vlad";

const generateID = Date.now()

export const CHAT_LIST = [
	{
	  id: `chat_${generateID}`,
	  name: "My fancy chat", 
	  image: "https://picsum.photos/id/11/40",
	  messages: []
	}, 
	{
	  id: `chat_${generateID + 1}`,
	  name: "Dolor sit amet", 
	  image: "https://picsum.photos/id/22/40",
	  messages: []
	}, 
	{
	  id: `chat_${generateID + 2}`,
	  name: "Lorem Ipsum", 
	  image: "https://picsum.photos/id/33/40",
	  messages: []
	}, 
  ]
