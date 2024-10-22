module.exports.config = {
  name: "style5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",
  description: "Convert normal text to a Bold2 font",
  commandCategory: "Convert text into style",
  usePrefix: true,
  usages: "[Text]",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;
  const textToStyle = args.join(" ");

  if (!textToStyle) {
    api.sendMessage("Please provide the text you want to style.", threadID, messageID);
    return;
  }
  const styledFontMap = {
    a: '░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝\n', b: '██████╗░\n██╔══██╗\n██████╦╝\n██╔══██╗\n██████╦╝\n ╚═════╝░\n', c: '\n░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░\n', d: '\n██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░\n', e: '███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n███████╗\n╚══════╝',
    f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣',
    k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨',
    p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭',
    u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲',
    z: '𝐳', A: '𝐀', B: '𝐁', C: '𝐂', D: '𝐃',
    E: '𝐄', F: '𝐅', G: '𝐆', H: '𝐇', I: '𝐈',
    J: '𝐉', K: '𝐊', L: '𝐋', M: '𝐌', N: '𝐍',
    O: '𝐎', P: '𝐏', Q: '𝐐', R: '𝐑', S: '𝐒',
    T: '𝐓', U: '𝐔', V: '𝐕', W: '𝐖', X: '𝐗',
    Y: '𝐘', Z: '𝐙', '0': '𝟎', '1': '𝟏', '2': '𝟐',
    '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕','8': '𝟖', '9': '𝟗', '?': '?', '!': '!'
  };

  //convert the input text to the styled text
  const styledText = textToStyle.split('').map(char => styledFontMap[char] || char).join('');
  api.sendMessage(styledText, threadID, messageID);
};