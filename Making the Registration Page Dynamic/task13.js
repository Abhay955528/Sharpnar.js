function getColdDrinks() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('which come after husband gets butter')
        }, 4000)
    })
}
function createPost1() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('POST1')
        }, 1000)
    })
}
function createPost2() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('POST2')
        }, 1000)
    })
}

function createPost3() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('POST3')
        }, 1000)
    })
}

function deletePost() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                reslove(poppedElement);
            }
            else {
                reject('ERROR: Array is Empty ')
            }
        }, 500)
    })
}


async function cinemaHall() {
    let text1 = await getColdDrinks();
    // console.log(text1);
    let post1 = await createPost1();
    // console.log(post1);
    let post2 = await createPost2();
    // console.log(post2);
    let post3 = await createPost3();
    // console.log(post3);


    let [a,b,c,d] = await Promise.all([text1,post1,post2,post3])

    console.log(`${a} , ${b} , ${c} ,${d}`);
}

cinemaHall();