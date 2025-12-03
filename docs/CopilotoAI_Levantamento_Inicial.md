# Copiloto.AI --- Levantamento Inicial do Projeto

O **Copiloto.AI** é uma plataforma interna de alinhamento técnico, cultural e operacional baseada em LLM. Ele transforma diretrizes, decisões técnicas e cultura organizacional em uma inteligência consultável --- melhorando onboarding, acelerando decisões e apoiando PDIs.

## 1. Objetivos do Projeto

- Garantir acesso claro e alinhado ao conhecimento técnico e cultural da empresa.
- Reduzir dependência de especialistas e diminuir dúvidas recorrentes.
- Acelerar onboarding e reduzir tempo até produtividade.
- Apoiar Gente & Gestão na criação e acompanhamento de PDIs.
- Gerar métricas para validar impacto e orientar evolução para produto.

## 2. Proposta de Valor

- Respostas contextualizadas às decisões internas.
- Mentoria automatizada com trilhas e sugestões para PDIs.
- Integração com Slack, Teams, VSCode e LMS.
- Dashboards para monitorar temas consultados, gaps e evolução de PDIs.

## 3. Arquitetura Técnica

### 3.1 Componentes Principais

**Ingestão e Curadoria**

- Fontes: documentação, READMEs, políticas internas, gravações transcritas.
- Pipeline: limpeza → normalização → chunking → embeddings.

**Vector DB**

- Opções: Pinecone, Weaviate, Chroma, FAISS.
- Para POC: Chroma.

**Orquestração / RAG**

- LangChain e LlamaIndex.
- Modelos: GPT, Llama 3, Mistral.

**Aplicação**

- Backend: FastAPI ou NestJS.
- Frontend: React/Next.js. -
- Integrações: Slack/Teams e extensão VSCode.

**Governança**

- SSO

### 3.2 Arquitetura Alternativa

Agentes consultam fontes em runtime, reduzindo replicação de dados sensíveis.

## 4. Viabilidade Técnica

### Por que é viável

- RAG elimina necessidade de treinar modelos do zero.
- Ferramentas vetoriais maduras.
- APIs de colaboração eficientes.

### Riscos e Mitigações

- Alucinação → RAG + citações + fallback.
- Dados sensíveis → redaction + DLP.
- Custos → arquitetura híbrida.

## 5. Integrações

- Slack/Teams
- VSCode
- SharePoint / Confluence / Git
- LMS

## 6. Métricas

- Tempo de onboarding
- Horas de senioridade economizadas
- Percentual de dúvidas resolvidas
- NPS de aprendizagem
- Progresso dos PDIs

## 7. Benefícios Esperados

- Produtividade
- Transparência técnica
- PDIs orientados por dados
- Economia operacional

## 8. Evolução para Produto

### Modelos

- SaaS: Licenciamento em nuvem, pronto para uso.
- White-label / On-premise (instalação em ambiente privado): Entrega personalizada para empresas que exigem identidade própria ou controle total dos dados.
- Consultoria: Serviço especializado para acelerar a adoção da solução.
- Marketplace: Ecossistema de extensões, modelos e integrações certificadas.

### Roadmap

Estimativa de viabilidade de prazo:

- MVP interno (0--3 meses)
- Piloto ampliado (3--6 meses)
- Produto comercializável (?--? meses)

## 9. Conexão com Cultura e PDIs

- Perguntas viram sinais de competência
- Trilhas geradas automaticamente
- Dashboards para RH
- Validação por gestores

## 10. Roteiro de POC

1.  Seleção do time piloto
2.  Curadoria inicial
3.  Infra básica
4.  Desenvolvimento do bot
5.  Testes por 2 semanas
6.  Medição por 30 dias

## 11. Segurança e Compliance

- Classificação pré-indexação
- Redaction de PII (mascara informações pessoais)
- Logging e auditoria
- Versão on-premise (instalado na infraestrutura do cliente)
