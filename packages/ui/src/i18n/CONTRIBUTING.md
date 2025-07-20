# Contributing Translations to Grix

Thank you for helping make Grix accessible to more people around the world! 🌍

## How to Add a New Language

1. **Fork the repository** on GitHub

2. **Copy the English translation file** as a template:
   - Copy `packages/ui/src/i18n/locales/en.json`
   - Name it with your language code (e.g., `fr.json` for French, `de.json` for German)
   - Standard language codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

3. **Translate the values** in your new file:
   - Keep the keys (left side) exactly as they are
   - Translate only the values (right side)
   - Keep any placeholders like `{count}` or `{name}` as-is
   - Mathematical terms may stay in English if commonly used that way

4. **Add your language** to the language list:
   - Edit `packages/ui/src/i18n/translations.ts`
   - Add your language to the `languages` array:
   ```typescript
   { code: 'fr', name: 'French', nativeName: 'Français', direction: 'ltr' },
   ```

5. **Test your translation**:
   - Copy your translation file to `demo-app/public/locales/`
   - Run the app locally: `npm run dev`
   - Select your language from Settings > Display > Language

6. **Submit a Pull Request** with:
   - Your new translation file
   - Updated languages list
   - A description of your contribution

## Translation Guidelines

- **Be consistent** with terminology throughout the translation
- **Keep it concise** - UI space is limited
- **Preserve formatting** - Don't remove emojis unless culturally inappropriate
- **Ask questions** if context is unclear - open an issue on GitHub
- **Mathematical notation** often stays in English (e.g., "sin", "cos", "log")

## Updating Existing Translations

If you find errors or want to improve existing translations:
1. Edit the appropriate file in `packages/ui/src/i18n/locales/`
2. Test your changes locally
3. Submit a Pull Request with a description of improvements

## Need Help?

- Open an issue on GitHub with questions
- Tag it with `translation` and your language
- We'll help provide context for difficult terms

Thank you for making Grix better for everyone! 🎉