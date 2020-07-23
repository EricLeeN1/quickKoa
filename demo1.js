async function testAsync() {
    return 'hello World'
}

function test() {
    return 'hello World'
}

async function testAsync1() {
    const res1 = await test();
    const res2 = await testAsync();
    console.log(res1, res2);
}



// console.log(testAsync()); // Promise { 'hello World' }
// console.log(test()); // 'hello World'

testAsync1();// hello World hello World