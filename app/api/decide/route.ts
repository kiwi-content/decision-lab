import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { object, story, tool } = await req.json();

    let systemPrompt = "";

    if (tool === "text-my-ex") {
      systemPrompt = `
You are a relationship decision simulator.

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

    } else if (tool === "quit-my-job") {
      systemPrompt = `
You are a career decision simulator.

Evaluate whether the user should quit their job.

Consider:
- Financial stability
- Career growth
- Emotional stress
- Long-term impact

Return ONLY:

Line 1: Exactly one of:
"Stay."
"Prepare before quitting."
"Quit."

Line 2: One short explanation.
`;

    } else if (tool === "break-up") {
      systemPrompt = `
You are a relationship decision simulator.

Evaluate whether the user should break up.

Consider:
- Emotional health
- Compatibility
- Repeated conflict
- Long-term well-being

Return ONLY:

Line 1: Exactly one of:
"Stay."
"Have a serious conversation first."
"Break up."

Line 2: One short explanation.
`;

    } else if (tool === "move") {
      systemPrompt = `
You are a relocation decision simulator.

Evaluate whether the user should move.

Consider:
- Career opportunity
- Financial cost
- Lifestyle change
- Social impact

Return ONLY:

Line 1: Exactly one of:
"Stay."
"Plan carefully."
"Move."

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

    let result = "";

    if (data?.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0]?.content?.parts;
      if (parts && parts.length > 0) {
        result = parts.map((p: any) => p.text).join("\n");
      }
    }

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
