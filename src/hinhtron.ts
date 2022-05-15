class hinhtron {
    bankinh: number
    private pi: number = 3.14
    constructor(R: number) {
        this.bankinh = R
    }
    dienTich() {
        return this.pi * this.bankinh * this.bankinh
    }
    chuVi() {
        return 2 * this.pi * this.bankinh
    }
}

class hinhTru extends hinhtron {
    chieuCao: number
    constructor(R: number, H: number) {
        super(R)
        this.chieuCao = H
    }
    dtxq() {
        return (this.chuVi() * this.chieuCao).toFixed(2)
    }
    dttp() {
        return this.dtxq() + 2 * this.dienTich()
    }
    theTich() {
        return (this.dienTich() * this.chieuCao).toFixed(2)
    }
}
var hinh = []
hinh[0] = new hinhtron(99)
hinh[1] = new hinhtron(10)
hinh[2] = new hinhtron(2)
hinh[3] = new hinhtron(24)
hinh[4] = new hinhtron(5678)
hinh[5] = new hinhTru(12, 20)
hinh[6] = new hinhTru(10, 27)
hinh[7] = new hinhTru(53, 10)
hinh[8] = new hinhTru(2, 47)
hinh[9] = new hinhTru(5, 4)
hinh[10] = new hinhTru(12, 11)

for (let i = 0; i < hinh.length; i++) {
    if (i < 5) {
        console.log(`hình tròn với R = ${hinh[i].bankinh} có`)
        console.log("Diện tích là " + hinh[i].dienTich())
        console.log("Chu Vi là " + hinh[i].chuVi())
    } else {
        console.log(`hình trụ với R = ${hinh[i].bankinh} và H = ${hinh[i].chieuCao} có`)
        console.log("Diện tích xung quanh là " + hinh[i].dtxq())
        console.log("Diện tích toàn phần là " + hinh[i].dttp())
        console.log("V là " + hinh[i].theTich())
    }
}
for (let i = 0; i < hinh.length; i++) {
    if (i < 5) {
        document.write(`hình tròn với R = ${hinh[i].bankinh} có` + `<br>`)
        document.write("Diện tích là " + hinh[i].dienTich() + `<br>`)
        document.write("Chu Vi là " + hinh[i].chuVi() + `<br>` + "<br>")
    } else {
        document.write(`hình trụ với R = ${hinh[i].bankinh} và H = ${hinh[i].chieuCao} có` + `<br>`)
        document.write("Diện tích xung quanh là " + hinh[i].dtxq() + `<br>`)
        document.write("Diện tích toàn phần là " + hinh[i].dttp() + `<br>`)
        document.write("V là " + hinh[i].theTich() + `<br>` + "<br>")
    }
}
console.log(typeof (hinh[1]))