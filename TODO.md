# Feature

## Show dumps
* output ready-only dumps
* sorted by most recent

## Tags
* show all tags at top
* clicking tag toggles filters

## Edit dumps

## Add new dumps
* should allow any text, no formatting
* code should not run when displayed (react should take care of this automatically)

## Password field
* add a hidden text field called password
* if it's populated, then must be a bot and ignore the sign in
* front-end protect so doesn't hit the server

## Enhance dumps
* syntax highlighting
* link to dumps

## Dark mode
* detect user's os dark mode setting
@media (prefers-color-scheme: dark) {
    body {
        background-color: #000;
        color: white;
    }
}

## Enhance login
* save cookie
