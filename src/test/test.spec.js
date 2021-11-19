
    describe("startCondition()", () => {

        it("min input should be empty", () => {
            startCondition()
            let  min = document.querySelector('.minNumber').value = ''
            expect(min).to.be.empty
        })
        it("max input should be empty", () => {
            startCondition()
            let  max  = document.querySelector('.maxNumber').value = ''
            expect(max).to.be.empty
        })
        it("attempts input should be empty", () => {
            startCondition()
            let  attempts  = document.querySelector('.attempts').value = ''
            expect(attempts).to.be.empty
        })
        it("arr should be empty", () => {
            startCondition()
            let  arr  = document.querySelector('.back__user-number').textContent = ''
            expect(arr).to.be.empty
        })
        it("userNumbers length should be 0", () => {
            startCondition()
            expect(usedNumbers.length).to.equal(0)
        })
    })

    describe("generateRandomNumber()", () => {

        it("generated number should be => 1 && <=20", () => {
            let flag
            let random = generateRandomNumber(1, 20)
            if (random => 1 && random<=20) {
                 flag = true
            } else {
                 flag = false
            }
            expect(flag).to.be.true
        })
    })
