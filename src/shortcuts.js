const CTRL = "Ctrl"
const CMD = "⌘"
const TAB = "⇥"
// const SHIFT = "⇧"
const SPACE = "\xa0\xa0\xa0\xa0\xa0\xa0"

export default [
  {
    name: "MacOS",
    commands: [
      { keys: [CMD, CTRL, SPACE], desc: "Emoji keyboard" },
      { keys: [CMD, TAB], desc: "Switch programs" },
      { keys: [CMD, "`"], desc: "Switch instance of current program" },
    ],
  },
  {
    name: "Vim",
    commands: [
      { keys: ['"', "A", "Y"], desc: "Copy selected text to register A" },
      { keys: ["Q", "A", "…", "Q"], desc: "Record macro A" },
      { keys: ["@", "A"], desc: "Play macro A" },
    ],
  },
  {
    name: "VS Code",
    commands: [
      { keys: [CTRL, TAB], desc: "Recently used files" },
      { keys: [CTRL, "`"], desc: "Switch between terminal" },
    ],
  },
]
