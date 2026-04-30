const getAllowSelfCommands = () => {
	const primaryMyNumber = process.env.MY_NUMBER?.split(",")[0]?.trim() || "";
	const primaryBotNumber = process.env.BOT_NUMBER?.split(",")[0]?.trim() || "";
	if (!primaryMyNumber || !primaryBotNumber) return false;
	return primaryMyNumber === primaryBotNumber;
};

export default getAllowSelfCommands;
