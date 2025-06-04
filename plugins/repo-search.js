const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply("❌ Please provide a GitHub repository in the format 📌 `owner/repo`.");
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl);

    let responseMsg = `📁 *GitHub Repository Info* 📁\n\n`;
    responseMsg += `📌 *Name*: VENGEANCE-XMD\n`;
    responseMsg += `🔗 *URL*: https://github.com/VENGEANCE254/VENGEANCE-XMD \n`;
    responseMsg += `📝 *Description*: This VENGEANCE-XMD Whatsapp Bot Created By HACKLINK TECH.INC\n`;
    responseMsg += `👤 *Owner*: HACKLINK TECH.INC\n`;
    responseMsg += `📅 *Created At*:2025/06/04\n`;
    responseMsg += `\n> *© Powered by VENGEANCE-XMD*`;

    await conn.sendMessage(from, { text: responseMsg }, { quoted: m });
  } catch (error) {
    console.error("GitHub API Error:", error);
    reply(`❌ Error fetching repository data: ${error.response?.data?.message || error.message}`);
  }
});
