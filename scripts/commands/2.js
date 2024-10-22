module.exports.config = {
  name: "style2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",
  description: "Convert normal text to a italic font",
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
    a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦',
    f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
    k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰',
    p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
    u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺',
    z: '𝘻', A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋',
    E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐',
    J: '𝘑', K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕',
    O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚',
    T: '𝘛', U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟',
    Y: '𝘠', Z: '𝘡', '0': '𝟬', '1': '𝟭', '2': '𝟮',
    '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳',
    '8': '𝟴', '9': '𝟵', '?': '?', '!': '!'
  };

  //convert the input text to the styled text
  const styledText = textToStyle.split('').map(char => styledFontMap[char] || char).join('');
  api.sendMessage(styledText, threadID, messageID);
};