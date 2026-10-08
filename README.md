# Bem Vino Boutique Travel

Website editorial e comercial da Bem Vino Boutique Travel, desenvolvido com Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, React Three Fiber, React Hook Form e Zod.

## Executar localmente

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run start
```

O projeto usa o fluxo padrão do Next.js e pode ser importado diretamente na Vercel. Não é necessário adicionar um `vercel.json`.

## Conteúdo e imagens

- A fotografia hero foi obtida do site de referência fornecido pela empresa; as marcas são arquivos públicos oficiais da Bem Vino.
- As fotografias editoriais de destinos foram selecionadas em uma página pública de viagens realizadas pela Bem Vino e convertidas para WebP.
- As fotos de perfil públicas de Andreia e Silvana foram usadas apenas para identificá-las e levam aos respectivos perfis oficiais.
- As imagens estão otimizadas e carregadas sob demanda quando possível; o globo 3D também é separado do carregamento inicial.
- Viagens, datas, preços, depoimentos e artigos não verificados não são publicados como conteúdo real.
- O pedido de roteiro funciona em três etapas, sem backend ou armazenamento, e prepara um resumo para o WhatsApp +55 54 99918-7888.

Antes da publicação definitiva, confirme com a empresa a autorização de uso das fotografias, o telefone principal e os dados de contato. O Instagram limita a consulta pública das postagens, por isso nenhuma postagem foi copiada ou incorporada sem validação.

## Pedido de roteiro

O formulário não envia dados para servidor e não usa banco de dados. As respostas são transformadas em uma mensagem no navegador; o visitante confirma o envio diretamente no WhatsApp.

## Rotas

O conteúdo comercial e o pedido de roteiro ficam concentrados em `/`. A página `/privacidade` permanece separada; endereços antigos exibem a página principal para não quebrar links já compartilhados.
