import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { object, story, tool } = await req.json();

    let systemPrompt = "";

    // Tool-based prompt switching
    if (tool === "text-my-ex") {
      systemPrompt = `
You are a decision simulator.

Evaluate whether someone should text their ex.

Consider:
- Emotional vulnerability
- Intent behind texting
- Timing since breakup
- Risk of reopening wounds

Return ONLY:

Line 1: Exactly one of:
"Do not text."
"Wait."
"Text cautiously."

Line 2: One short explanation.
`;
    } else {
      // Default: throw-away tool
      systemPrompt = `
You are a declutter decision simulator.

Evaluate whether the user should throw something away.

Consider:
- Emotional attachment
- Practical use
- Frequency of use
- Space taken

Return ONLY:

Line 1: Exactly one of:
"Keep it."
"Hold for 30 days."
"Throw it away."

Line 2: One short explanation.
`;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}

Situation:
${story}
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini response:", JSON.stringify(data, null, 2));

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      return NextResponse.json({
        result: "Wait.\nClarity needs time.",
      });
    }

    return NextResponse.json({ result });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}
