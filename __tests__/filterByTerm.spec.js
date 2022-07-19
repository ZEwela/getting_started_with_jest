const filterByTerm = require('../filterByTerm');

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];

      expect(filterByTerm(input, "link")).toEqual(output);

      expect(filterByTerm(input, "LINK")).toEqual(output);
    });

    test("it should throw when searchTerm is empty string", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];

        expect(() => {
          filterByTerm(input, "");
        }).toThrowError(Error("searchTerm cannot be empty"));
    });

    test("it should throw when inputArr is empty array", () => {
        const input = [];
          
        expect(() => {
          filterByTerm(input, "link");
        }).toThrowError(Error("inputArr cannot be empty"));
    });

    
  });