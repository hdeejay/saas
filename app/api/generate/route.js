// // import { Completions } from "openai/resources/chat";
// // import { NextResponse } = require("next/server");
// // const { GoogleGenerativeAI } = require("@google/generative-ai");
// // import { Content } from "next/font/google";


// // const systemPrompt = `
// // You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
// // Both front and back should be one sentence long.
// // You should return in the following JSON format:
// // {
// //   "flashcards":[
// //     {
// //       "front": "Front of the card",
// //       "back": "Back of the card"
// //     }
// //   ]
// // }
// // `

// // export async function POST(req) {
// //     const genAI =  new GoogleGenerativeAI(API_KEY) 
// //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// //     const data = await req.text()

    
// //     const completion = await openai.chat.completion.create({
// //         messages: [
// //             {role:'system';, content: systemPrompt}
// //             {role:'user',content:data},
// //         ],
// //         model: 'gpt-4o',
// //         response_format: {type:'json_object'},
// //     })
// //     const flashcards = JSON.parse(completion.choices[0].message.content)
// //     return NextResponse.JSON.(flashcards.flashcard)
// // }





// import { NextResponse } from "next/server";
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const API_KEY = process.env.GEMINI_API_KEY;
// const systemPrompt =  `You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

// 1. Write a clear and concise question or statement that can be used as a front end for flashcard.
// 2. Use simple and easy to understand language.
// 3. Ensure that each flashcard focuses on a single concept or piece of information.
// 4. Include a variety of question types, such as multiple choice, true/false, fill-in-the-blank, etc.
// 5. Make sure that the flashcards are accurate and relevant to the topic.
// 6. Avoid using jargon or technical terms that may be difficult for learners to understand.
// 7. Use correct spelling, grammar, and punctuation.
// 8. When appropriate, use mnemonics, acronyms, or other memory aids to help learners remember the information.
// 9. If given a body of text, extract the most important information and convert it into flashcards.
// 10. Aim to create a balanced set of flashcards that cover all key points of the topic or content.

// Remember, the goal is to help learners understand and remember the information, so keep the flashcards clear, concise, and engaging.

// // Return in the following JSON format:
// //     {
// //         "flashcards":[
// //             {
// //                 "front": str,
// //                 "back": str
// //             }
// //         ]
// //     }
// // `

// // export async function POST(req) {
// //   try {
// //     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// //     const data = await req.text();
// //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
// //     console.log("Received data:", data); // Log incoming data
    
// //     const chat = model.startChat({
// //       history: [
// //         {
// //           role: "user",
// //           parts: systemPrompt,
// //         },
// //       ],
// //     });

// //     const result = await chat.sendMessage(data);
// //     const response = await result.response;
    
// //     console.log("AI response:", response.text()); // Log AI response
    
// //     const flashcards = JSON.parse(response.text());
// //     return NextResponse.json(flashcards.flashcards);
// //   } catch (error) {
// //     console.error("Error in flashcard generation:", error);
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }
// // // export async function POST(req) {
// // //   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // //   const data = await req.text();
// // //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  

// // //   const chat = model.startChat({
// // //     history: [
// // //       {
// // //         role: "user",
// // //         parts: systemPrompt,
// // //       },
// // //     ],
// // //   });

// // //   const result = await chat.sendMessage(data);
// // //   const response = await result.response;

  


// // //   const flashcards = JSON.parse(response.text());
// // //   return NextResponse.json(flashcards.flashcard);
// // // }








// // // import { NextResponse } from "next/server";
// // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // const API_KEY = process.env.GEMINI_API_KEY;
// // // const systemPrompt = `You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

// // // 1. Write a clear and concise question or statement for the front of the flashcard.
// // // 2. Provide a brief, informative answer for the back of the flashcard.
// // // 3. Create exactly 10 flashcards for the given topic.
// // // 4. Ensure each flashcard focuses on a single concept or piece of information.
// // // 5. Use simple and easy to understand language.
// // // 6. Make sure the flashcards are accurate and relevant to the topic.
// // // 7. Use correct spelling, grammar, and punctuation.

// // // Return the flashcards in the following JSON format:
// // // {
// // //   "flashcards": [
// // //     {
// // //       "front": "Question or prompt",
// // //       "back": "Answer or explanation"
// // //     }
// // //   ]
// // // }`;

