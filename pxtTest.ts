//% color="#000000" weight=100 icon="\uf1ec" block="Test Blocks"
//% groups="['Basic', 'Basic_Input', '特殊输入框', '特殊']"
namespace Test {
    
    //% block="Hello World!"
    //% group="Basic"
    export function helloworld() {
        console.log("Hello World")
    }
    
    //% block="Input String $value"
    //% value.defl='我是字符串'
    //% group="Basic_Input"
    export function inputString(value:string) {
        console.log("inputString`s value: ")
        console.log(value)
    }
    
    
    //% block="Input Number $value"
    //% value.defl=0
    //% group="基础输入框"
    export function inputNumber(value: number) {
        console.log("inputNumber`s value: ")
        console.log(value)
    }

}