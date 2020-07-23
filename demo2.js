function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('long time value') }, 3000);
    })
}

async function test(){
    const v = await takeLongTime();
    console.log(v);
}

test(); // long time value