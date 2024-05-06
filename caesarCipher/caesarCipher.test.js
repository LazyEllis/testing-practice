import caesarCipher from "./caesarCipher";

test("Cipher a single letter", () => {
  expect(caesarCipher("a", 3)).toBe("d");
});

test("Cipher a single capital letter", () => {
  expect(caesarCipher("A", 3)).toBe("D");
});

test("Cipher the letter z", () => {
  expect(caesarCipher("z", 3)).toBe("c");
});

test("Cipher a single word", () => {
  expect(caesarCipher("Development", 3)).toBe("Ghyhorsphqw");
});

test("Cipher a single word with varying shift factora", () => {
  expect(caesarCipher("Debugging", 5)).toBe("Ijgzllnsl");
});

test("Cipher multiple words", () => {
  expect(caesarCipher("Asynchronous JavaScript", 4)).toBe(
    "Ewcrglvsrsyw NezeWgvmtx"
  );
});

test("Cipher words with punctuations", () => {
  expect(
    caesarCipher("HTML, CSS, and JavaScript are the languages of the web.", 6)
  ).toBe("NZSR, IYY, gtj PgbgYixovz gxk znk rgtmagmky ul znk ckh.");
});

test("Cipher with zero shift factor", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("Cipher with negative shift factor", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("Cipher with large positive shift factor", () => {
  expect(caesarCipher("abc", 30)).toBe("efg");
});

test("Cipher with special characters", () => {
  expect(caesarCipher("a!b@c#1", 3)).toBe("d!e@f#1");
});

test("Case insensitivity", () => {
  expect(caesarCipher("AbCdEfG", 3)).toBe("DeFgHiJ");
});
