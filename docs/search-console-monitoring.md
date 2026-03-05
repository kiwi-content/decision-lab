# Search Console Monitoring Plan

## Goal
- Keep `https://decisionlab.today` as the only primary indexed host.
- Track and reduce impressions from `https://decisionlab.vercel.app`.

## Properties To Add
- Domain property: `decisionlab.today`
- URL-prefix property: `https://decisionlab.vercel.app/`

## Weekly Checks (14-day window)
1. **Performance > Search results > Pages**
- Confirm clicks/impressions move toward core tool pages:
  - `/text-my-ex`
  - `/break-up`
  - `/quit-my-job`
  - `/move`
  - `/throw-away`

2. **Performance > Search results > Queries**
- Track branded-confusion queries (for example, `the decision lab ...`).
- Track intent-aligned queries (`should i text my ex`, `should i break up`, etc.).

3. **Indexing > Pages**
- Ensure `/about`, `/terms`, `/privacy` remain excluded because of `noindex`.

4. **URL Inspection (priority order)**
1. `https://decisionlab.today/`
2. `https://decisionlab.today/text-my-ex`
3. `https://decisionlab.today/break-up`
4. `https://decisionlab.today/quit-my-job`
5. `https://decisionlab.today/move`
6. `https://decisionlab.today/throw-away`
7. `https://decisionlab.today/methodology`
8. `https://decisionlab.today/contact`

## Success Signal
- `decisionlab.today` impressions/clicks increase on tool pages.
- `decisionlab.vercel.app` impressions trend down as redirects/canonical settle.
