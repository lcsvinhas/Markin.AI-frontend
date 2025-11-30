export const chatApi = {
  async sendMessage(message: string, onChunk: (chunk: string) => void) {
    const response = await fetch("http://127.0.0.1:8000/perguntar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pergunta: message }),
    });

    if (!response.body) {
      throw new Error("Streaming não suportado.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      onChunk(chunk);
    }
  },
};
