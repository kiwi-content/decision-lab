import { NextResponse } from "next/server";
import { isRateLimited } from "../rate-limit";

const VALID_TOOLS = ["text-my-ex", "quit-my-job", "break-up", "move", "throw-away"] as const;
type ToolType = (typeof VALID_TOOLS)[number];

const MAX_STORY_LENGTH = 5000;

const systemPrompts: Record<ToolType, string> = {
  "text-my-ex": `
You are a structured decision simulator for personal choices.

Evaluate whether this person should text their ex based on their situation.

Consider: emotional vulnerability, intent behind texting, time elapsed since breakup, risk of reopening wounds, and whether contact serves a clear purpose.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Do not text." / "Wait." / "Text cautiously."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take today.
`,
  "quit-my-job": `
You are a structured decision simulator for career decisions.

Evaluate whether this person should quit their job based on their situation.

Consider: financial runway, stress and burnout level, whether the root problem can be fixed internally, career growth trajectory, and downside risk if they leave.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Do not quit." / "Quit with a plan." / "Quit now."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this week.
`,
  "break-up": `
You are a structured decision simulator for relationship decisions.

Evaluate whether this person should end their relationship based on their situation.

Consider: recurring conflict patterns, emotional safety, whether both people are growing or stuck, trust level, and long-term compatibility around values and goals.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Stay and work on it." / "Take space first." / "End it."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this week.
`,
  "move": `
You are a structured decision simulator for relocation decisions.

Evaluate whether this person should move based on their situation.

Consider: career or financial upside, quality of life change, cost of living difference, strength of current vs. new support network, and whether they are moving toward something or escaping something.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Stay for now." / "Plan the move." / "Move."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take this month.
`,
  "throw-away": `
You are a structured decision simulator for decluttering decisions.

Evaluate whether this person should throw away this object based on their situation.

Consider: emotional attachment vs. practical utility, frequency of use in the past year, the space it occupies, and whether keeping it serves the present or just preserves the past.

Return EXACTLY 4 lines, nothing else:
Line 1: Exactly one of: "Keep it." / "Hold for 30 days." / "Throw it away."
Line 2: The single strongest reason for your decision, referencing their specific situation.
Line 3: One concrete risk or caution they should be aware of.
Line 4: One specific, actionable next step they should take today.
`,
};

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const { story, tool } = await req.json();

    if (!story || typeof story !== "string" || !story.trim()) {
      return NextResponse.json(
        { error: "Please describe your situation." },
        { status: 400 }
      );
    }

    if (story.length > MAX_STORY_LENGTH) {
      return NextResponse.json(
        { error: `Input is too long. Please keep it under ${MAX_STORY_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (!VALID_TOOLS.includes(tool)) {
      return NextResponse.json(
        { error: "Invalid tool." },
        { status: 400 }
      );
    }

    const systemPrompt = systemPrompts[tool as ToolType];

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

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      return NextResponse.json({
        result:
          "Wait.\nThere is not enough signal to make a confident call yet.\nActing while uncertain may increase regret.\nWrite your key facts and reassess in 24 hours.",
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
