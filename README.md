# Git Good - A Guide to Not Breaking Everything

Welcome to the **Git Good** repository! This is where you'll learn to git your act together without destroying the codebase.

> *"With great merge power comes great merge responsibility"* - Spider-Dev, probably

## Mission: Survive

This repo contains a simple Todo app specifically designed to help you practice git workflows and more importantly, **not lose weeks of work to git mishaps**.

## What You'll Learn (The Hard Way)

- Our current git workflow: `dev` → `qa` → `uat` → `prod`
- How to create feature branches without panic
- Merge conflicts (they're not as scary as they look)
- How to unfuck your commits when things go wrong
- Why we ask 47 questions before touching new code

For the sake of these exercises the code does not matter. It's there to serve purely to simulate working in a real environment.

## The Practice App

A fully functional Todo app with three separate files:
- `index.html` - The bones
- `styles.css` - The beauty
- `script.js` - The brains

Perfect for creating realistic merge conflicts!

## Git Workflow Cheat Sheet

```bash
# The Golden Path (Don't Deviate)
git checkout dev
git pull origin dev
git checkout -b feature/your-awesome-feature
# ... make your changes ...
git add .
git commit -m "feat: add awesome feature that definitely works"
git push origin feature/your-awesome-feature
# Create PR to dev branch
```

## Practice Scenarios

### Level 1: Baby Steps
- [ ] Clone this repo
- [ ] Create a feature branch
- [ ] Change something in all 3 files (literally anything)
- [ ] Submit a PR to `dev`

### Level 2: Coming Soon

[//]: # (- [ ] Add a dark mode toggle)

[//]: # (- [ ] Practice rebasing your branch when `dev` moves ahead)

[//]: # (- [ ] Resolve a merge conflict &#40;we'll create one for you 😈&#41;)

### Level 3: Coming Soon

[//]: # (- [ ] Cherry-pick a commit across branches)

[//]: # (- [ ] Fix a "oh shit I committed to the wrong branch" scenario)

[//]: # (- [ ] Recover from a detached HEAD state)

## Emergency Commands (When Everything Goes Wrong)

```bash
# "I need to undo everything but keep my changes"
git reset --soft HEAD~1

# "I fucked up the merge"
git merge --abort

# "I need an adult"
# Ask for help - seriously, we've all been there
```

## Contributors

Add your name when you successfully submitted your first PR!

- [Your Name Here] - The Chosen One

## Git Jokes (Because We Need Levity)

- Why do programmers prefer dark mode? Because light attracts bugs! 🐛
- There are only 10 types of people: those who understand binary and those who don't
- Git commit -m "fix bug" (famous last words)
- "It works on my machine" ¯\\_(ツ)_/¯

## Pro Tips from the Trenches

1. **Commit early, commit often** - Like saving your game
2. **Write meaningful commit messages** - Your future self will thank you
3. **When in doubt, ask** - We'd rather answer questions than fix disasters
4. **Test your changes** - The QA team has feelings too
5. **Read the error messages** - They're usually trying to help

## The Nuclear Option

If you've truly broken everything beyond repair:

```bash
# Back up your changes first!
git stash
# or
cp -r . ../my-changes-backup

# Then start fresh
git checkout dev
git pull origin dev
git checkout -b feature/try-again-but-better
# Restore your changes and try again
```

## Quick Reference

| Command | What It Does | When To Use |
|---------|-------------|-------------|
| `git status` | Shows what's going on | When you're confused (always) |
| `git log --oneline` | Pretty commit history | Finding that commit you made yesterday |
| `git diff` | Shows your changes | Before committing |
| `git stash` | Temporary save | When you need to switch branches quickly |
| `git blame` | Find who wrote bad code | When you want to make enemies |

## Graduation Requirements

You've "git good" when you can:
- [ ] Navigate the branching strategy without breaking prod
- [ ] Resolve merge conflicts like a diplomat
- [ ] Help the next intern without laughing at their mistakes
- [ ] Use `git blame` responsibly (not for actual blaming)

## Need Help?

1. **Check this README** (you are here)
2. **Google the error message** (90% of problems)
3. **Ask a teammate** (we've all been noobs)
4. **Create an issue** in this repo
5. **Panic** (not recommended but understandable)

---

*Remember: Every senior developer was once where you are now. The only difference is we've made all these mistakes already.*

**Happy coding**

**Here is your first real test. Send Markus a picture of a giraffe before you start working. 
This shows you actually read the documentation and pay attention to details - two critical skills for any developer.**

---
*Built with ❤️ by the Markus with help from our AI overlord friends*