// // // export async function POST(req) {
// // //   try {
// // //     const genAI = new GoogleGenerativeAI(API_KEY);
// // //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// // //     const data = await req.text();
// // //     console.log("Received data:", data);

// // //     const result = await model.generateContent([systemPrompt, data]);
// // //     const response = await result.response;
    
// // //     console.log("AI response:", response.text());
    
// // //     const flashcards = JSON.parse(response.text());
// // //     return NextResponse.json(flashcards);
// // //   } catch (error) {
// // //     console.error("Error in flashcard generation:", error);
// // //     return NextResponse.json({ error: error.message }, { status: 500 });
// // //   }
// // // }


// // import { NextResponse } from "next/server";
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // const API_KEY = process.env.GEMINI_API_KEY;
// // const systemPrompt = `Create 10 flashcards based on the given text. Each flashcard should have a 'front' (question or prompt) and a 'back' (answer or explanation). Return the flashcards as a JSON array.`;

// // export async function POST(req) {
// //   try {
// //     const genAI = new GoogleGenerativeAI(API_KEY);
// //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// //     const { text } = await req.json();
// //     console.log("Received text:", text);

// //     const result = await model.generateContent(`${systemPrompt}\n\nText: ${text}`);
// //     const response = await result.response;
    
// //     console.log("AI response:", response.text());
    
// //     const flashcards = JSON.parse(response.text());
// //     return NextResponse.json({ flashcards });
// //   } catch (error) {
// //     console.error("Error in flashcard generation:", error);
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }


// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = process.env.GEMINI_API_KEY;
// const systemPrompt = `Create 10 flashcards based on the given text. Each flashcard should have a 'front' (question or prompt) and a 'back' (answer or explanation). Return the flashcards as a JSON array in the following format:
// {
//   "flashcards": [
//     {
//       "front": "Question or prompt",
//       "back": "Answer or explanation"
//     }
//   ]
// }`;

// export async function POST(req) {
//   try {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const { text } = await req.json();
//     console.log("Received text:", text);

//     const result = await model.generateContent(`${systemPrompt}\n\nText: ${text}`);
//     const response = await result.response;
    
//     console.log("AI response:", response.text());
    
//     const flashcards = JSON.parse(response.text());
//     return NextResponse.json(flashcards);
//   } catch (error) {
//     console.error("Error in flashcard generation:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = process.env.GEMINI_API_KEY;
// const systemPrompt = `Create 10 flashcards based on the given text. Each flashcard should have a 'front' (question or prompt) and a 'back' (answer or explanation). Return the flashcards as a JSON array in the following format, without any markdown formatting or code blocks:
// {
//   "flashcards": [
//     {
//       "front": "Question or prompt",
//       "back": "Answer or explanation"
//     }
//   ]
// }`;

// export async function POST(req) {
//   try {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const { text } = await req.json();
//     console.log("Received text:", text);

//     const result = await model.generateContent(`${systemPrompt}\n\nText: ${text}`);
//     const response = await result.response;
    
//     console.log("AI response:", response.text());
    
//     // Remove any potential markdown code block
//     const cleanedResponse = response.text().replace(/```json\n?|\n?```/g, '').trim();
    
//     const flashcards = JSON.parse(cleanedResponse);
//     return NextResponse.json(flashcards);
//   } catch (error) {
//     console.error("Error in flashcard generation:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }




import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;
const systemPrompt = `Create 10 flashcards based on the given text. Each flashcard should have a 'front' (question or prompt) and a 'back' (answer or explanation). Return the flashcards as a JSON array in the following format, without any markdown formatting or code blocks:
{
  "flashcards": [
    {
      "front": "Question or prompt",
      "back": "Answer or explanation"
    }
  ]
}`;

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const { text } = await req.json();
    console.log("Received text:", text);

    const result = await model.generateContent(`${systemPrompt}\n\nText: ${text}`);
    const response = await result.response;
    
    console.log("AI response:", response.text());
    
    // Remove any potential markdown code block
    const cleanedResponse = response.text().replace(/```json\n?|\n?```/g, '').trim();
    
    const flashcards = JSON.parse(cleanedResponse);
    return NextResponse.json(flashcards);
  } catch (error) {
    console.error("Error in flashcard generation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
