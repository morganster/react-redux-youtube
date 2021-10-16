const rewire = require("rewire")
const VideoActions = rewire("./VideoActions")
const select = VideoActions.__get__("select")
const paginateSearch = VideoActions.__get__("paginateSearch")
const nextVideo = VideoActions.__get__("nextVideo")
// @ponicode
describe("select", () => {
    test("0", () => {
        let callFunction = () => {
            select(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            select(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            select(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("paginateSearch", () => {
    test("0", () => {
        let callFunction = () => {
            paginateSearch("UNLOCK TABLES;", "http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            paginateSearch("UPDATE Projects SET pname = %s WHERE pid = %s", "http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            paginateSearch("DELETE FROM Projects WHERE pid = %s", "http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            paginateSearch("DELETE FROM Projects WHERE pid = %s", "https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            paginateSearch("UPDATE Projects SET pname = %s WHERE pid = %s", "https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            paginateSearch(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("nextVideo", () => {
    test("0", () => {
        let callFunction = () => {
            nextVideo("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            nextVideo("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            nextVideo("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            nextVideo("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            nextVideo("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            nextVideo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
