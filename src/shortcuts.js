const CTRL = "Ctrl"
const CMD = "⌘"
const TAB = "⇥"
const SHIFT = "⇧"
const SPACE = "\xa0\xa0\xa0\xa0\xa0\xa0"

export default [
  {
    name: "Vim",
    commands: [
      { keys: [CTRL, "V"], desc: "Block select mode" },
      { keys: ['"', "A", "Y"], desc: "Copy selected text to register A" },
      { keys: ["Q", "A", "…", "Q"], desc: "Record macro A" },
      { keys: ["@", "A"], desc: "Play macro A" },
    ],
  },
  {
    name: "MacOS",
    commands: [
      { keys: [CMD, CTRL, SPACE], desc: "Emoji keyboard" },
      { keys: [CMD, TAB], desc: "Switch programs" },
      { keys: [CTRL, "`"], desc: "Switch instance of current program" },
    ],
  },
  {
    name: "VS Code",
    commands: [
      { keys: [CTRL, TAB], desc: "Recently used files" },
      { keys: [CTRL, "`"], desc: "Switch between terminal" },
      { keys: [CMD, "P"], desc: "Find file" },
      { keys: [SHIFT, CMD, "P"], desc: "Command palette" },
    ],
  },
]
