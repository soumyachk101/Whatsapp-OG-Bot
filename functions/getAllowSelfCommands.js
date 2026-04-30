const getAllowSelfCommands = () => {
	const primaryMyNumber = process.env.MY_NUMBER?.split(",")[0]?.trim();
	const primaryBotNumber = process.env.BOT_NUMBER?.split(",")[0]?.trim();
	return !!primaryMyNumber && !!primaryBotNumber && primaryMyNumber === primaryBotNumber;
};

export default getAllowSelfCommands;
