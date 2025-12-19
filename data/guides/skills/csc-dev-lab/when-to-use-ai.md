---
title: "[DL] When to Use AI"
author: "Shreyash Ranjan"
date: "2025-12-17"
order: 2
---

Tools like GitHub Copilot and Cursor are standard in our industry now. They let us ship faster, but they also make it incredibly easy to ship bad code faster.

At CSC Dev Lab, we want you to be an **AI-Assisted Engineer**, not a "Vibe Coder."

## Speed vs. Maintenance

There’s decent evidence developers can move significantly faster with AI. GitHub found that developers completing tasks with Copilot were up to **55% faster**⁽¹⁾, and McKinsey estimates a 30-60% time saving on boilerplate and documentation⁽²⁾.

![GitHub Copilot Speed Study](/images/guides/skills/csc-dev-lab/copilot-study.png)


Speed matters, but it’s not the metric that keeps a codebase healthy.

If you generate code you don't understand, you aren't building software. You’re pushing work into the debugging and review phase, where it gets more expensive. Code that takes 5 seconds to generate but 5 hours to debug is a net loss. In Dev Lab, someone else will read your code next week, and they won’t have your prompt history.

## Don't be a Vibe Coder

"Vibe coding" is what happens when you let the tool do your thinking for you. You type a prompt, paste the result, and if it runs, you commit it. This creates a few problems:
1.  **Security Vulnerabilities:** AI often suggests outdated or insecure packages.
2.  **Spaghetti Code:** LLMs are great at writing functions, but terrible at system architecture.
3.  **Skill Atrophy:** You can't debug what you don't understand.

**AI-Assisted Engineering** is different. You act as the architect. You decide *what* needs to be built and *how* data should flow. You use the AI to handle the implementation details, syntax, boilerplate, but you review every line.

## How to use AI in Dev Lab

### Plan first, prompt second

These tools are great at local edits and small functions. They struggle with repo-wide design unless you give them structure.

Before you open the chat, know your data flow. If you ask "Make me a user profile page," you'll get a component that looks fine but ignores our types, server actions, and how we actually store user data. If you ask "Create a profile component that takes a `User` type and calls our `updateProfile` server action," you might get code you can actually use.

### The "Why" Rule

**Never commit code you can't explain.**

If Cursor suggests a complex one-liner or a library you haven't installed, ask it to explain. Use the tool to learn the syntax, not to bypass it. If a PR reviewer asks "why did you use `reduce` here?" and your answer is "that's what AI wrote," you aren't ready to merge.

### Refactor the output

It tends to duplicate logic, skip helpers we might already have, and invent new patterns.

Don't treat the output as final. Treat it as a first draft. Rename the variables to match our style guide. Extract the repeated logic into a utility. If you prompt, paste, and commit, you are likely introducing technical debt⁽³⁾.

### Iterate, Don't Regenerate

If the code is wrong, don't just hit "Regenerate" and hope for a better random seed. Tell the model *why* it failed. "This breaks when the user is undefined." "This uses a deprecated API."

Talk to it like you would in a PR: point out the failure case, the constraint, and what ‘done’ means.

### Responsibility

Using AI comes with a responsibility. In Dev Lab, we'd rather you bang your head against a wall or work with your team lead to create code than blindly use AI. That being said, it can be extremely helpful.

Review this guide for some cool AI tools (coming soon).

---

*Attribution & Acknowledgements: We stand on the shoulders of giants. Thanks to the open source communities and insights from Claire Longo, Philip Mutua, and Aalap Davjekar that helped shape these practices.*

**References:**

⁽¹⁾ [GitHub Research: Quantifying Copilot’s impact](https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)

⁽²⁾ [McKinsey: Developer Productivity with Generative AI](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai)

⁽³⁾ [Google Cloud DORA Report](https://cloud.google.com/devops/state-of-devops)
