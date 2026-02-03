export default async function handler(req, res) {
  try {
    const token = process.env.TG_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "DIJO QUE SÍ "
      })
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Telegram error" });
  }
}