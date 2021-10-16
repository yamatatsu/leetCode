import rewire from "rewire"
const _14 = rewire("./14")
const longestCommonPrefix = _14.__get__("longestCommonPrefix")
const longestCommonPrefix_slow = _14.__get__("longestCommonPrefix_slow")
// @ponicode
describe("longestCommonPrefix", () => {
    test("0", () => {
        let callFunction: any = () => {
            longestCommonPrefix(["Foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            longestCommonPrefix(["foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            longestCommonPrefix(["Foo bar", "This is a Text"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            longestCommonPrefix(["Hello, world!"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            longestCommonPrefix(["foo bar", "Foo bar", "foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            longestCommonPrefix([])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("longestCommonPrefix_slow", () => {
    test("0", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow(["foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow(["Foo bar", "foo bar", "foo bar", "foo bar", "Foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow(["Foo bar", "Hello, world!", "foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow(["This is a Text", "foo bar", "Hello, world!"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow(["Foo bar"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            longestCommonPrefix_slow([])
        }
    
        expect(callFunction).not.toThrow()
    })
})
