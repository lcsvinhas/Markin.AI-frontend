# Projeto Markin.AI

A camada inteligente de cultura, compliance e conhecimento técnico da empresa.

## Objetivo do Projeto

O Markin.AI transforma o conhecimento corporativo — decisões técnicas, diretrizes, políticas internas, cultura e processos — em uma inteligência consultável, padronizada e auditável.

A solução apoia:

- Onboarding rápido e consistente.
- Redução da dependência de especialistas.
- Padronização de decisões técnicas.
- Apoio à estruturação e acompanhamento de PDIs.
- Criação de uma base viva para evolução contínua.

## Como a IA foi aplicada

A arquitetura une LLMs + RAG + classificação pré-indexação + governança para garantir respostas consistentes, seguras e contextualizadas.

Componentes de IA aplicados:

1. Ingestão e normalização de conteúdo interno

- Diretivas técnicas, guias de arquitetura, políticas internas, repositórios e materiais de Gente & Gestão.

2. Indexação vetorial

- Criação de embeddings para busca semântica em documentos internos.

3. Orquestração com LangChain/LlamaIndex

- Recuperação dos trechos relevantes + geração de respostas fundamentadas.

4. LLM para análise e geração

- Explicações, recomendações de trilhas, tarefas de PDI e boas práticas.

## Benefícios Qualitativos

- **Onboarding mais rápido e confiável:** novos colaboradores acessam a cultura técnica da empresa desde o primeiro dia.
- **Menos dependência de especialistas:** dúvidas recorrentes deixam de consumir tempo de seniors.
- **Tom de resposta consistente:** sem variação entre times ou pessoas.
- **PDI automatizado:** a IA sugere rotas de aprendizado e tarefas ligadas às dúvidas reais do colaborador.
- **Documentação viva:** políticas e diretrizes são consultáveis e melhoram com o uso.
- **Gaps de conhecimento mais claros:** dashboards mostram temas mais consultados.

## Benefícios Quantitativos (Estimativas Fundamentadas)

Como ainda não houve POC real, não é possível apresentar métricas comprovadas.
No entanto, apresentamos projeções plausíveis:

- Expectativa de redução de ~30% do tempo de onboarding.
- Economia de 2 a 4 horas semanais de senioridade por colaborador, reduzindo dúvidas.
- Engajamento maior em PDIs, com trilhas automatizadas e acompanhamento contínuo.

## Desafios e Soluções Encontradas

1. Centralização de conhecimento disperso <br>
   **Solução:** pipeline de ingestão com normalização, metadados e chunking orientado a conteúdo técnico.

2. Hallucinations ou respostas sem referência <br>
   **Solução:** RAG com citação de fontes, threshold de confiança e fallback para “não sei”.

3. Conteúdo sensível ou restrito <br>
   **Solução:** classificação pré-indexação, política de redaction e permissões por perfil.

4. Consumo de API e custo operacional <br>
   **Solução:** arquitetura híbrida com modelos locais para retrieval + LLM via API apenas para geração crítica.

5. Governança e responsabilidade <br>
   **Solução:** logs de consulta, auditoria e fluxo humano para curar recomendações de PDI.

## Próximos Passos e Aplicabilidade

### 1. POC Interno (Primeira fase – imediata)

- Definir time piloto (TI + Gente & Gestão).
- Ingerir 10–20 documentos essenciais e 3 repositórios.
- Implementar Slack/Teams bot com RAG.
- Executar teste de 30 dias e medir baseline vs impacto.

### 2. Evolução Natural do Projeto

- Trilhas de conhecimento por área.
- Suporte a dados sensíveis com permissões avançadas.
- Integração com LMS, VSCode e cadeia de build.

### 3. Visão de Produto (Médio prazo)

### 4. Escalar a solução para um produto B2B (Longo prazo)

## Impacto Estratégico

- Consolida cultura técnica e reduz variabilidade entre times.
- Democratiza conhecimento e reduz dependência de indivíduos-chave.
- Fortalece onboarding, retenção e desenvolvimento.
- Cria base sólida para virar produto inovador e exportável.
