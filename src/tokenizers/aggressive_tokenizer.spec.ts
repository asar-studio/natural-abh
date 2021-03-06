import { AggressiveTokenizer } from './aggressive_tokenizer';

const tokenizer = new AggressiveTokenizer();

const string =  'Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аҧсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)';

const tokens = [
  'Аҧсны',
  'Аҳәынҭқарра',
  'Ашьаустә',
  'закәанеидкыла',
  '10',
  '01',
  '2007',
  'шықәсазтәи',
  '1555',
  'с',
  'иаднакылт',
  'Аҧсны',
  'Жәлар',
  'Реизара',
  'Апарламент',
  '2006',
  'ш',
  'ԥхынҷкәынмза',
  '28',
  'рзы',
  'аредакциа',
  '29',
  '06',
  '2016'
];
test('должен быть инстансом класса AggressiveTokenizer', () => {
  expect(tokenizer).toBeInstanceOf(AggressiveTokenizer);
});

test('должен правильно токенизировать строку', () => {
  expect(tokenizer.tokenize(string)).toStrictEqual(tokens);
});
