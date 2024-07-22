import { BuiltinMask } from "./typing";

export const TW_MASKS: BuiltinMask[] = [
  {
    avatar: "1f978",
    name: "機器學習",
    context: [
      {
        id: "ml-0",
        role: "user",
        content:
          "我想讓你擔任機器學習工程師的角色。我會寫一些機器學習的概念，你的工作就是用通俗易懂的術語來解釋它們。這可能包括提供建立模型的分步說明、給出所用的技術或者理論、提供評估函式等。我的問題是",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "tw",
    builtin: true,
    createdAt: 1688899480512,
  },
];
