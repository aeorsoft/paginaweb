import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Si no hay API key, usar respuestas predefinidas
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ 
        response: getFallbackResponse(message),
        isFallback: true 
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres un asistente de programación experto. Responde preguntas sobre:
          - JavaScript, TypeScript, React, Next.js
          - Python, Node.js
          - HTML, CSS, Tailwind CSS
          - Bases de datos (PostgreSQL, MongoDB)
          - Arquitectura de software
          - Mejores prácticas de desarrollo
          - Debugging y resolución de problemas
          
          Responde de manera clara, concisa y con ejemplos de código cuando sea apropiado. Si la pregunta no es sobre programación, explica cortésmente que te especializas en temas de desarrollo de software.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'No pude generar una respuesta.';

    return NextResponse.json({ response, isFallback: false });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Fallback response en caso de error
    return NextResponse.json({ 
      response: "Lo siento, estoy experimentando problemas técnicos. Por favor, intenta de nuevo más tarde.",
      isFallback: true 
    });
  }
}

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('react') || lowerMessage.includes('componente')) {
    return `React es una biblioteca de JavaScript para construir interfaces de usuario. Aquí tienes un ejemplo básico:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
\`\`\`

¿Te gustaría que profundice en algún aspecto específico de React?`;
  }
  
  if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
    return `JavaScript es un lenguaje de programación versátil. Aquí tienes algunos conceptos clave:

\`\`\`javascript
// Arrow functions
const suma = (a, b) => a + b;

// Async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Destructuring
const { name, age } = { name: 'Alex', age: 30 };
\`\`\`

¿Qué aspecto de JavaScript te interesa más?`;
  }
  
  if (lowerMessage.includes('css') || lowerMessage.includes('estilo')) {
    return `CSS es fundamental para el diseño web. Con Tailwind CSS puedes crear estilos de manera eficiente:

\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
  <h2 class="text-xl font-bold mb-2">Título</h2>
  <p class="text-blue-100">Contenido del componente</p>
</div>
\`\`\`

¿Necesitas ayuda con algún estilo específico?`;
  }
  
  if (lowerMessage.includes('nextjs') || lowerMessage.includes('next')) {
    return `Next.js es un framework de React que ofrece:

- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes**
- **File-based routing**

Ejemplo de una página en Next.js:

\`\`\`jsx
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>Acerca de</h1>
      <p>Esta es la página About</p>
    </div>
  );
}
\`\`\`

¿Te gustaría saber más sobre alguna característica específica?`;
  }
  
  return `Hola! Soy tu asistente de programación. Puedo ayudarte con:

- **React & Next.js**: Componentes, hooks, routing
- **JavaScript/TypeScript**: Sintaxis, async/await, ES6+
- **CSS & Tailwind**: Estilos, responsive design
- **Backend**: Node.js, APIs, bases de datos
- **Herramientas**: Git, Docker, deployment

¿En qué puedo ayudarte hoy?`;
}
