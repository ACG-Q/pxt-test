//% color="#000000" weight=100 icon="\uf1ec" block="Test Blocks"
//% groups="['基础', '基础输入框', '特殊输入框', '特殊']"
namespace Test {
    
    //% blockId="TestHello" block="Hello World!"
    //% group="基础"
    export function helloworld() {
        console.log("Hello World")
    }
    
    //% blockId="TestInputString" block="Input String $value"
    //% value.defl='我是字符串'
    //% group="基础输入框"
    export function inputString(value:string) {
        console.log("inputString`s value: ")
        console.log(value)
    }
    
    
    //% blockId="TestInputNumber" block="Input Number $value"
    //% value.defl=0
    //% group="基础输入框"
    export function inputNumber(value: number) {
        console.log("inputNumber`s value: ")
        console.log(value)
    }

}