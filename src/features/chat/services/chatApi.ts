const responses = [
  "QuizMaster é uma plataforma inovadora que ajuda professores a criar quizzes interativos.",
  "Nossa plataforma oferece suporte completo para suas necessidades!",
  "Ótima pergunta! Estou aqui para ajudar.",
  "Posso te ajudar com isso! O QuizMaster facilita seu trabalho.",
];

export const chatApi = {
  async sendMessage(message: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(responses[Math.floor(Math.random() * responses.length)]);
      }, 1500);
    });
  },
};
