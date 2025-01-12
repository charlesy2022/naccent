// Create a mapping object for ARPABET phonemes
export const ARPABETMapping = {
  // Vowels
  'ɑ': 'aa',
  'æ': 'ae',
  'ə': 'ah0',
  'ʌ': 'ah1',
  'ɔ': 'ao',
  'aʊ': 'aw',
  'aɪ': 'ay',
  'ɛ': 'eh',
  'ɚ': 'er',
  'eɪ': 'ey',
  'ɪ': 'ih',
  'i': 'iy',
  'oʊ': 'ow',
  'ɔɪ': 'oy',
  'ʊ': 'uh',
  'u': 'uw',

  // Consonants
  'b': 'b',
  'tʃ': 'ch',
  'd': 'd',
  'ð': 'dh',
  'f': 'f',
  'g': 'g',
  'h': 'hh',
  'dʒ': 'jh',
  'k': 'k',
  'l': 'l',
  'm': 'm',
  'n': 'n',
  'ŋ': 'ng',
  'p': 'p',
  'r': 'r',
  's': 's',
  'ʃ': 'sh',
  't': 't',
  'θ': 'th',
  'v': 'v',
  'w': 'w',
  'j': 'y',
  'z': 'z',
  'ʒ': 'zh'
};

// Common word to ARPABET mapping
export const commonWordsToARPABET = {
  'hello': 'hh|eh|l|ow',
  'world': 'w|er|l|d',
  'hi': 'hh|ay',
  'bye': 'b|ay',
  'yes': 'y|eh|s',
  'no': 'n|ow',
  'good': 'g|uh|d',
  'bad': 'b|ae|d',
  'the': 'dh|ah',
  'and': 'ae|n|d',
  'is': 'ih|z',
  'in': 'ih|n',
  'it': 'ih|t',
  'at': 'ae|t',
  'that': 'dh|ae|t',
  'this': 'dh|ih|s',
  'with': 'w|ih|th',
  'from': 'f|r|ah|m',
  'they': 'dh|ey',
  'are': 'aa|r',
  // Add more common words as needed
}; 