 var c = require("../reverseString.js");

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(c.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(c.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(c.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(c.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(c.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(c.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(c.reverseString('misc')).toEqual('csim');
    });

  });

});